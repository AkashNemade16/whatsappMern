import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import './chat.css'
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFile from '@material-ui/icons/AttachFile';
const chat = () => {
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

                <p className="chat_message">
                    <span className="chat_name">akash</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat_message">
                    <span className="chat_name">akash</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat_message chat_receiver">
                    <span className="chat_name">akash</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

            </div>

            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input placeholder='Type a message' 
                    type='text'/>
                    <button  type="submit">
                    send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    );
}

export default chat
