import React from "react";

export default function Comments () {
  return (
    <div className='comments-container'>
      <p className="title">Comments</p>

      <div className="comment">
        <img 
          className="profile-picture" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutp6Rf6nH24hRGK5NBsW5LFII03lUqcgLNQ&usqp=CAU"
          alt="Profile" />
        <span className="username">John Doe</span>
        <span className="text">That looks great!</span>
      </div>

      <div className="comment">
        <img 
          className="profile-picture" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutp6Rf6nH24hRGK5NBsW5LFII03lUqcgLNQ&usqp=CAU"
          alt="Profile" />
        <span className="username">John Doe</span>
        <span className="text">That looks great!</span>
      </div>
      
      <div className="comment">
        <img 
          className="profile-picture" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutp6Rf6nH24hRGK5NBsW5LFII03lUqcgLNQ&usqp=CAU"
          alt="Profile" />
        <span className="username">John Doe</span>
        <span className="text">That looks great!</span>
      </div>
    </div>
  )
}