import React from 'react';
import { CardBasic } from '../../components/Card';
import './Chat.css';


const Message = ({chat, date}) => (
    <CardBasic
    id="chatMessageHeader"
    header={date}>
        {chat}
   </CardBasic>
);

export default Message;