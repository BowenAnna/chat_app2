import { useState, useEffect, useRef } from "react";
import "../../App.css";
import { MDBBtn, MDBInputGroup } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function Chat({ user, setUser }) {
  const [messages, setMessages] = useState([]);
  const messagesContainer = useRef(null);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:3000/cable");

    ws.current.onopen = () => {
      console.log("Connected to the websocket server");
      ws.current.send(
        JSON.stringify({
          command: "subscribe",
          identifier: JSON.stringify({
            channel: "MessagesChannel",
          }),
        })
      );
    };

    ws.current.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (
        data.type === "ping" ||
        data.type === "welcome" ||
        data.type === "confirm_subscription"
      )
        return;

      if (data.message) {
        setMessages((prevMessages) => [...prevMessages, data.message]);
      }
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    resetScroll();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = e.target.message.value.trim();
    if (body === "") return;
    e.target.message.value = "";

    await fetch("http://localhost:3000/messages", {
      method: "POST",
      body: JSON.stringify({ body }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const fetchMessages = async () => {
    const response = await fetch("http://localhost:3000/messages");
    const data = await response.json();
    setMessages(data);
  };

  const resetScroll = () => {
    if (messagesContainer.current) {
      messagesContainer.current.scrollTop =
        messagesContainer.current.scrollHeight;
    }
  };

  return (
    <div
      id="intro-example"
      className="p-5 text-center bg-image d-flex justify-content-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dxh60x8dq/image/upload/v1718146849/Chattik%20App/wp4410721_ltbdgm.jpg')",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-75 text-right">
        <div className="messages">
        <div className="d-flex flex-row justify-content-end">
          <div>
            <div
              className="small p-2 me-3 mb-1 text-white rounded-3" style={{backgroundColor:"#0da2ff"}}
              id="messages"
              ref={messagesContainer}
            >
              {messages.map((message) => (
                <div
                  className="message d-flex justify-content-between"
                  key={message.id}
                >
                  <p className="ms-5">{message.body}</p>
                </div>
              ))}
            </div>
            {/* <p className="small me-3 mb-3 rounded-3 text-muted">
              <Time/>
            </p>  will show the time at which the message was sent*/}
          </div>
          <p>{user.name}</p>
        </div>
        </div>
        <div className="messageForm">
          <form onSubmit={handleSubmit}>
            <MDBInputGroup className="mb-3">
              <input
                className="form-control"
                placeholder="Message"
                type="text"
                label="Message"
                name="message"
              />
              <MDBBtn color="warning" type="submit">
                Send
              </MDBBtn>
            </MDBInputGroup>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;

