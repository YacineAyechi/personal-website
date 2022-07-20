import React from "react";

import { Link } from "react-router-dom";

import {
  BsGithub,
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";

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
            <a href="https://github.com/YacineAyechi" target="_blank">
              <BsGithub className="social-icon" />
            </a>
            <a href="https://twitter.com/Yacineayechi" target="_blank">
              <BsTwitter className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com/Mohamed.Yacine.Ayachi"
              target="_blank"
            >
              <BsFacebook className="social-icon" />
            </a>
            <a href="https://www.instagram.com/yacine.ayachi/" target="_blank">
              <BsInstagram className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/yacine-ayachi/"
              target="_blank"
            >
              <BsLinkedin className="social-icon" />
            </a>
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
          <a href="./resume.pdf" target="_blank" className="link-item">
            Resume
          </a>
          <a
            href="https://github.com/YacineAyechi"
            target="_blank"
            className="link-item"
          >
            Github
          </a>
          <a
            href="https://buymeacoffee.com/yacineayechi"
            target="_blank"
            className="link-item"
          >
            Support Me
          </a>
        </div>
        <div className="footer">
          <p>
            Designed and Developed by <span>Yacine Ayechi</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
