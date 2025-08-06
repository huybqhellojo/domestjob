
'use server';
/**
 * @fileOverview An AI flow to detect and crop a face from an image for an avatar.
 *
 * - extractAvatar - A function that handles the avatar extraction process.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';


const AvatarOutputSchema = z.object({
  croppedAvatar: z.string().describe("The cropped avatar image as a data URI in JPEG format. If no face is found, this should be an empty string."),
});

// The prompt to ask the AI to find and crop a face in the image.
const cropAvatarPrompt = ai.definePrompt({
    name: 'cropAvatarPrompt',
    input: { schema: z.object({ image: z.string() }) },
    output: { schema: AvatarOutputSchema },
    prompt: `Analyze the following image and identify the location of the main human face.
    Crop the image into a square that perfectly frames the face, adding a 20% padding around the detected face bounding box.
    Return the resulting cropped image as a JPEG data URI.
    If no clear human face is visible, return an empty string for the croppedAvatar field.
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
      
      const { output } = await cropAvatarPrompt({ image: dataUri });

      if (!output || !output.croppedAvatar) {
        console.log("No face found or cropped by AI.");
        return null; // Return null if no face is found or cropped
      }
      
      return output.croppedAvatar;

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
