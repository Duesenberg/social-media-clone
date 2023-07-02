import React, { useContext, useState } from 'react';
import '../styles/Create.css';
import { AuthContext } from '../contexts/AuthContext';
import uniqid from 'uniqid';
import { Timestamp, addDoc, collection, doc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

export default function Create () {
  const { currentUser } = useContext(AuthContext);
  const [caption1, setCaption1] = useState('');
  const [caption2, setCaption2] = useState('');
  const [img, setImg] = useState(null);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //Create a new document in the 'posts' collection on firebase
      if (img) {
        //If there is a photo uploaded, create a doc containing img url:
        const storageRef = ref(storage, uniqid());

        const uploadTask = uploadBytesResumable(storageRef, img);

        uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              // console.log('Upload is paused');
              break;
            case 'running':
              // console.log('Upload is running');
              break;
          }
        },  
        (error) => {
          // Handle unsuccessful uploads
          // console.log(error);
        }, 
        () => {
          // Handle successful uploads on complete

          //Update user data
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(collection(db, 'posts'), {
              uid: currentUser.uid,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL,
              caption: caption1,
              date: Timestamp.now(),
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
          caption: caption2,
          date: Timestamp.now(),
          comments: []
        })
      }
    } catch(err) {
      console.log(err);
    }

    setCaption1('');
    setCaption2('');
    setImg(null);
  }
  
  return (
    <div className='create-container'>
      <div className='card'>
        <p className='title'>Create a new text post</p>

        <form onSubmit={handleSubmit} className='input-container'>
          <input 
            type='text' 
            name='post-caption' 
            id='postCaption' 
            placeholder="What's on your mind?"
            onChange={(e) => setCaption2(e.target.value)}
            value={caption2}
            required />

          <button type='submit'>Submit Post</button>
        </form>
      </div>

      <p className='title'>Or..</p>

      <div className='card'>
        <p className='title'>Create a new photo post</p>

        <form onSubmit={handleSubmit} className='input-container'>
        <input 
            type='text' 
            name='post-caption' 
            id='postCaption' 
            placeholder="What's on your mind?"
            onChange={(e) => setCaption1(e.target.value)}
            value={caption1}
            required />

          <input 
            type="file" 
            name='addPostPhoto'
            id='addPostPhoto'
            onChange={(e) => setImg(e.target.files[0])}
            accept='.jpg, .jpeg' 
            required/>
          <label htmlFor='addPostPhoto' className='post-photo-label'>Add Photo to Post</label>

          <button type='submit'>Submit Post</button>
        </form>
      </div>
    </div>
  )
}