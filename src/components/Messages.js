import React, { useState } from "react";
import Conversations from "./Conversations";
import Chat from "./Chat";
import { collection, query, where, getDocs } from "firebase/firestore";
import "../styles/Messages.css";
import { db } from "../firebase";
import ChatSearchResults from "./ChatSearchResults";

export default function Messages () {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState(null);

  //Set userName to what is typed in search bar
  const handleChange = (e) => { setUserName(e.target.value); }
  
  //Perform a search based on value on userName
  const handleSearch = async () => {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('displayName', '==', userName));

    try {
      const querySnapshot = await getDocs(q);
      
      //Set user value to query result
      querySnapshot.forEach((doc) => { setUser(doc.data()); });
      
      //If query is empty, set user to null
      if (querySnapshot.empty) setUser(null);
    } catch(err) {
    }
  }

  //Perform search when form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSearch();
  }

  //Hide chat and bring back conversations
  const handleClick = () => {
    const convosContainer = document.querySelector('.hide-conversations-button + div');
    convosContainer.classList.add('visible');
    const backButton = document.querySelector('.hide-conversations-button.visible');
    backButton.classList.remove('visible');
  }

  return (
    <div className="messages-container">
      <button 
        className="hide-conversations-button"
        onClick={handleClick}>Back</button>
      <div className="conversations-container visible">
        <form className="search-form" onSubmit={handleSubmit}>
          <input 
            type='text' 
            name='profile-search' 
            className="profile-search" 
            placeholder='Search'
            onChange={handleChange}
            value={userName} />
        </form>
        {(user !== null && user !== undefined) ? 
          <ChatSearchResults 
            user={user}
            setUser={setUser}
            userName={userName}
            setUserName={setUserName} /> : null}
        <Conversations />
      </div>
      <Chat />
    </div>
  )
}