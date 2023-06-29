import React from 'react';
import Post from './Post';
import '../styles/Profile.css';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Profile () {
  return (
    <div className='profile-container'>
      <div className='profile-header'>
        <img 
          className="profile-picture" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutp6Rf6nH24hRGK5NBsW5LFII03lUqcgLNQ&usqp=CAU"
          alt="Profile" />

        <div className='profile-info'>
          <p className='username'>John Doe</p>
          <p className='bio'>No hill for a stepper</p>
          <button className='edit-profile'>Edit Profile</button>
          <button className='logout' onClick={signOut(auth)}>Log Out</button>
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