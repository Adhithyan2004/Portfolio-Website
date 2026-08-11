import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import blogSeries from "../data/blogSeries";
import NavBar from "../components/NavBar";

const posts = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const BlogPost = () => {
  const navigate = useNavigate();

  const { slug } = useParams();

  // Find the episode that matches the URL
  const episode = blogSeries
    .flatMap((series) => series.episodes)
    .find((episode) => episode.slug === slug);

  // Find the markdown file
  const path = `../content/blog/${slug}.md`;
  const content = posts[path];

  const currentSeries = blogSeries.find((series) =>
    series.episodes.some((episode) => episode.slug === slug),
  );

  const currentIndex = currentSeries?.episodes.findIndex(
    (episode) => episode.slug === slug,
  );

  const previousEpisode =
    currentIndex > 0 ? currentSeries.episodes[currentIndex - 1] : null;

  const nextEpisode =
    currentIndex < currentSeries?.episodes.length - 1
      ? currentSeries.episodes[currentIndex + 1]
      : null;

  if (!episode || !content) {
    return (
      <main className="py-20 mx-16">
        <h1 className="text-4xl">Post not found</h1>
      </main>
    );
  }

  return (
    <div>
      <NavBar />
      <main className="max-w-4xl px-6 py-20 mx-auto">
        {/* Article Header */}
        <header className="mb-12">
          <p className="mb-4 text-3xl text-secondary">
            EP {String(episode.episode).padStart(2, "0")}
          </p>

          <h1 className="text-6xl font-medium leading-tight">
            {episode.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <p className="font-sans font-bold text-secondary">{episode.date}</p>

            <div className="flex flex-wrap gap-3">
              {episode.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans font-semibold text-secondary"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Markdown Content */}
        <article className="font-sans text-lg font-semibold max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="mt-12 mb-6 text-4xl font-semibold">
                  {children}
                </h1>
              ),

              h2: ({ children }) => (
                <h2 className="mt-10 mb-4 text-3xl font-bold">{children}</h2>
              ),

              h3: ({ children }) => (
                <h3 className="mt-8 mb-3 text-2xl font-medium">{children}</h3>
              ),

              p: ({ children }) => (
                <p className="mb-6 text-lg leading-8 ">{children}</p>
              ),

              ul: ({ children }) => (
                <ul className="pl-6 mb-6 space-y-2 list-disc">{children}</ul>
              ),

              ol: ({ children }) => (
                <ol className="pl-6 mb-6 space-y-2 list-decimal">{children}</ol>
              ),

              li: ({ children }) => (
                <li className="text-lg leading-8">{children}</li>
              ),

              strong: ({ children }) => (
                <strong className="font-semibold">{children}</strong>
              ),

              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  {children}
                </a>
              ),

              blockquote: ({ children }) => (
                <blockquote className="pl-6 my-8 italic border-l-2 text-secondary/60">
                  {children}
                </blockquote>
              ),

              code: ({ children }) => (
                <code className="px-2 py-1 font-mono text-sm rounded bg-secondary">
                  {children}
                </code>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
        <div className="pt-8 mt-20 border-t border-secondary">
          <div className="flex items-center justify-between">
            {/* Previous */}
            <div>
              {previousEpisode && (
                <button
                  onClick={() => navigate(`/blog/${previousEpisode.slug}`)}
                  className="text-left transition-transform duration-200 hover:-translate-x-1"
                >
                  <p className=" text-secondary">← Previous Episode</p>

                  <p className="mt-2 text-lg">{previousEpisode.title}</p>
                </button>
              )}
            </div>

            {/* All Episodes */}
            <button
              onClick={() => navigate("/blog")}
              className="underline text-secondary underline-offset-4"
            >
              All Episodes
            </button>

            {/* Next */}
            <div>
              {nextEpisode && (
                <button
                  onClick={() => navigate(`/blog/${nextEpisode.slug}`)}
                  className="text-right transition-transform duration-200 hover:translate-x-1"
                >
                  <p className="text-sm text-secondary">Next Episode →</p>

                  <p className="mt-2 text-lg">{nextEpisode.title}</p>
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
