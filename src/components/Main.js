//Main section of the app screen. Depending on state of selectedTab shows
//corresponding component

import React from "react";
import Feed from './Feed';
import Search from './Search';
import Messages from './Messages';
import Notifications from './Notifications';
import Create from './Create';
import Profile from './Profile';

export default function Main ({ selectedTab }) {
  return (
    <div className="main-container">
      { selectedTab === '0' && <Feed /> }
      {/* { selectedTab === '1' && <Search /> } */}
      { selectedTab === '2' && <Messages /> }
      {/* { selectedTab === '3' && <Notifications /> } */}
      { selectedTab === '4' && <Create /> }
      { selectedTab === '5' && <Profile /> }
    </div>
  )
}
