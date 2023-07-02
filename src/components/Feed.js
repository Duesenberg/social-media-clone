import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import "../styles/Feed.css";
import uniqid from 'uniqid';
import { PostContext } from "../contexts/PostContext";

export default function Feed () {
  const [feedPosts, setFeedPosts] = useState([]);
  const {posts} = useContext(PostContext)

  useEffect(() => {
    //Set the feed posts when posts load. If posts is empty don't do anything
    if (posts.length !== 0) setFeedPosts(posts)
  }, [posts])  
  
  return (
    <div className="feed-container">
      {feedPosts.sort((a, b) => b.data.date - a.data.date).map((post) => {
        return (
          <Post key={uniqid()} post={ post } />
        )
      })}
    </div>
  )
}