import { internationalizationMiddleware } from "@repo/internationalization/proxy";
import { parseError } from "@repo/observability/error";
import { secure } from "@repo/security";
import {
  noseconeOptions,
  noseconeOptionsWithToolbar,
  securityMiddleware,
} from "@repo/security/proxy";
import { type NextProxy, type NextRequest, NextResponse } from "next/server";
import { env } from "@/env";

export const config = {
  // matcher tells Next.js which routes to run the proxy on. This runs the
  // proxy on all routes except for static assets and Posthog ingest
  matcher: [
    "/((?!_next/static|_next/image|ingest|favicon.ico|videos|.*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp4|m4v|webm|mov|mp3|wav|ogg|pdf)).*)",
  ],
};

const securityHeaders = env.FLAGS_SECRET
  ? securityMiddleware(noseconeOptionsWithToolbar)
  : securityMiddleware(noseconeOptions);

// Arcjet bot/category checks — only active when ARCJET_KEY is configured
const arcjetMiddleware = async (request: NextRequest) => {
  if (!env.ARCJET_KEY) {
    return;
  }

  try {
    await secure(
      [
        // See https://docs.arcjet.com/bot-protection/identifying-bots
        "CATEGORY:SEARCH_ENGINE", // Allow search engines
        "CATEGORY:PREVIEW", // Allow preview links to show OG images
        "CATEGORY:MONITOR", // Allow uptime monitoring services
      ],
      request
    );
  } catch (error) {
    const message = parseError(error);
    return NextResponse.json({ error: message }, { status: 403 });
  }
};

// The web app has no Clerk usage anywhere, so we deliberately do NOT wrap
// this stack with `clerkMiddleware`. When wrapped, Clerk drops the i18n
// rewrite response (so `/about` falls through to `[locale]=about` and
// renders `(home)/page.tsx` instead of `[locale]/about/page.tsx`). The
// `app` and `api` apps still use Clerk via their own proxy.ts files.
const proxy = async (request: NextRequest) => {
  // i18n must run first; its rewrite/redirect short-circuits the chain so
  // non-locale-prefixed paths like `/about` resolve to `/[locale]/about`.
  const i18nResponse = internationalizationMiddleware(request);
  if (i18nResponse) {
    return i18nResponse;
  }

  const arcjetResponse = await arcjetMiddleware(request);
  if (arcjetResponse) {
    return arcjetResponse;
  }

  return securityHeaders();
};

export default proxy as unknown as NextProxy;
