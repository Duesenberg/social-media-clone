import React from 'react';
import Comments from './Comments';

export default function Post ({ post }) {
  return (
    <div className="post" >
      <div className="header">
        <img 
          className="profile-picture" 
          src={post.photoURL}
          alt="Profile" />
        <span className="username">{post.displayName}</span>
      </div>

      {post.img ? 
        <img 
          className="post-image" 
          src={post.img}
          alt="" /> : null}

      <div className="caption">
        <span className="username">{post.displayName + ':'}</span>
        <span className="description">{post.caption}</span>
      </div>
      
      <div className="actions">
        <button className="like-button" />
        <button className="comment-button" />
      </div>

      <Comments />
    </div>
  );
};
