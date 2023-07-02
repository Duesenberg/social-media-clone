import React, { useContext, useEffect, useState } from 'react';
import Post from './Post';
import '../styles/Profile.css';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../contexts/AuthContext';
import { PostContext } from '../contexts/PostContext';
import uniqid from 'uniqid';

export default function Profile () {
  const { currentUser } = useContext(AuthContext);
  const { posts } = useContext(PostContext);
  const [feedPosts, setFeedPosts] = useState([]);

  useEffect(() => {
    if (posts.length !== 0) {
      let feedPostsCopy = [];
      posts.forEach(post => {
        if (post.data.uid === currentUser.uid) feedPostsCopy.push(post);
      });
      setFeedPosts(feedPostsCopy);
    }
  }, [posts, currentUser.uid])

  return (
    <div className='profile-container'>
      <div className='profile-header'>
        <img 
          className="profile-picture" 
          src={currentUser.photoURL}
          alt="Profile" />

        <div className='profile-info'>
          <p className='username'>{currentUser.displayName}</p>
          <button 
            className='logout' 
            onClick={() => {
              signOut(auth);
            }}>Log Out</button>
        </div>
      </div>

      <p className='posts-title'>Posts</p>
      <div className='profile-posts'>
      {feedPosts.sort((a, b) => b.data.date - a.data.date).map((post) => {
        return (
          <Post key={uniqid()} post={ post } />
        )
      })}
      </div>
    </div>
  )
}