import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";
import { BsDot } from "react-icons/bs";
import Message from "../Messages/Message.jsx";
import {
  ChatContainer,
  ChatHeader,
  ChatMessages,
  ChatForm,
  RoomInfo,
  UserBadge,
  MessageList,
} from "./Chat.styles";
import { PrimaryButton } from "../UI/Button/Button";
import { TextInput } from "../UI/Input/Input";

let socket;
const ENDPOINT = process.env.REACT_APP_API_URL;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [usersInRoom, setUsersInRoom] = useState([]);
  const location = useLocation();
  const messagesEndRef = useRef(null);

  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const room = searchParams.get("room");

  useEffect(() => {
    socket = io(ENDPOINT, { transports: ["websocket", "polling"] });

    socket.emit("join", { username: name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    socket.on("roomData", ({ users }) => {
      setUsersInRoom(users);
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [name, room]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((msgs) => [...msgs, message]);
    });
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message.trim() || !socket) return;

    // Optimistically clear the input immediately
    setMessage("");

    socket.emit(
      "sendMessage",
      {
        username: name,
        room,
        message,
      },
      (error) => {
        if (error) {
          // If there's an error, restore the message
          setMessage(message);
          alert(error);
        }
        // Input is already cleared at this point
      }
    );
  };

  return (
    <ChatContainer>
      <ChatHeader>
        <RoomInfo>
          <h2>{room}</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "#555",
            }}
          >
            <BsDot color="green" size={20} /> {usersInRoom.length}{" "}
            {usersInRoom.length === 1 ? "user" : "users"} online
          </div>
        </RoomInfo>
        <UserBadge>{name}</UserBadge>
      </ChatHeader>

      <ChatMessages>
        <MessageList>
          {messages.map((msg, i) => (
            <Message key={i} message={msg} currentUser={name} />
          ))}
          <div ref={messagesEndRef} />
        </MessageList>
      </ChatMessages>

      <ChatForm onSubmit={sendMessage}>
        <TextInput
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          autoFocus
        />
        <PrimaryButton type="submit" disabled={!message.trim()}>
          Send
        </PrimaryButton>
      </ChatForm>
    </ChatContainer>
  );
};

export default Chat;
