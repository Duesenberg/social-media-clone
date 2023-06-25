import React from "react";

export default function Notification () {
  return (
    <button className="notification">
      <img 
        className="profile-picture" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutp6Rf6nH24hRGK5NBsW5LFII03lUqcgLNQ&usqp=CAU"
        alt="Profile" />
      <span className="description">John Doe has started following you.</span>
    </button>
  )
}