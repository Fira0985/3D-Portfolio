import { BookOpen, Folder, Home, Mail, MessageCircle, User } from "lucide-react";
import React from "react";
import "../styles/sideBar.css";

function SideBar() {
    return (
        <div className="sidebar">
            <a href="#" className="first-anchor">
                <Home size={20} className="icon" /> Home
            </a>
            <a href="#">
                <BookOpen size={20} className="icon" /> Education
            </a>
            <a href="#">
                <Folder size={20} className="icon" /> My Projects
            </a>
            <a href="#">
                <User size={20} className="icon" /> About
            </a>
            <a href="#">
                <Mail size={20} className="icon" /> Contact Me
            </a>
            <a href="#">
                <MessageCircle size={20} className="icon" /> Ask AI
            </a>
        </div>
    );
}

export default SideBar;
