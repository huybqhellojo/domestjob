
'use server';
/**
 * @fileOverview An AI flow to detect and extract a face from an image for an avatar.
 *
 * - extractAvatar - A function that handles the avatar extraction process.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {Canvas, Image} from 'canvas';

// Schema for the output of the face detection prompt.
const FaceLocationSchema = z.object({
  x: z.number().describe('The x-coordinate of the top-left corner of the bounding box.'),
  y: z.number().describe('The y-coordinate of the top-left corner of the bounding box.'),
  width: z.number().describe('The width of the bounding box.'),
  height: z.number().describe('The height of the bounding box.'),
  faceFound: z.boolean().describe('Whether a face was found in the image.'),
});

// The prompt to ask the AI to find a face in the image.
const faceFinderPrompt = ai.definePrompt({
    name: 'faceFinderPrompt',
    input: { schema: z.object({ image: z.string() }) },
    output: { schema: FaceLocationSchema },
    prompt: `Analyze the following image and identify the location of the main human face.
    Provide the coordinates of a square bounding box that perfectly frames the face.
    If no clear human face is visible, set faceFound to false.
    Image: {{media url=image}}`,
    model: 'googleai/gemini-2.0-flash',
});


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
      
      const { output } = await faceFinderPrompt({ image: dataUri });

      if (!output || !output.faceFound) {
        console.log("No face found by AI.");
        return null; // Return null if no face is found
      }
      
      const box = output;

      // Convert data URI to a Buffer for processing
      const buffer = Buffer.from(dataUri.split(',')[1], 'base64');
      
      const image = new Image();
      // Wait for the image to be decoded from the buffer
      await new Promise((resolve, reject) => {
          image.onload = resolve;
          image.onerror = reject;
          image.src = buffer;
      });
      
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
