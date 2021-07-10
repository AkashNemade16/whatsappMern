import React from 'react'
import './sidebatChat.css'
import { Avatar } from '@material-ui/core'

const SidebarChat = () => {
    return (
        <div className='SidebarChat'>
            <Avatar />
            <div className='sidebarChatInfo'>
                <h2>Room Name</h2>
                <p>This was the last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
