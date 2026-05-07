"use server";

import "server-only";

import { auth, currentUser } from "@repo/auth/server";
import { authenticate } from "@repo/collaboration/auth";
import type { ActionResult } from "@repo/next-config/action-result";
import { z } from "zod";

const COLORS = [
  "var(--color-red-500)",
  "var(--color-orange-500)",
  "var(--color-amber-500)",
  "var(--color-yellow-500)",
  "var(--color-lime-500)",
  "var(--color-green-500)",
  "var(--color-emerald-500)",
  "var(--color-teal-500)",
  "var(--color-cyan-500)",
  "var(--color-sky-500)",
  "var(--color-blue-500)",
  "var(--color-indigo-500)",
  "var(--color-violet-500)",
  "var(--color-purple-500)",
  "var(--color-fuchsia-500)",
  "var(--color-pink-500)",
  "var(--color-rose-500)",
] as const;

const collaborationAuthInputSchema = z.object({
  room: z.string().min(1).optional(),
});

const collaborationAuthResponseSchema = z.object({
  token: z.string().min(1),
});

export const authenticateCollaboration = async (
  input: z.input<typeof collaborationAuthInputSchema>
): Promise<ActionResult<z.infer<typeof collaborationAuthResponseSchema>>> => {
  const parsedInput = collaborationAuthInputSchema.safeParse(input);

  if (!parsedInput.success) {
    return {
      error: "Invalid collaboration auth request.",
      fieldErrors: parsedInput.error.flatten().fieldErrors,
    };
  }

  try {
    const user = await currentUser();
    const { orgId } = await auth();

    if (!(user && orgId)) {
      return { error: "Unauthorized" };
    }

    const response = await authenticate({
      userId: user.id,
      orgId,
      userInfo: {
        name:
          user.fullName ?? user.emailAddresses.at(0)?.emailAddress ?? undefined,
        avatar: user.imageUrl ?? undefined,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      },
    });

    const responseBody = await response.text();

    if (!response.ok) {
      return {
        error: responseBody || "Unable to authenticate collaboration session.",
      };
    }

    const parsedResponse = collaborationAuthResponseSchema.safeParse(
      JSON.parse(responseBody)
    );

    if (!parsedResponse.success) {
      return { error: "Liveblocks auth response was invalid." };
    }

    return { data: parsedResponse.data };
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "Unable to authenticate collaboration session.",
    };
  }
};
