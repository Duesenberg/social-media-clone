import './styles/RegisterAndLogin.css';

export default function Register () {
  return (
      <div className="form-container">
        <span className="logo">DuesenSpace</span>
        <span className="title">Register</span>

        <form>
          <input type="text" placeholder="User Name" />
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id='addFile' />
          <label htmlFor='addFile' className='file-label'>Select Photo</label>
          <button>Register</button>
        </form>

        <p className='bottom-text'>Already have an account? Log In</p>
      </div>
  )
}