export default function LogIn () {
  return (
    <div className="container">
      <div className="form-container">
        <span className="logo">Rezo</span>
        <span className="title">Log In</span>
        
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Log In</button>
        </form>

        <p>Don't have an account? Register</p>
      </div>
    </div>
  )
}