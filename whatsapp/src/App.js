import React,{useEffect,useState} from 'react'
import './App.css';  
import Sidebar from './components/sidebar'
import Chat from './components/chat'
import Pusher from "pusher-js"
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    axios.get('/messages/sync').then((response)=>{
      setMessages(response.data);
    });
  },[]);

  useEffect(()=>{
    var pusher = new Pusher('43f148b7e4ac39c886ca', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted',  (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return ()=>{
      channel.unbind()
      channel.unsubscribe();
    };
  },[messages]);

  console.log(messages);
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
