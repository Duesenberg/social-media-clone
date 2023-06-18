export default function NavBar () {
  return (
    <div className="navbar-container">
      <div className="logo">DuesenSpace</div>

      <div className="buttons-container">
        <button className="home">
          <img className="icon" alt="home" /><span className="text">Home</span>
        </button>
        <button className="search">
          <img className="icon" alt="search" /><span className="text">Search</span>
        </button>
        <button className="messages">
          <img className="icon" alt="messages" /><span className="text">Messages</span>
        </button>
        <button className="notifications">
          <img className="icon" alt="notifications" /><span className="text">Notifications</span>
        </button>
        <button className="create">
          <img className="icon" alt="create" /><span className="text">Create</span>
        </button>
        <button className="profile">
          <img className="icon" alt="profile" /><span className="text">Profile</span>
        </button>
      </div>
    </div>
  )
}