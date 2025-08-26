'use server';

/**
 * @fileOverview A contact form auto-response AI agent.
 *
 * - contactFormAutoResponse - A function that handles the contact form auto-response process.
 * - ContactFormAutoResponseInput - The input type for the contactFormAutoResponse function.
 * - ContactFormAutoResponseOutput - The return type for the contactFormAutoResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContactFormAutoResponseInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person submitting the form.'),
  message: z.string().describe('The message content from the contact form.'),
});
export type ContactFormAutoResponseInput = z.infer<typeof ContactFormAutoResponseInputSchema>;

const ContactFormAutoResponseOutputSchema = z.object({
  autoResponse: z.string().describe('The AI-generated acknowledgment message.'),
});
export type ContactFormAutoResponseOutput = z.infer<typeof ContactFormAutoResponseOutputSchema>;

export async function contactFormAutoResponse(input: ContactFormAutoResponseInput): Promise<ContactFormAutoResponseOutput> {
  return contactFormAutoResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contactFormAutoResponsePrompt',
  input: {schema: ContactFormAutoResponseInputSchema},
  output: {schema: ContactFormAutoResponseOutputSchema},
  prompt: `You are an AI assistant tasked with generating an acknowledgment message for a contact form submission.

  The user's name is: {{{name}}}
  The user's email is: {{{email}}}
  The user's message is: {{{message}}}

  Generate a friendly and professional acknowledgment message, confirming that their message has been received and Tirthankar will review it shortly.
  Keep the message concise and under 100 words.
  Make sure to thank them for reaching out.
  `,
});

const contactFormAutoResponseFlow = ai.defineFlow(
  {
    name: 'contactFormAutoResponseFlow',
    inputSchema: ContactFormAutoResponseInputSchema,
    outputSchema: ContactFormAutoResponseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
