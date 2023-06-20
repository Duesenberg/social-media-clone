import { React, useState } from 'react';
import MobileHeader from "./components/MobileHeader";
import NavBar from "./components/NavBar";
import './styles/Home.css';

export default function Home () {
  const [selectedTab, setSelectedTab] = useState('0');

  const selectTab = (e) => {
    const tabIndex = e.currentTarget.dataset.tabindex;
    setSelectedTab(tabIndex);
  }

  return (
    <div className="home-container">
      <NavBar 
        selectedTab={selectedTab}
        selectTab={selectTab} />

      {/* placeholders for wall and profile section */}
      <div className="wall-container">Wall</div>
      <div className="personal-container">Personal</div>
      <MobileHeader 
        selectedTab={selectedTab}
        selectTab={selectTab} />
    </div>
  )
}