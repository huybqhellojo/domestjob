import * as faceapi from '@vladmandic/face-api';
import JSZip from 'jszip';

// Define constants
const FACEAPI_MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model';
let modelsLoaded = false;

// Function to load models if they haven't been loaded yet
const loadModels = async () => {
    if (modelsLoaded) return;
    try {
        // Using specific models to potentially reduce load times
        await faceapi.nets.ssdMobilenetv1.loadFromUri(FACEAPI_MODEL_URL);
        await faceapi.nets.faceLandmark68Net.loadFromUri(FACEAPI_MODEL_URL);
        await faceapi.nets.faceRecognitionNet.loadFromUri(FACEAPI_MODEL_URL);
        modelsLoaded = true;
    } catch (error) {
        console.error("Worker: Failed to load face-api models", error);
        // Post an error message back to the main thread
        self.postMessage({ error: 'Failed to load models' });
        throw error; // Rethrow to stop execution if models fail to load
    }
};

const cropFaceFromImage = async (imageUrl: string): Promise<string | null> => {
    return new Promise((resolve, reject) => {
        // `createCanvasFromMedia` is not available in worker context.
        // We need to use OffscreenCanvas.
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = imageUrl;

        img.onload = async () => {
            const canvas = new OffscreenCanvas(img.width, img.height);
            const ctx = canvas.getContext('2d');
            if (!ctx) return resolve(null);
            ctx.drawImage(img, 0, 0);

            const detections = await faceapi.detectAllFaces(canvas as any).withFaceLandmarks().withFaceDescriptors();
            if (detections.length === 0) {
                return resolve(null);
            }

            const detection = detections[0];
            const { x, y, width, height } = detection.detection.box;
            
            const padding = width * 0.4;
            const cropCanvas = new OffscreenCanvas(width + padding * 2, height + padding * 2);
            const cropCtx = cropCanvas.getContext('2d');
            if (!cropCtx) return resolve(null);

            cropCtx.drawImage(
                canvas,
                x - padding, y - padding,
                width + padding * 2, height + padding * 2,
                0, 0,
                cropCanvas.width, cropCanvas.height
            );
            
            const blob = await cropCanvas.convertToBlob({ type: 'image/png' });
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        };
        img.onerror = (err) => {
             console.error("Worker: Image loading failed", err);
             resolve(null);
        };
    });
};

const extractAndCropImageFromFile = async (file: File): Promise<string | null> => {
    const fileType = file.type;

    if (fileType.startsWith('image/')) {
        const dataUrl = await new Promise<string>(resolve => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.readAsDataURL(file);
        });
        return cropFaceFromImage(dataUrl);
    }

    if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        const zip = await JSZip.loadAsync(file);
        const imageFiles = zip.folder('word/media')?.files;
        if (!imageFiles) return null;

        for (const fileName in imageFiles) {
            if (Object.prototype.hasOwnProperty.call(imageFiles, fileName)) {
                const imageFile = imageFiles[fileName];
                try {
                    const blob = await imageFile.async('blob');
                    const dataUrl = await new Promise<string>(resolve => {
                        const reader = new FileReader();
                        reader.onload = () => resolve(reader.result as string);
                        reader.readAsDataURL(blob);
                    });
                    const croppedImage = await cropFaceFromImage(dataUrl);
                    if (croppedImage) {
                        return croppedImage; // Return the first face found
                    }
                } catch (e) {
                    console.error("Worker: Error processing image from docx", fileName, e);
                }
            }
        }
    }
    
    // PDF processing is complex and heavy for a worker without a library like pdf.js
    // For now, we will skip it and can add it later.
    if (fileType === 'application/pdf') {
        self.postMessage({ notification: "PDF processing is not yet supported for face detection." });
    }

    return null;
};


// Listen for messages from the main thread
self.addEventListener('message', async (event: MessageEvent<{ file: File }>) => {
    const { file } = event.data;

    try {
        await loadModels(); // Ensure models are loaded
        const avatarUrl = await extractAndCropImageFromFile(file);
        self.postMessage({ avatarUrl });
    } catch (error) {
        console.error("Worker: An error occurred during face detection processing:", error);
        self.postMessage({ error: (error as Error).message });
    }
});
