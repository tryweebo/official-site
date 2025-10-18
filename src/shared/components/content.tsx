import type * as React from "react";

type ArticleContentProps = {
  children: React.ReactNode;
};

export function ArticleContent({
  children,
}: ArticleContentProps): React.ReactElement<any> {
  return (
    <article className="prose prose-sm tablet:prose-base prose-neutral max-w-none overflow-hidden prose-img:overflow-hidden prose-img:rounded-xl prose-img:border prose-pre:border prose-img:border-border prose-pre:border-border prose-img:bg-surface prose-pre:bg-surface prose-code:font-mono prose-headings:font-medium prose-pre:font-medium prose-strong:font-medium prose-a:text-blue-600 prose-h1:text-xl! prose-h2:text-lg! prose-h3:text-base prose-headings:text-foreground prose-li:text-foreground prose-p:text-foreground prose-pre:text-foreground prose-strong:text-foreground tablet:prose-li:text-base tablet:prose-p:text-base text-foregroun prose-headings:leading-tight! prose-a:no-underline">
      {children}
    </article>
  );
}
