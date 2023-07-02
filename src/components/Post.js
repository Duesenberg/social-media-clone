import React, { useContext, useState } from 'react';
import Comments from './Comments';
import { AuthContext } from '../contexts/AuthContext';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function Post ({ post }) {
  const [commentText, setCommentText] = useState('');
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postId = e.target.dataset.postid;

    //Update the corresponding doc in 'posts' if the text field isn't empty
    if (commentText !== '') {
      try {
        await updateDoc(doc(db, 'posts', postId), {
          "comments": arrayUnion({
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            commentText: commentText
          })
        });
      } catch(err) {
        console.log(err);
      }

      //Remove written text after posting
      setCommentText('');
    }
  }
  
  return (
    <div className="post" >
      <div className="header">
        <img 
          className="profile-picture" 
          src={post.data.photoURL}
          alt="Profile" />
        <span className="username">{post.data.displayName}</span>
      </div>

      {post.data.img ? 
        <img 
          className="post-image" 
          src={post.data.img}
          alt="" /> : null}

      <div className="caption">
        <span className="username">{post.data.displayName + ':'}</span>
        <span className="description">{post.data.caption}</span>
      </div>
      
      <form 
        className="actions" 
        onSubmit={handleSubmit}
        data-postid={post.id}>
          <input 
            type='text' 
            id='postComment'
            name='postComment'
            placeholder='Write a comment' 
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)} />
          <button type='submit' className="comment-button">Post</button>
      </form>

      <Comments post={post} />
    </div>
  );
};
