"use server";

import { z } from "zod";
import { contactFormAutoResponse } from "@/ai/flows/contact-form-auto-response";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function handleContactForm(data: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid data provided. Please check the form and try again.",
    };
  }

  try {
    const result = await contactFormAutoResponse(validatedFields.data);
    return {
      success: true,
      message: result.autoResponse,
    };
  } catch (error) {
    console.error("Error in contact form AI flow:", error);
    return {
      success: false,
      message: "An unexpected error occurred on our end. Please try again later.",
    };
  }
}
