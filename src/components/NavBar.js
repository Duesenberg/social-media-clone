import { React, useEffect } from 'react';

export default function NavBar ({ selectedTab, selectTab }) {
  //Adds or removes class of 'selected' from a button depending on
  //state of selectedTab
  const addSelectedClass = () => {
    //Create reference to button container
    const buttonsContainer = document.querySelector('.navbar-container .buttons-container');
    const buttonsArray = Array.from(buttonsContainer.children);
    //Loop through each child of the button container
    for (let i = 0; i < buttonsArray.length; i++) {
      const selectedButton = buttonsArray[i];
      //Add class if state matches button data-tabindex, remove if not
      if (selectedTab === buttonsArray[i].dataset.tabindex) 
        selectedButton.classList.add('selected');
      else 
        selectedButton.classList.remove('selected');
    }
  }

  useEffect(() => {
    addSelectedClass();
  }, [selectedTab])

  return (
    <div className="navbar-container">
      <div className="logo">DuesenSpace</div>
      <div className="logo-tablet">D</div>

      <div className="buttons-container">
        <button 
          className="home" 
          data-tabindex={0}
          onClick={selectTab}>
            <div className="icon" /><span className="text">Home</span>
        </button>
        <button 
          className="search" 
          data-tabindex={1}
          onClick={selectTab}>
            <div className="icon" /><span className="text">Search</span>
        </button>
        <button 
          className="messages" 
          data-tabindex={2}
          onClick={selectTab}>
            <div className="icon" /><span className="text">Messages</span>
        </button>
        <button 
          className="notifications" 
          data-tabindex={3}
          onClick={selectTab}>
            <div className="icon" /><span className="text">Notifications</span>
        </button>
        <button 
          className="create" 
          data-tabindex={4}
          onClick={selectTab}>
            <div className="icon" /><span className="text">Create</span>
        </button>
        <button 
          className="profile" 
          data-tabindex={5}
          onClick={selectTab}>
            <div className="icon" /><span className="text">Profile</span>
        </button>
      </div>
    </div>
  )
}