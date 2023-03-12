import React from "react";
import { collection, limit, orderBy, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatMessage from "./ChatMessage";

export default function ChatRoom() {
  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("createdAt", "desc"), limit(50));
  const [messages, loading] = useCollectionData(q, { idField: "id" });
  console.log(messages)

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className="chat-room">
      {messages &&
        messages.reverse()
          .map((msg) => (
            <ChatMessage
              key={msg.id}
              text={msg.text}
              uid={msg.uid}
              photoURL={msg.photoURL}
            />
          ))}
    </div>
  );
}
