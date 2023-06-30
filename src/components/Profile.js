import React, { useContext } from 'react';
import Post from './Post';
import '../styles/Profile.css';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../contexts/AuthContext';

export default function Profile () {
  const { currentUser } = useContext(AuthContext);

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
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}