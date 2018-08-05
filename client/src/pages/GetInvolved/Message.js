import React from 'react';
import { CardBasic } from '../../components/Card';
import './Chat.css';


const Message = ( { chat, date, username } ) => (
    <CardBasic
        id="chatMessageHeader"
        header={ date }>
        { username }
        { chat }
    </CardBasic>
);

export default Message;