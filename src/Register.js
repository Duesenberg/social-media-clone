import { Link } from 'react-router-dom';
import './styles/RegisterAndLogin.css';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register () {
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Get form data
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    //Firebase authentication
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);
    } catch(err) {
      console.log(err);
    }
  }

  const handleClick = (e) => {
    //Add class of submitted to form on click
    e.target.parentElement.classList.add('submitted');
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
          <label htmlFor='addFile' className='file-label'>Select Photo</label>
          <span className='photo-validation'>Please select a photo</span>
          <button onClick={ handleClick }>Register</button>
        </form>

        <p className='bottom-text'>Already have an account? <span><Link to={'/login'}>Log In</Link></span></p>
      </div>
  )
}