
'use server';
/**
 * @fileOverview An AI flow to detect and extract a face from an image for an avatar.
 *
 * - extractAvatar - A function that handles the avatar extraction process.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import * as tf from '@tensorflow/tfjs-node';
import * as faceapi from '@vladmandic/face-api';
import {Canvas, Image} from 'canvas';

// Polyfill Canvas and Image for face-api.js in Node.js environment
// @ts-ignore
faceapi.env.monkeyPatch({Canvas, Image});

// A flag to ensure models are loaded only once.
let modelsLoaded = false;

async function loadModels() {
  if (modelsLoaded) {
    return;
  }
  // This uses a reliable public CDN to load models.
  const modelPath = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/';
  try {
    await Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri(modelPath),
      faceapi.nets.faceLandmark68Net.loadFromUri(modelPath),
      faceapi.nets.faceRecognitionNet.loadFromUri(modelPath),
    ]);
    modelsLoaded = true;
    console.log('FaceAPI models loaded successfully on server.');
  } catch (error) {
    console.error('Error loading FaceAPI models on server:', error);
    // Throw error so the flow fails gracefully
    throw new Error('Could not load face detection models on the server.');
  }
}

const extractAvatarFlow = ai.defineFlow(
  {
    name: 'extractAvatarFlow',
    inputSchema: z.string().describe(
      "A photo of a person, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
    outputSchema: z.string().nullable(),
  },
  async (dataUri) => {
    try {
      // Ensure AI models are loaded before proceeding.
      await loadModels();

      // Convert data URI to a Buffer for processing
      const buffer = Buffer.from(dataUri.split(',')[1], 'base64');
      
      const image = new Image();
      // Wait for the image to be decoded from the buffer
      await new Promise((resolve, reject) => {
          image.onload = resolve;
          image.onerror = reject;
          image.src = buffer;
      });

      // Detect a single face with the highest confidence.
      const detection = await faceapi.detectSingleFace(image as any, new faceapi.SsdMobilenetv1Options({minConfidence: 0.5}));
      
      // If no face is detected, return null.
      if (!detection) {
        return null;
      }
      
      const box = detection.box;
      
      // Add some padding around the detected face to create a better avatar
      const padding = box.width * 0.4;
      const sx = Math.max(0, box.x - padding);
      const sy = Math.max(0, box.y - padding);
      const sWidth = box.width + padding * 2;
      const sHeight = box.height + padding * 2;
      
      // Create a new canvas to draw the cropped face
      const canvas = new Canvas(sWidth, sHeight);
      const ctx = canvas.getContext('2d');
      
      // Draw the cropped portion of the image onto the canvas
      ctx.drawImage(image as any, sx, sy, sWidth, sHeight, 0, 0, sWidth, sHeight);

      // Return the result as a JPEG data URI.
      return canvas.toDataURL('image/jpeg');

    } catch (error) {
      console.error("Error during avatar extraction flow:", error);
      // Return null if any error occurs during the process
      return null;
    }
  }
);


export async function extractAvatar(
  imageAsDataUri: string
): Promise<string | null> {
  return extractAvatarFlow(imageAsDataUri);
}


    