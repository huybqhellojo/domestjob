
import { z } from 'zod';

export const CandidateProfileSchema = z.object({
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
