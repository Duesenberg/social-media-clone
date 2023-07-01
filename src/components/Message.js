import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Message ({ message }) {
  const { currentUser } = useContext(AuthContext);
  //Create reference to message div
  const ref = useRef();
  //Scroll to latest message any time messages update
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div 
      ref={ref} 
      className={`message-container ${message.senderId !== currentUser.uid && "friend"}`}>
        <p className="message">{message.text}</p>
        { message.img && <img className="image" src={message.img} alt="" />}
    </div>
  )
}