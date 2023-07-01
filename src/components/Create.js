import React, { useContext, useState } from 'react';
import '../styles/Create.css';
import { AuthContext } from '../contexts/AuthContext';
import uniqid from 'uniqid';
import { addDoc, collection, doc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

export default function Create () {
  const { currentUser } = useContext(AuthContext);
  const [caption, setCaption] = useState('');
  const [img, setImg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //Create a new document in the 'posts' collection on firebase
      if (img) {
        //If there is a photo uploaded, create a doc containing img url:
        const storageRef = ref(storage, uniqid());

        const uploadTask = uploadBytesResumable(storageRef, img);

        uploadTask.on(
          (error) => {
            //TODO:Handle Error
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              await addDoc(collection(db, 'posts'), {
                uid: currentUser.uid,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,
                caption: caption,
                comments: [],
                img: downloadURL
              })
            });
          }
        );
      } else {
        //If there is no photo uploaded, create a doc without img url:
        await addDoc(collection(db, 'posts'), {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
          caption: caption,
          comments: []
        })
      }
    } catch(err) {
      console.log(err);
    }

    setCaption('');
    setImg(null);
  }
  
  return (
    <div className='create-container'>
      <div className='card'>
        <p className='title'>Create a new post</p>

        <form onSubmit={handleSubmit} className='input-container'>
          <input 
            type='text' 
            name='post-caption' 
            id='postCaption' 
            placeholder="What's on your mind?"
            onChange={(e) => setCaption(e.target.value)} />

          <input 
            type="file" 
            name='addPostPhoto'
            id='addPostPhoto'
            onChange={(e) => setImg(e.target.files[0])}
            accept='.jpg, .jpeg' />
          <label htmlFor='addPostPhoto' className='post-photo-label'>Add Photo to Post</label>

          <button type='submit'>Submit Post</button>
        </form>
      </div>
    </div>
  )
}