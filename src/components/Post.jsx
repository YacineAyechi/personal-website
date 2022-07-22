import React from "react";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";
import postlist from "../posts.json";

const Post = (props) => {
  const validId = parseInt(props.match.params.id);
  if (!validId) {
    return <h1>yo</h1>;
  }
  const fetchedPost = {};
  let postExists = false;
  postlist.forEach((post, i) => {
    if (validId === post.id) {
      fetchedPost.title = post.title ? post.title : "No title given";
      fetchedPost.date = post.date ? post.date : "No date given";
      fetchedPost.author = post.author ? post.author : "No author given";
      fetchedPost.content = post.content ? post.content : "No content given";
      postExists = true;
    }
  });
  if (postExists === false) {
    return <h1>yo</h1>;
  }
  return (
    <div>
      <div className="post">
        <h2>{fetchedPost.title}</h2>
        <Markdown source={fetchedPost.content} escapeHtml={false} />
      </div>
    </div>
  );
};

export default Post;
