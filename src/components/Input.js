import { useContext, useState } from "react";
import { ChatContext } from "../contexts/ChatContext";
import { AuthContext } from "../contexts/AuthContext";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import uniqid from 'uniqid';
import { db, storage } from "../firebase";
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";

export default function Input () {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uniqid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uniqid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uniqid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    console.log(text)
    console.log(img);

    setText("");
    setImg(null);
  };

  //Execute handleSend when enter key is pressed
  const handleKeyDown = async (e) => { e.code === 'Enter' && handleSend(); }

  return (
    <div className="send-message-container">
      <input 
        type="text" 
        name="send-message"
        placeholder="Type a message"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        value={text} />

      <div className="buttons">
        <input
          type="file"
          name="addPhoto"
          style={{ display: "none" }}
          id="addPhoto"
          onChange={(e) => setImg(e.target.files[0])}
          accept=".jpg, .jpeg"
        />
        <label htmlFor="addPhoto" className="add-photo-label" />
        <button className="send" onClick={handleSend}><div className="icon" /></button>
      </div>
    </div>
  )
}