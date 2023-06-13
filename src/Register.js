export default function Register () {
  return (
    <div className="container">
      <div className="form-container">
        <span className="logo">Rezo</span>
        <span className="title">Register</span>

        <form>
          <input type="text" placeholder="User Name" />
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" />
          <button>Register</button>
        </form>

        <p>Already have an account? Log In</p>
      </div>
    </div>
  )
}