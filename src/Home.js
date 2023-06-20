import { React, useState } from 'react';
import MobileHeader from "./components/MobileHeader";
import NavBar from "./components/NavBar";
import './styles/Home.css';
import Main from './components/Main';

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
      <Main selectedTab={selectedTab} />
      <MobileHeader 
        selectedTab={selectedTab}
        selectTab={selectTab} />
    </div>
  )
}