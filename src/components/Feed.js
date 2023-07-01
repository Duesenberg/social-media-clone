import React, { useEffect, useState } from "react";
import Post from "./Post";
import "../styles/Feed.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import uniqid from 'uniqid';

export default function Feed () {
  const [feedPosts, setFeedPosts] = useState([]);

  const fetchPostData = async () => {
    let feedPostsCopy = []

    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      feedPostsCopy.push(doc.data());
    });

    setFeedPosts(feedPostsCopy);
  }
  
  useEffect(() => {
    fetchPostData();
  }, [])

  return (
    <div className="feed-container">
      {feedPosts.map((post) => {
        return (
          <Post key={uniqid()} post={ post } />
        )
      })}
    </div>
  )
}