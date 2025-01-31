
import "./index.css";

const FeaturedBlog = ()=> {
  const blogs = [
    {
      id: 1,
      category: "Ideas",
      title: "The Ultimate Guide to Choosing the Right SaaS Solution",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737982482/676e625c85f49cfc9f5c77c6_Blog_4-p-800_obrddg.jpg",
    },
    {
      id: 2,
      category: "Business",
      title: "Top 10 SaaS Trends to Watch in the Next Five Years",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737982482/676e6279a3814d746d7c1a94_Blog_3-p-500_bwgk2f.jpg", 
    },
    {
      id: 3,
      category: "Ideas",
      title: "Best Practices for Data Security in SaaS Applications",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737982482/676e628beb7f0dd2d706ec8e_Blog_2-p-500_powllu.jpg", 
    },
  ];

  return (
    <div className="featured-blog">
      <div className="header">
        <h1 className="featured-blog-heading">Featured Blog</h1>
        <p className="featured-blog-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <p className="blog-category">{blog.category}</p>
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-description">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-button">View All</button>
    </div>
  );
}

export default FeaturedBlog;