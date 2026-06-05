/* Renders the lightweight markdown stored in article.content.
   Shared by the article detail page and the category page so both show
   identical full-article formatting. */
export default function ArticleBody({ content }: { content: string }) {
  const blocks = content.trim().split(/\n{2,}/).filter(Boolean);

  return (
    <div className="article-body">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) return <h2 key={i}>{block.replace("## ", "")}</h2>;
        if (block.startsWith("### ")) return <h3 key={i}>{block.replace("### ", "")}</h3>;
        if (block.startsWith("> ")) return <blockquote key={i}>{block.replace(/^> /, "")}</blockquote>;
        if (/^- /m.test(block)) {
          const items = block.split("\n").filter((l) => l.trim());
          return (
            <ul key={i}>
              {items.map((item, j) => (
                <li key={j}>{item.replace(/^-\s*/, "")}</li>
              ))}
            </ul>
          );
        }
        const html = block.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
        return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />;
      })}
    </div>
  );
}
