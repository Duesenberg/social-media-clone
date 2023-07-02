//Unused

import { createContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export const PostContext = createContext();

export const PostContextProvider = ({children}) => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (querySnapshot) => {
      const feedPostsCopy = [];
      querySnapshot.forEach((doc) => {
        feedPostsCopy.push({
          data: doc.data(),
          id: doc.id
        });
      });
      setPosts(feedPostsCopy);
    });

    return () => unsubscribe();
  }, []);

  return (
    <PostContext.Provider value={{posts}}>
      {children}
    </PostContext.Provider>
  )
}