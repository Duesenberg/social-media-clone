import { Link, useNavigate } from 'react-router-dom';
import './styles/RegisterAndLogin.css';
import { auth, storage, db } from './firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from 'firebase/firestore';
import Home from './Home';

export default function Register () {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Get form data
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    //Run firebase auth & upload photo to storage
    try {
      //Firebase authentication
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Firebase storage for photo upload
      const storageRef = ref(storage, userName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
          console.log(error);
          const uploadButton = document.querySelector('.file-label');
          uploadButton.textContent = 'Upload unsuccessful';
          uploadButton.classList.add('unsuccessful');
        }, 
        () => {
          // Handle successful uploads on complete
          const uploadButton = document.querySelector('.file-label');
          uploadButton.textContent = 'Upload successful';
          uploadButton.classList.remove('unsuccessful');
          uploadButton.classList.add('successful');

          //Update user data
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName: userName,
              photoURL: downloadURL
            });
            
            //Add user to Cloud Firestore
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName: userName,
              email,
              photoURL: downloadURL
            });

            //Add empty chats collection for user
            await setDoc(doc(db, 'userChats', res.user.uid), {});

            //Navigate to home
            navigate("/");
          });
        }
      );

      //Handle register successful message
      const errorMessage = document.querySelector('.error-handling')
      errorMessage.classList.remove('unsuccessful');
      errorMessage.classList.add('successful');
      errorMessage.textContent = 'Register successful';
    } catch(err) {
      console.log(err);
      //Handle error message
      const errorMessage = document.querySelector('.error-handling')
      errorMessage.classList.remove('successful');
      errorMessage.classList.add('unsuccessful');

      switch(err.message) {
        case 'Firebase: Error (auth/email-already-in-use).':
          errorMessage.textContent = 'Email already in use.';
          break;
        case 'Firebase: Error (auth/invalid-email).':
          errorMessage.textContent = 'Invalid email address.';
          break;
        default: 
          errorMessage.textContent = 'Register unsuccessful';
          break;
      }
    }
  }

  const handleClick = (e) => {
    //Add class of submitted to form on click
    e.target.parentElement.classList.add('submitted');
  }

  //Remove any error messages from upload button when clicked
  const handlePhotoClick = () => {
    const uploadButton = document.querySelector('.file-label');
    uploadButton.classList.remove('unsuccessful');
    uploadButton.classList.remove('successful');
    uploadButton.textContent = 'Select Profile Photo';
  }

  return (
      <div className="form-container">
        <span className="logo">DuesenSpace</span>
        <span className="title">Register</span>

        <form onSubmit={ handleSubmit }>
          <input type="text" placeholder="User Name" required />
          <input 
            type="email" 
            placeholder="Email (your@email.com)" 
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+" 
            required/>
          <input type="password" placeholder="Password (6 Char. Min.)" minLength={6} required />
          <input 
            type="file" 
            name='addFile' 
            id='addFile'
            accept=".jpg, .jpeg" 
            required />
          <label 
            htmlFor='addFile' 
            className='file-label'
            onClick={handlePhotoClick}>Select Profile Photo</label>
          <span className='photo-validation'>Please select a photo.</span>
          <button onClick={ handleClick }>Register</button>
          <span className='error-handling'>...</span>
        </form>

        <p className='bottom-text'>Already have an account? <span><Link to={'/login'}>Log In</Link></span></p>
      </div>
  )
}