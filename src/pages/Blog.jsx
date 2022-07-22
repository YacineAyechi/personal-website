import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Blog.css";
import Markdown from "react-markdown";
import postlist from "../posts.json";
import AOS from "aos";
import "aos/dist/aos.css";

function Blog() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const totalBlogs = 14;

  return (
    <div className="blog-container">
      <h1 className="blogTitle">Blog</h1>
      <p className="totalArts">{totalBlogs} Articles</p>
      <div className="blog-grid">
        {postlist.length &&
          postlist.map((post, i) => {
            return (
              <div key={i} className="blog-card" data-aos="fade-up">
                <Link to={`./posts/${post.id}`}>
                  <h1 className="blog-title"> {post.title}</h1>
                  <p className="blog-parag">{post.description}</p>
                  <div className="meta">
                    <strong>{post.readtime} read.</strong>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Blog;
