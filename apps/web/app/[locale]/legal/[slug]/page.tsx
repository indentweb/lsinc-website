import Link from "next/link";
import { notFound } from "next/navigation";

const LEGAL_PAGES: Record<string, { title: string; content: string }> = {
  privacy: {
    title: "Privacy Policy",
    content: "Our privacy policy is being updated. Please check back soon.",
  },
  terms: {
    title: "Terms of Service",
    content: "Our terms of service are being updated. Please check back soon.",
  },
};

interface LegalPageProperties {
  readonly params: Promise<{ slug: string }>;
}

const LegalPage = async ({ params }: LegalPageProperties) => {
  const { slug } = await params;
  const page = LEGAL_PAGES[slug];

  if (!page) {
    notFound();
  }

  return (
    <div className="container max-w-5xl py-16">
      <Link
        className="mb-4 inline-flex items-center gap-1 text-muted-foreground text-sm focus:underline focus:outline-none"
        href="/"
      >
        Back to Home
      </Link>
      <h1 className="scroll-m-20 font-extrabold text-4xl tracking-tight lg:text-5xl">
        {page.title}
      </h1>
      <p className="mt-6 text-muted-foreground">{page.content}</p>
    </div>
  );
};

export const generateStaticParams = async () =>
  Object.keys(LEGAL_PAGES).map((slug) => ({ slug }));

export default LegalPage;
