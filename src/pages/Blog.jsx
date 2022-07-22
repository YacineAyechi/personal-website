import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Blog.css";
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
        <div className="blog-card" data-aos="fade-up">
          <Link to="./blog-pages/new-job-who-this">
            <h1 className="blog-title">New Job, Who this?</h1>
            <p className="blog-parag">
              I quit my job as a full-time developer and transitioned into
              developer advocacy.
            </p>
            <div className="meta">
              <strong>1 min read.</strong>
            </div>
          </Link>
        </div>
        <div className="blog-card" data-aos="fade-up">
          <Link to="./blog-pages/new-job-who-this">
            <h1 className="blog-title">New Job, Who this?</h1>
            <p className="blog-parag">
              I quit my job as a full-time developer and transitioned into
              developer advocacy.
            </p>
            <div className="meta">
              <strong>1 min read.</strong>
            </div>
          </Link>
        </div>
        <div className="blog-card" data-aos="fade-up">
          <Link to="./blog-pages/new-job-who-this">
            <h1 className="blog-title">New Job, Who this?</h1>
            <p className="blog-parag">
              I quit my job as a full-time developer and transitioned into
              developer advocacy.
            </p>
            <div className="meta">
              <strong>1 min read.</strong>
            </div>
          </Link>
        </div>
        <div className="blog-card" data-aos="fade-up">
          <Link to="./blog-pages/new-job-who-this">
            <h1 className="blog-title">New Job, Who this?</h1>
            <p className="blog-parag">
              I quit my job as a full-time developer and transitioned into
              developer advocacy.
            </p>
            <div className="meta">
              <strong>1 min read.</strong>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
