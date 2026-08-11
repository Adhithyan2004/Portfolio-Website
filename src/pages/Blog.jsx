import blogSeries from "../data/blogSeries";
import BlogCard from "../components/BlogCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div>
      <NavBar />
      <main className="pt-10 pb-20 mx-16">
        {/* Page heading */}
        <div className="mb-20">
          <h1 className="font-medium text-7xl">Blog</h1>
          <p className="max-w-xl mt-4 font-sans text-2xl font-semibold text-secondary">
            Things I've built, broken, learned, and eventually figured out.
          </p>
        </div>

        {/* Series */}
        <div className="space-y-20">
          {blogSeries.map((series) => (
            <section key={series.id}>
              {/* Series heading */}
              <div className="mb-6">
                <h2 className="text-5xl font-medium">{series.title}</h2>

                <p className="max-w-2xl mt-2 font-sans text-2xl font-semibold text-secondary">
                  {series.description}
                </p>
              </div>

              {/* Episodes */}
              <div>
                {series.episodes.map((episode) => (
                  <BlogCard key={episode.slug} episode={episode} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
