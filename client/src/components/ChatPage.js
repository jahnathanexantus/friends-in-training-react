import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:3001");

function ChatPage() {
  return (
    <div>
      <p>Hello World!</p>
    </div>
  );
}

export default ChatPage;
