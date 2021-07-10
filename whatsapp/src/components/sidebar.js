import React from 'react'
import './sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {Avatar, IconButton} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import SidebarChat from './sidebarChat';

const sidebar = () => {
    return (
        <div  className='sidebar'>
            <div className='sidebar_header'>
                <Avatar src="https://avatars.githubusercontent.com/u/37910311?s=400&u=8d668a214efc473193b92b6262fbf7de4a0a7eb1&v=4"/>
                <div className='sidebar_headerRight'>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                       <ChatIcon/> 
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat/>
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
}

export default sidebar
