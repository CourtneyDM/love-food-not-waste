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
            username: '',
            message: '',
            chats: []
        };
        // this.getChat = this.getChat.bind( this );
    }

    componentDidMount() {
        this.setState( {
            message: '',
            username: 'Anonymous'
        } );
        this.getChat();
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    // Save recent post to chat database
    saveChat = post => {
        return API.saveChat( post )
            .then( res => console.log( `saveChat res.data: ${res.data}` ) )
            .catch( error => { throw error } );
        // TODO: update chat array with response from API call - call getChat method
    }

    // Handle input field changes
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState( { [ name ]: value } );
    }

    // Handle button click
    handleClick = event => {
        event.preventDefault();
        if ( window.sessionStorage.getItem( 'username' ) ) {
            this.setState( {
                username: window.sessionStorage.getItem( 'username' ),
            } );
        }
        else {
            this.setState( {
                username: 'Anonymous',
            } );
        }
        const post = {
            username: this.state.username,
            message: this.state.message
        };

        console.log( `Post details: ${post}` );
        return this.saveChat( post );
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