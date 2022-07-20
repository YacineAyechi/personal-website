import React from "react";

import { Link } from "react-router-dom";

import { BsGithub, BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

import "./css/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="rl-container">
        <div className="left">
          <h1>Hello, I am Yacine Ayechi.</h1>
          <p>
            I am an 18 year-old front-end web developer guy based in Tunisia.
          </p>
          <div className="socials">
            <BsGithub className="social-icon" />
            <BsTwitter className="social-icon" />
            <BsFacebook className="social-icon" />
            <BsInstagram className="social-icon" />
          </div>
        </div>
        <div className="right">
          <img src="./me.png" alt="Me" className="me" />
        </div>
      </div>

      <div className="articles">
        <h2 className="title">Latest Articles</h2>
        <Link to="/blog" className="all-articles">
          All articles 📝
        </Link>

        <div className="card-container">
          <div className="card">
            <Link to="/new-job-who-this">
              <h3 className="card-title">New Job, Who this?</h3>
              <h3 className="card-desc">
                I quit my job as a full-time developer and transitioned into
                developer advocacy.
              </h3>
            </Link>
          </div>
          <div className="card">
            <h3 className="card-title">My Experience using Polywork!</h3>
            <h3 className="card-desc">
              I joined Polywork a few weeks ago, it's been an amazing experience
              and I thought it'll be great to pen down my thoughts as an early
              adopter of the platform.
            </h3>
          </div>
          <div className="card">
            <h3 className="card-title">
              Setup Sub-Domain on Polywork with Netlify + Namecheap
            </h3>
            <h3 className="card-desc">
              I joined Polywork and as a result ended up setting up a custom
              Domain for my profile. Here's how I did it.
            </h3>
          </div>
        </div>
      </div>

      <div className="getintouch">
        <h3>Get In Touch</h3>
        <div className="box">
          <p>Want to work together or have any questions?</p>
          <a href="" className="btn-hello">
            Say Hello 👋
          </a>
        </div>
        <div className="links">
          <a href="">Resume</a>
          <a href="">Github</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
