import React from 'react';

const Message = ({chat}) => (
    <li>
        {chat.content}
    </li>
);

export default Message;