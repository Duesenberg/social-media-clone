import React from "react";

export default function Chat () {
  return (
    <div className="chat-container">
      <div className="chat-title">
        <img 
            className="profile-picture"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutp6Rf6nH24hRGK5NBsW5LFII03lUqcgLNQ&usqp=CAU"
            alt="" />
        <p className="name">John Doe</p>
      </div>

      <div className="chat-messages">
        <div className="message-container">
          <p className="timestamp">5/6/23 22:00</p>
          <p className="message">Hey what's up</p>
        </div>
        
        <div className="message-container friend">
          <p className="timestamp">5/6/23 22:10</p>
          <p className="message">Not much hbu</p>
        </div>

        <div className="message-container">
          <p className="timestamp">5/6/23 22:15</p>
          <p className="message">Hey what's up</p>
        </div>
        
        <div className="message-container friend">
          <p className="timestamp">5/6/23 22:20</p>
          <p className="message">Hey what's up</p>
        </div>

        <div className="message-container">
          <p className="timestamp">5/6/23 22:00</p>
          <p className="message">Hey what's up</p>
        </div>
        
        <div className="message-container friend">
          <p className="timestamp">5/6/23 22:10</p>
          <p className="message">Not much hbu</p>
        </div>

        <div className="message-container">
          <p className="timestamp">5/6/23 22:15</p>
          <p className="message">Hey what's up</p>
        </div>
        
        <div className="message-container friend">
          <p className="timestamp">5/6/23 22:20</p>
          <p className="message">Hey what's up</p>
        </div>
      </div>

      <div className="send-message-container">
        <input type="text" name="send-message" />

        <div className="buttons">
          <button className="file"><div className="icon" /></button>
          <button className="photo"><div className="icon" /></button>
          <button className="send"><div className="icon" /></button>
        </div>
      </div>
    </div>
  )
}