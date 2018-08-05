import React from 'react';
import ReactDOM from 'react-dom';
import { CardDeck, CardBasic } from '../../components/Card';
import './Chat.css';
import Message from './Message';
import API from '../../utils/API'
import { Input, Button } from '../../components/Form';

class Chatroom extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            message: '',
            chats: []
        };
        this.getChat = this.getChat.bind( this );
    }

    componentDidMount() {
        this.getChat();
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    // Handle input field changes
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState( { [ name ]: value } );
    }

    // Handle button click
    handleClick = event => {
        event.preventDefault();
        alert( this.state.itemName );
        this.setState( {
            message: this.state.message
        } );
        console.log( `Message submitted: ${message}` );
        return this.saveChat( message );
    }



    scrollToBot() {
        ReactDOM.findDOMNode( this.refs.chats ).scrollTop = ReactDOM.findDOMNode( this.refs.chats ).scrollHeight;
    }

    getChat = () => {
        API.getChat().then( results => {
            this.setState( {
                chats: results.data.data,
            } );
            console.log( this.state.chats );
        } )
            .catch( error => { throw error } );
    }

    // Save recent post to chat database
    saveChat = message => {
        return API.saveChat( message )
            .then( res => console.log( `saveChat response: ${res}` ) )
            .catch( error => { throw error } );
        // TODO: update chat array with response from API call - call getChat method
    }

    // saveChatClick = () => {
    //     console.log( "Saving message:" + this.state.message )
    //     this.saveChat( {
    //         message: this.state.message
    //     } )

    //     this.setState( {
    //         message: ''
    //     } );
    //     this.getChat();

    // }
    render() {
        return (
            <CardDeck>
                <CardBasic
                    header='Chat with Locals Looking to Help in the Fight Against Food Waste'>
                    <div className='chatroom'>
                        <div className="chats" ref="chats">
                            { this.state.chats
                                .slice( 0, this.state.chats.length )
                                .map( ( chat, index ) => {
                                    return <Message
                                        key={ index }
                                        date={ chat.date }
                                        chat={ chat.message } />
                                } ) }
                        </div>
                    </div>
                    <div className='chatForm'>
                        <Input
                            id="chatMessageInput"
                            name='message'
                            placeholder='Enter your message here'
                            onChange={ this.handleInputChange } >

                            <Button
                                className='btn btn-search'
                                text='Post Message'
                                onClick={ this.handleClick } />
                        </Input>
                    </div>
                </CardBasic>
            </CardDeck >
        );
    }
}

export default Chatroom;