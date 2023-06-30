import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function ChatSearchResults ({ user, setUser, userName, setUserName }) {
  const { currentUser } = useContext(AuthContext);
  
  //Creates a new chat when user is clicked (if it doesn't exist)
  const handleSelect = async () => {
    //Check whether chat exists. If not, create new one
    const combinedId = 
      currentUser.uid > user.uid ?
        currentUser.uid + user.uid :
        user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, 'chats', combinedId));
      
      if(!res.exists()) {
        //Create a new document in chats collection
        await setDoc(doc(db, 'chats', combinedId), {messages: []});

        //Add a new chat in userChats collection, for the current user
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [combinedId + '.userInfo']: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedId + '.date']: serverTimestamp()
        });

        //Add a new chat in userChats collection, for the user on the other end
        await updateDoc(doc(db, 'userChats', user.uid), {
          [combinedId + '.userInfo']: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId + '.date']: serverTimestamp()
        });
      }

      //Clear the search bar and the search results
      setUser(null);
      setUserName('');
    } catch(err) {

    }
  }
  
  return (
    <div className="chat-results-container">
      <div className="user-container" onClick={handleSelect}>
        <img 
            className="profile-picture"
            src={user.photoURL}
            alt="" />

        <p className="user-name">{user.displayName}</p>  
      </div>

    </div>
  )
}