
'use server';
/**
 * @fileOverview An AI flow to generate a candidate profile from a resume/CV file or text.
 *
 * - createProfile - A function that handles the profile creation process.
 * - CreateProfileInput - The input type for the createProfile function.
 * - CandidateProfileSchema - The Zod schema for the output profile data.
 * - CandidateProfile - The TypeScript type for the output profile data.
 */

import {ai} from '@/ai/genkit';
import { z } from 'zod';

const CreateProfileInputSchema = z.object({
  document: z
    .string()
    .optional()
    .describe(
      "A CV or resume file, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  text: z
    .string()
    .optional()
    .describe('A string containing the user\'s resume or self-description.'),
});
export type CreateProfileInput = z.infer<typeof CreateProfileInputSchema>;

const CandidateProfileSchema = z.object({
  name: z.string().describe('The full name of the candidate.'),
  headline: z.string().describe('A professional headline for the candidate (e.g., "Software Engineer at Google").'),
  location: z.string().describe('The city and country where the candidate is located.'),
  about: z.string().describe('A brief summary or about section from the CV.'),
  education: z.array(z.object({
    school: z.string().describe('The name of the university or institution.'),
    degree: z.string().describe('The degree obtained (e.g., "Bachelor of Science in Computer Science").'),
    gradYear: z.number().describe('The year of graduation.'),
  })).describe('A list of educational qualifications.'),
  experience: z.array(z.object({
    company: z.string().describe('The name of the company.'),
    role: z.string().describe('The job title or role.'),
    period: z.string().describe('The employment period (e.g., "06/2023 - 09/2023").'),
    description: z.string().describe('A description of the responsibilities and achievements in the role.'),
  })).describe('A list of work experiences.'),
  personalInfo: z.object({
    birthYear: z.number().describe('The birth year of the candidate.'),
    gender: z.string().describe('The gender of the candidate.'),
    phone: z.string().describe('The phone number of the candidate.'),
    language: z.string().describe('Languages spoken and proficiency (e.g., "English - Fluent").'),
  }),
  interests: z.array(z.string()).describe('A list of professional interests or industries.'),
  skills: z.array(z.string()).describe('A list of key skills.'),
  certifications: z.array(z.string()).describe('A list of certifications or awards.'),
  desiredIndustry: z.string().describe('The desired industry for future roles.'),
});

export type CandidateProfile = z.infer<typeof CandidateProfileSchema>;


export async function createProfile(
  input: CreateProfileInput
): Promise<CandidateProfile> {
  return createProfileFlow(input);
}

const prompt = ai.definePrompt({
  name: 'createProfilePrompt',
  input: {schema: CreateProfileInputSchema},
  output: {schema: CandidateProfileSchema, format: 'json'},
  model: 'googleai/gemini-1.5-flash-latest',
  prompt: `You are an expert resume analyst. Your task is to extract structured information from the provided document or text.
  Analyze the content carefully and populate all the fields in the provided JSON schema.
  Pay close attention to dates, job titles, and skills.

  If some information is not available, leave the corresponding string fields empty and array fields as empty arrays.
  
  {{#if document}}
  Document:
  {{media url=document}}
  {{/if}}

  {{#if text}}
  Text content:
  {{{text}}}
  {{/if}}
  `,
});

const createProfileFlow = ai.defineFlow(
  {
    name: 'createProfileFlow',
    inputSchema: CreateProfileInputSchema,
    outputSchema: CandidateProfileSchema,
  },
  async (input) => {
    if (!input.document && !input.text) {
      throw new Error("Either a document or text must be provided.");
    }
    const {output} = await prompt(input);
    if (!output) {
        throw new Error("The AI failed to generate a profile. Please try again.");
    }
    return output;
  }
);
