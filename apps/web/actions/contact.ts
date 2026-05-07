"use server";

import "server-only";

import { resend } from "@repo/email";
import { keys as emailKeys } from "@repo/email/keys";
import ContactTemplate from "@repo/email/templates/contact";
import type { ActionResult } from "@repo/next-config/action-result";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const contactSubmissionSchema = z.object({
  locale: z.string().min(1),
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z.string().trim().email("Please enter a valid email address"),
  company: z.string().trim().min(1, "Company name is required"),
  phone: z.string().trim().optional(),
  service: z.string().trim().min(1, "Please select a service"),
  message: z
    .string()
    .trim()
    .min(10, "Please provide more detail about your project"),
});

type ContactActionData = {
  message: string;
};

const getFormValue = (formData: FormData, key: string) => {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
};

export const submitContact = async (
  _previousState: ActionResult<ContactActionData> | null,
  formData: FormData
): Promise<ActionResult<ContactActionData>> => {
  const parsedInput = contactSubmissionSchema.safeParse({
    locale: getFormValue(formData, "locale"),
    firstName: getFormValue(formData, "firstName"),
    lastName: getFormValue(formData, "lastName"),
    email: getFormValue(formData, "email"),
    company: getFormValue(formData, "company"),
    phone: getFormValue(formData, "phone") || undefined,
    service: getFormValue(formData, "service"),
    message: getFormValue(formData, "message"),
  });

  if (!parsedInput.success) {
    return {
      error: "Please correct the highlighted fields and try again.",
      fieldErrors: parsedInput.error.flatten().fieldErrors,
    };
  }

  const { RESEND_FROM } = emailKeys();

  if (!(resend && RESEND_FROM)) {
    return {
      error: "Contact form email delivery is not configured.",
    };
  }

  const { locale, firstName, lastName, email, company, phone, service, message } =
    parsedInput.data;

  try {
    await resend.emails.send({
      from: RESEND_FROM,
      to: ["info@lsinc.com"],
      replyTo: email,
      subject: `New contact form inquiry from ${firstName} ${lastName}`,
      react: ContactTemplate({
        name: `${firstName} ${lastName}`.trim(),
        email,
        message: [
          `Company: ${company}`,
          `Phone: ${phone || "Not provided"}`,
          `Service: ${service}`,
          "",
          message,
        ].join("\n"),
      }),
    });

    revalidatePath(`/${locale}/contact`);

    return {
      data: {
        message:
          "Thank you for reaching out. Our team will review your inquiry and respond within one business day.",
      },
    };
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "Unable to send your message right now.",
    };
  }
};

export type ContactSubmissionFieldErrors =
  | Record<string, string[] | undefined>
  | undefined;
