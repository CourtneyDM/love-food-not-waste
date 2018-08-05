import React from 'react';
import { CardBasic } from '../../components/Card';
import './Chat.css';


const Message = ( { chat, date, username } ) => (
    <CardBasic
        id="chatMessageHeader"
        header={ `${username}- ${date}` }>
        { chat }
    </CardBasic>
);

export default Message;