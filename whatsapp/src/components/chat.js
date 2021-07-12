import React, { useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import './chat.css'
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFile from '@material-ui/icons/AttachFile';
import axios from '../axios';

const Chat = ({ messages }) => {
    const [input, setInput] = useState('');
    const sendMessage = async(e) => {

        axios.post('/messages/new', {
            "message": input,
            "name": "Demo App ",
            "timestamp": "Just Now",
            "received": false,
        });
        setInput("");
    };

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar />
                <div className='chat_headerInfo'>
                    <h3>Room Name</h3>
                    <p>last seen at...</p>
                </div>
                <div className='chat_headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                {messages.map((message) => (
                    <p className={`chat_message ${message.received && "chat_receiver"}`}>
                        <span className="chat_name">{message.name}</span>
                        {message.message}
                        <span className="chat_timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                ))}




            </div>

            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)}
                        placeholder='Type a message'
                        type='text' />
                    <button onClick={sendMessage} type="submit">
                        send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
}

export default Chat
