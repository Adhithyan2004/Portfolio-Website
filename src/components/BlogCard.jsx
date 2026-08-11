import { useNavigate } from "react-router-dom";

const BlogCard = ({ episode }) => {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/blog/${episode.slug}`)}
      className="py-6 transition-all duration-300 border-b cursor-pointer group border-secondary/20 hover:pl-3"
    >
      <div className="flex items-start justify-between gap-8">
        {/* Episode + Title */}
        <div className="flex gap-6">
          <span className="pt-1 text-xl text-secondary">
            EP {String(episode.episode).padStart(2, "0")}
          </span>

          <div>
            <h3 className="font-sans text-2xl font-bold transition-transform duration-300 group-hover:-translate-y-1">
              {episode.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {episode.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-base font-semibold text-secondary"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Date */}
        <p className="text-black shrink-0">{episode.date}</p>
      </div>
    </article>
  );
};

export default BlogCard;
