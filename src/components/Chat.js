import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../contexts/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import Input from "./Input";

export default function Chat () {
  const { data } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);

  //Update messages any time the document in "chats" collection updates
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className="chat-container">
      {data.chatId !== 'null' &&
      <div className="chat-title">
        <img 
            className="profile-picture"
            src={data.user.photoURL}
            alt="" />
        <p className="name">{data.user.displayName}</p>
      </div>
      }

      <div className="chat-messages">
        {messages.map((m) => {
          return (
            <Message message={m} key={m.id}/>
          )
        })}
      </div>

      {data.chatId !== 'null' && <Input />}
    </div>
  )
}