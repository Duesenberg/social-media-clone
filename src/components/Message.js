import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ChatContext } from "../contexts/ChatContext";

export default function Message ({ m }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <div className="message-container">
      <p className="timestamp">5/6/23 22:00</p>
      <p className="message">Hey what's up</p>
  </div>
  )
}