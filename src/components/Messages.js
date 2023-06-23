import React from "react";
import Conversations from "./Conversations";
import Chat from "./Chat";
import "../styles/Messages.css";

export default function Messages () {
  return (
    <div className="messages-container">
      <Conversations />
      <Chat />
    </div>
  )
}