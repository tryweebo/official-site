import * as React from 'react'

interface ArticleContentProps {
  children: React.ReactNode
}

interface ProtectedHtmlContentProps {
  children: string
}

/**
 * ## ArticleContent
 *
 * Predefined component that allow to styling the article and documents
 * using the advantages of `tailwindcss typography`
 *
 * @returns {React.ReactElement}
 */
export function ArticleContent({
  children,
}: ArticleContentProps): React.ReactElement<any> {
  return (
    <article className="prose prose-sm tablet:prose-base tablet:prose-p:text-base prose-headings:leading-tight! prose-h1:text-xl! prose-h2:text-lg! prose-h3:text-base tablet:prose-li:text-base max-w-none prose-headings:font-medium prose-strong:font-medium prose-neutral prose-code:font-mono prose-img:overflow-hidden prose-img:border prose-img:border-border prose-img:bg-surface prose-img:rounded-xl prose-pre:bg-surface prose-pre:text-foreground prose-pre:border prose-pre:border-border prose-pre:font-medium overflow-hidden text-foregroun prose-headings:text-foreground prose-a:text-blue-600 prose-a:no-underline prose-strong:text-foreground prose-p:text-foreground prose-li:text-foreground">
      {children}
    </article>
  )
}

/**
 * ## ProtectedHtmlContent
 *
 * Protect and secure the parsing of string html
 * @param children the string content that passed as html
 * @returns {React.ReactElement}
 */
export function ProtectedHtmlContent({
  children,
}: ProtectedHtmlContentProps): React.ReactElement<any> {
  // The content that passed throgh the elements
  const content = { __html: children }

  return <div dangerouslySetInnerHTML={content}></div>
}
