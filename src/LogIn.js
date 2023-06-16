import './styles/RegisterAndLogin.css';

export default function LogIn () {
  return (
    <div className="container">
      <div className="form-container">
        <span className="logo">DuesenSpace</span>
        <span className="title">Log In</span>
        
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Log In</button>
        </form>

        <p className='bottom-text'>Don't have an account? Register</p>
      </div>
    </div>
  )
}