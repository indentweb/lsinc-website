import { getDictionary } from "@repo/internationalization";
import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";

interface BlogProps {
  params: Promise<{ locale: string }>;
}

export const generateMetadata = async ({ params }: BlogProps): Promise<Metadata> => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  return createMetadata(dictionary.web.blog.meta);
};

const BlogIndex = async () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto flex flex-col gap-8">
      <h1 className="max-w-xl font-regular text-3xl tracking-tighter md:text-5xl">Blog</h1>
      <p className="text-muted-foreground">Posts coming soon.</p>
    </div>
  </div>
);

export default BlogIndex;
