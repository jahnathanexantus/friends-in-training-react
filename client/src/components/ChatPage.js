import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./chatpage.css"; // Import the CSS file
import { useParams } from "react-router-dom";

const socket = io("http://localhost:3000");

const ChatPage = () => {
  const { userId } = useParams();
  const [room, setRoom] = useState(userId);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (room) {
      socket.emit("join_room", room);
    }

    socket.on("receive_message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [room]);

  const sendMessage = () => {
    const messageData = {
      room,
      content: message,
    };

    socket.emit("send_message", messageData);
    setMessages((prevMessages) => [...prevMessages, messageData]);
    setMessage("");
  };

  return (
    <div className="chat-page-container">
      <div className="chat-container">
        <h2>Chat Room</h2>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index}>
              <p>{msg.content}</p>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </div>
  );
};

export default ChatPage;
