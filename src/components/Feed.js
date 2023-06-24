import React from "react";
import Post from "./Post";
import "../styles/Feed.css";

export default function Feed () {
  return (
    <div className="feed-container">
      <Post />
      <Post />
      <Post />
    </div>
  )
}