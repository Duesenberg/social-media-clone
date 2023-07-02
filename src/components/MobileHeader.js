import { React, useEffect } from 'react';

export default function MobileHeader ({ selectedTab, selectTab }) {
  //Adds or removes class of 'selected' from a button depending on
  //state of selectedTab
  const addSelectedClass = () => {
    //Create reference to button container
    const buttonsContainer = document.querySelector('.mobile-header-container .buttons-container');
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
    <div className='mobile-header-container'>
      <div className="logo">DuesenSpace</div>
      <div className="buttons-container">
        <button 
          className="messages" 
          data-tabindex={2}
          onClick={selectTab}>
            <div className="icon" />
        </button>
        {/* <button 
          className="notifications" 
          data-tabindex={3}
          onClick={selectTab}>
            <div className="icon" />
        </button> */}
      </div>
    </div>
  )
}