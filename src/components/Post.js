// InstagramPost.js

import React from 'react';
import Comments from './Comments';

export default function Post () {
  return (
    <div className="post">
      <div className="header">
        <img 
          className="profile-picture" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutp6Rf6nH24hRGK5NBsW5LFII03lUqcgLNQ&usqp=CAU"
          alt="Profile" />
        <span className="username">John Doe</span>
      </div>

      <img 
        className="post-image" 
        src="https://thumbs.dreamstime.com/b/sunrise-over-beach-cancun-beautiful-mexico-40065727.jpg" 
        alt="Post" />

      <div className="caption">
        <span className="username">JohnDoe:</span>
        <span className="description">Enjoying a beautiful day at the beach!</span>
      </div>
      
      <div className="actions">
        <button className="like-button" />
        <button className="comment-button" />
      </div>

      <Comments />
    </div>
  );
};
