import { Link, useNavigate } from 'react-router-dom';
import './styles/RegisterAndLogin.css';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LogIn () {
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Get form data
    const email = e.target[0].value;
    const password = e.target[1].value;

    //Run firebase auth & upload photo to storage
    try {
      //Log In
      await signInWithEmailAndPassword(auth, email, password);
      //Redirect to home page
      navigate('/');
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <span className="logo">DuesenSpace</span>
        <span className="title">Log In</span>
        
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Log In</button>
        </form>

        <p className='bottom-text'>Don't have an account? <span><Link to={'/register'}>Register</Link></span></p>
      </div>
    </div>
  )
}