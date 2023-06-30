import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "../contexts/AuthContext";

export default function Conversations () {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);

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
  }, [currentUser.uid])

  return (
    <div className="conversations-container">
      {Object.entries(chats)?.map((chat) => {
        return (
          <button className="conversation" key={chat[0]}>
            <img 
              className="profile-picture"
              src={chat[1].userInfo.photoURL}
              alt="" />
            
            <div className="conversation-info">
              <p className="title">{chat[1].userInfo.displayName}</p>
              <p className="last-message">{chat[1].userInfo.lastMessage?.text}</p>
            </div>
          </button>
        )
      })}
    </div>
  )
}