import React from 'react';
import './Chat.css';


const Message = ({chat}) => (
    <li>
        {chat.content}
    </li>
);

export default Message;