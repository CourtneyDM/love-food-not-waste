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
            this.setState( { username: 'Anonymous' } );
        }
        const post = {
            username: this.state.username,
            message: this.state.message
        };

        // console.log( `Post details: ${post}` );
        return this.saveChat( post );
    }

    scrollToBot() {
        ReactDOM.findDOMNode( this.refs.chats ).scrollTop = ReactDOM.findDOMNode( this.refs.chats ).scrollHeight;
    }

    getChat = () => {
        return API.getChat()
            .then( results => {
                console.log( `Here are the results: ${JSON.stringify( results, null, 2 )}` );
                this.setState( {
                    chats: results.data.data,
                    message: '',
                    username: ''
                } );
                console.log( this.state.chats );
            } )
            .catch( error => { throw error } );
    }

    // Save recent post to chat database
    saveChat = post => {
        console.log( `Posting: ${post}` );
        return API.saveChat( post )
            .then( this.getChat() )
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
                                        date={ chat.dateCreated }
                                        username={ chat.username }
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