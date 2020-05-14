import React from 'react';
import Person from './PersonChat/PersonChat';
import './Chat.css'
const Chat = () => {
    return(
    <div className="chat-container">
        <h1>Messages</h1>
        <div className="people">
            <Person/>  
            <Person/>
            <Person/>
            <Person/>
            <Person/>
            <Person/>   
            <Person/>  
            <Person/>
            <Person/>
            <Person/>
            <Person/>
            <Person/>     
        </div>
    </div>
    );
}

export default Chat;