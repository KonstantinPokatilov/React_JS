
import './Chats.css';

import { useEffect, useState } from 'react';
import { Form } from '../Form/Form';
import { MessageList } from '../MessageList/Messagelist';
import { AUTHORS } from '../../Ulils/constants';
import { ChatList } from '../Chatlist/Chatlist';
import { useParams } from 'react-router'
import { Navigate } from 'react-router-dom';


function Chats({ messages, onAddMessage }) {

    const { chatId } = useParams();
    console.log(chatId);




    // const [messageList, setMessageList] = useState([]);  // создаем пустой массив через юзстейт, чтобы отслеживать изменения.

    const handleSumbit = (text) => {
        const newMessage = { text, author: AUTHORS.HUMAN, id: `msg-${Date.now()}` };
        onAddMessage(newMessage, chatId)

    };


    useEffect(() => {
        let timeout;
        if (messages[chatId]?.[messages[chatId].length - 1]?.author === AUTHORS.HUMAN) {
            timeout = setTimeout(() => {
                onAddMessage(
                    {
                        text: 'Даров', author: AUTHORS.BOT, id: `msg-${Date.now()}`,
                    },
                    chatId
                );
            }, 1500);
        };

        return () => {
            clearTimeout(timeout)
        };
    }, [messages]);

    if (!messages[chatId]) {
        return <Navigate to="/chats" replace />
    }

    return (

        <div className="App">
            <div className="App-header">
                <div className="mainForm">
                    <Form onSubmit={handleSumbit} />
                    <MessageList messages={messages[chatId]} />
                </div>
            </div >
        </div >
    );
}

export default Chats;
