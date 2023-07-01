//Unused

import { createContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export const PostContext = createContext();

export const PostContextProvider = ({children}) => {
  const [posts, setPosts] = useState({});

  useEffect( () => {
    const getPostsdata = async () => {
      let postsCopy = [];

      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) => {
        postsCopy.push(doc.data());
      });

      setPosts(postsCopy);
    }

    getPostsdata();
    return (() => {
      getPostsdata();
    })
  }, []);

  return (
    <PostContext.Provider value={{posts}}>
      {children}
    </PostContext.Provider>
  )
}