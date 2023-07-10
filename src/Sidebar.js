import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Chat, SearchOutlined } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";
import SidebarChat from "./SidebarChat";
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or Start Search" type="text"></input>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />

            </div>
        </div>
    );
}

export default Sidebar;