export default function NavBar () {
  return (
    <div className="navbar-container">
      <div className="logo">DuesenSpace</div>
      <div className="logo-tablet">D</div>

      <div className="buttons-container">
        <button className="home">
          <div className="icon" /><span className="text">Home</span>
        </button>
        <button className="search">
          <div className="icon" /><span className="text">Search</span>
        </button>
        <button className="messages">
          <div className="icon" /><span className="text">Messages</span>
        </button>
        <button className="notifications">
          <div className="icon" /><span className="text">Notifications</span>
        </button>
        <button className="create">
          <div className="icon" /><span className="text">Create</span>
        </button>
        <button className="profile">
          <div className="icon" /><span className="text">Profile</span>
        </button>
      </div>
    </div>
  )
}