import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import Support from "../About/Components/Support";
import bannerImg from "../../assets/Service-banner.jpg";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.jpg";

const posts = [
  {
    id: 1,
    title: "How strong visual systems make digital products feel premium",
    excerpt:
      "A smart design language creates trust, improves usability, and helps every screen feel like part of one polished experience.",
    image: img1,
    category: "Design",
    date: "10 Apr 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Landing page trends that convert without looking generic",
    excerpt:
      "The best modern pages mix bold hierarchy, purposeful whitespace, and just enough motion to guide attention.",
    image: img2,
    category: "Marketing",
    date: "08 Apr 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Why performance still matters in modern brand experiences",
    excerpt:
      "A trendy interface should still load fast, feel smooth, and stay readable across every device size.",
    image: img3,
    category: "Development",
    date: "05 Apr 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Designing content blocks that keep readers scrolling",
    excerpt:
      "Editorial spacing, clean metadata, and visual rhythm can turn a simple post list into a much stronger reading experience.",
    image: img4,
    category: "Content",
    date: "02 Apr 2026",
    readTime: "3 min read",
  },
];

const topics = [
  "UI Strategy",
  "Brand Storytelling",
  "Web Performance",
  "Mobile Experience",
];

export default function Blog() {
  const featuredPost = posts[0];
  const latestPosts = posts.slice(1);

  return (
    <div>
      <div className="relative h-[360px] w-full max-[413px]:h-[300px]">
        <img
          src={bannerImg}
          alt="blog banner"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div
          className="absolute inset-0 flex flex-col justify-end px-[100px] pb-25 text-white
          max-[1024px]:px-10 max-[1024px]:pb-20
          max-[768px]:px-6 max-[768px]:pb-16
          max-[413px]:px-4 max-[413px]:pb-10
          min-[1024px]:max-[1200px]:px-[72px]"
        >
          <p className="font-[Montserrat] text-[14px] font-bold uppercase leading-[21px] tracking-[2.24px] max-[413px]:text-[12px]">
            Home / Blog
          </p>
          <h1
            className="mt-2 font-[Montserrat] text-[54px] font-semibold leading-[62px]
            max-[1024px]:text-[48px] max-[1024px]:leading-[56px]
            max-[768px]:text-[44px] max-[768px]:leading-[52px]
            max-[413px]:text-[28px] max-[413px]:leading-[32px]"
          >
            Insights & Blog
          </h1>
        </div>
      </div>

      <section
        className="border-b border-[#E5E5E5] bg-white px-[100px] py-[60px]
        max-[1400px]:px-[50px]
        max-[1024px]:px-10
        max-[768px]:px-6 max-[768px]:py-[50px]
        max-[413px]:px-4 max-[413px]:py-[40px]"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="group overflow-hidden rounded-[28px] border border-[#E1E7EB] bg-[#F4F7FA]">
            <div className="overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105 max-[413px]:h-[240px]"
              />
            </div>

            <div className="p-8 max-[413px]:p-5">
              <span className="mb-4 inline-flex rounded-full bg-[#345261] px-4 py-2 font-[Montserrat] text-[11px] font-bold uppercase tracking-[1.8px] text-white">
                Featured Story
              </span>

              <h2 className="mb-4 max-w-[720px] font-[Montserrat] text-[38px] font-semibold leading-[46px] text-[#161C2D] max-[1024px]:text-[32px] max-[1024px]:leading-[40px] max-[413px]:text-[24px] max-[413px]:leading-[32px]">
                {featuredPost.title}
              </h2>

              <p className="mb-6 max-w-[760px] font-[Montserrat] text-[16px] leading-[24px] text-[#6B6A66] max-[413px]:text-[14px] max-[413px]:leading-[22px]">
                {featuredPost.excerpt}
              </p>

              <div className="mb-7 flex flex-wrap gap-5 text-[#395563]">
                <span className="inline-flex items-center gap-2 font-[Montserrat] text-[13px] font-semibold uppercase tracking-[1.3px]">
                  <CalendarDays className="h-4 w-4" />
                  {featuredPost.date}
                </span>
                <span className="inline-flex items-center gap-2 font-[Montserrat] text-[13px] font-semibold uppercase tracking-[1.3px]">
                  <Clock3 className="h-4 w-4" />
                  {featuredPost.readTime}
                </span>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-[10px] bg-[#345261] px-6 py-4 font-[Montserrat] text-[12px] font-bold uppercase tracking-[1.5px] text-white"
              >
                Read Article
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[24px] border border-[#E1E7EB] bg-white p-7">
              <p className="mb-3 font-[Montserrat] text-[14px] font-bold uppercase leading-[21px] tracking-[2.24px] text-[#395563] max-[413px]:text-[12px]">
                Editorial Note
              </p>
              <h3 className="mb-4 font-[Montserrat] text-[26px] font-semibold leading-[32px] text-[#161C2D] max-[413px]:text-[20px] max-[413px]:leading-[28px]">
                Same spacing system, fresher blog presentation
              </h3>
              <p className="font-[Montserrat] text-[15px] leading-[24px] text-[#6B6A66]">
                The page now matches the inner-page padding and heading rhythm,
                then layers in featured content, cleaner metadata, and more
                stylish cards.
              </p>
            </div>

            <div className="rounded-[24px] bg-[#345261] p-7 text-white">
              <p className="mb-3 font-[Montserrat] text-[14px] font-bold uppercase leading-[21px] tracking-[2.24px] text-[#D9E4EA] max-[413px]:text-[12px]">
                Trending Topics
              </p>
              <div className="flex flex-wrap gap-3">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 font-[Montserrat] text-[12px] font-semibold uppercase tracking-[1.2px]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[24px]">
              <img
                src={img5}
                alt="blog visual"
                className="h-[260px] w-full object-cover"
              />
            </div>
          </aside>
        </div>
      </section>

      <section
        className="bg-[#F4F7FA] px-[100px] py-[60px]
        max-[1400px]:px-[50px]
        max-[1024px]:px-10
        max-[768px]:px-6 max-[768px]:py-[50px]
        max-[413px]:px-4 max-[413px]:py-[40px]"
      >
        <div className="mb-8 flex items-end justify-between gap-4 max-[768px]:flex-col max-[768px]:items-start">
          <div>
            <p className="mb-2 font-[Montserrat] text-[14px] font-bold uppercase leading-[21px] tracking-[2.24px] text-[#395563] max-[413px]:text-[12px]">
              Latest Articles
            </p>
            <h2 className="font-[Montserrat] text-[32px] font-semibold leading-[42.3px] tracking-[-1.06px] text-[#161C2D] max-[413px]:text-[24px] max-[413px]:leading-[32px]">
              More from the blog
            </h2>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 font-[Montserrat] text-[12px] font-bold uppercase tracking-[1.6px] text-[#395563]"
          >
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-[24px] border border-[#DEE6EA] bg-white"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <span className="mb-4 inline-flex rounded-full bg-[#F4F7FA] px-3 py-1.5 font-[Montserrat] text-[11px] font-bold uppercase tracking-[1.5px] text-[#395563]">
                  {post.category}
                </span>
                <h3 className="mb-3 font-[Montserrat] text-[24px] font-semibold leading-[30px] text-[#161C2D] max-[413px]:text-[20px] max-[413px]:leading-[26px]">
                  {post.title}
                </h3>
                <p className="mb-5 font-[Montserrat] text-[15px] leading-[24px] text-[#6B6A66]">
                  {post.excerpt}
                </p>

                <div className="mb-5 flex flex-wrap gap-4 text-[#6B6A66]">
                  <span className="inline-flex items-center gap-2 font-[Montserrat] text-[12px] font-semibold uppercase tracking-[1.2px]">
                    <CalendarDays className="h-4 w-4 text-[#395563]" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-2 font-[Montserrat] text-[12px] font-semibold uppercase tracking-[1.2px]">
                    <Clock3 className="h-4 w-4 text-[#395563]" />
                    {post.readTime}
                  </span>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 font-[Montserrat] text-[12px] font-bold uppercase tracking-[1.5px] text-[#395563]"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="-mt-[40px] relative z-10">
        <Support />
      </div>
    </div>
  );
}
