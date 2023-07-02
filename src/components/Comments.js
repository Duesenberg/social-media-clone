import React from "react";
import uniqid from 'uniqid';

export default function Comments ({ post }) {
  return (
    <div className='comments-container'>
      <p className="title">Comments</p>
      {post.data.comments.map(comment => {
        return (
          <div className="comment" key={uniqid()}>
            <img 
              className="profile-picture" 
              src={comment.photoURL}
              alt="Profile" />
            <span className="username">{comment.displayName}</span>
            <span className="text">{comment.commentText}</span>
          </div>
        )
      })}
      {post.data.comments.length === 0 && 
        <p className="no-comments">There are no comments on this post.</p>}
    </div>
  )
}