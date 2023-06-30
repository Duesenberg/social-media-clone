import React from "react";

export default function ChatSearchResults ({ user }) {
  return (
    <div className="chat-results-container">
      <div className="user-container">
        <img 
            className="profile-picture"
            src={user.photoURL}
            alt="" />

        <p className="user-name">{user.displayName}</p>  
      </div>

    </div>
  )
}