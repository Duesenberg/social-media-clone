import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "../contexts/AuthContext";
import { ChatContext } from "../contexts/ChatContext";

export default function Conversations () {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    //Get data from 'userChats' for the current user & set it in chats
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => { 
        unsub();
      }
    }
    
    //If there is no current user don't run getChats();
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: 'CHANGE_USER', payload: u });

    //Hide conversations container when on mobile
    const convosContainer = document.querySelector('.conversations-container.visible');
    convosContainer.classList.remove('visible');
    //Show Back button
    const backButton = document.querySelector('.hide-conversations-button');
    backButton.classList.add('visible');
  }

  return (
    <div className="conversations-container">
      {Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map((chat) => {
        return (
          <button 
            className="conversation" 
            key={chat[0]} 
            onClick={() => handleSelect(chat[1].userInfo)}>
              <img 
                className="profile-picture"
                src={chat[1].userInfo.photoURL}
                alt="" />
              
              <div className="conversation-info">
                <p className="title">{chat[1].userInfo.displayName}</p>
                <p className="last-message">{chat[1].lastMessage?.text}</p>
              </div>
          </button>
        )
      })}
    </div>
  )
}