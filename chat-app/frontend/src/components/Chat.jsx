import { useState } from "react";
import "./App.css";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [guid, setGuid] = useState("");

  return (
    <div>
      <div>Chat</div>
      <p> Guid: {guid}</p>
    </div>
  );
}
