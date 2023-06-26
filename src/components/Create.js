import React from 'react';
import '../styles/Create.css';

export default function Create () {
  return (
    <div className='create-container'>
      <div className='card'>
        <p className='title'>Create a new post</p>

        <form className='input-container'>
          <input type='text' name='post-caption' id='postCaption' placeholder="What's on your mind?" />

          <input type="file" id='addPostPhoto' />
          <label htmlFor='addPostPhoto' className='post-photo-label'>Add Photo to Post</label>

          <button>Submit Post</button>
        </form>
      </div>
    </div>
  )
}