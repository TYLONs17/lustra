"use server";

import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(255),
  phone: z.string().min(7).max(20),
  service: z.string().optional(),
  message: z.string().min(10).max(1000),
  website: z.string().optional(), // honeypot
});

export async function submitContact(formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    message: formData.get("message"),
    website: formData.get("website"), // honeypot
  };

  // Bot trap
  if (data.website) {
    return { success: true };
  }

  const parsed = ContactSchema.safeParse(data);

  if (!parsed.success) {
    return { error: "Invalid form data" };
  }

  // TODO:
  // - send email (Resend)
  // - or save to DB

  return { success: true };
}
