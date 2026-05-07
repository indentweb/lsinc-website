"use server";

import "server-only";

import {
  auth,
  clerkClient,
  type OrganizationMembership,
} from "@repo/auth/server";
import type { ActionResult } from "@repo/next-config/action-result";
import Fuse from "fuse.js";
import { z } from "zod";

const searchUsersInputSchema = z.string().trim().min(1);

const getName = (user: OrganizationMembership): string | undefined => {
  let name = user.publicUserData?.firstName;

  if (name && user.publicUserData?.lastName) {
    name = `${name} ${user.publicUserData.lastName}`;
  } else if (!name) {
    name = user.publicUserData?.identifier;
  }

  return name;
};

export const searchUsers = async (
  input: z.input<typeof searchUsersInputSchema>
): Promise<ActionResult<string[]>> => {
  const parsedInput = searchUsersInputSchema.safeParse(input);

  if (!parsedInput.success) {
    return {
      error: "Invalid search query.",
      fieldErrors: {
        query: parsedInput.error.flatten().formErrors,
      },
    };
  }

  try {
    const { orgId } = await auth();

    if (!orgId) {
      return { error: "Not logged in" };
    }

    const clerk = await clerkClient();

    const members = await clerk.organizations.getOrganizationMembershipList({
      organizationId: orgId,
      limit: 100,
    });

    const users = members.data.map((user) => ({
      id: user.id,
      name: getName(user) ?? user.publicUserData?.identifier,
      imageUrl: user.publicUserData?.imageUrl,
    }));

    const fuse = new Fuse(users, {
      keys: ["name"],
      minMatchCharLength: 1,
      threshold: 0.3,
    });

    const data = fuse.search(parsedInput.data).map((result) => result.item.id);

    return { data };
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "Problem resolving mention suggestions",
    };
  }
};
