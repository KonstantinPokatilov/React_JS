
import './Chats.css';

import { useEffect } from 'react';
import { Form } from '../Form/Form';
import { MessageList } from '../MessageList/Messagelist';
import { AUTHORS } from '../../Ulils/constants';
import { useParams } from 'react-router'
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageWithReply } from '../../store/messages/actions';


function Chats() {
    const { chatId } = useParams();
    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();

    const onAddMessage = (newMessage, chatId) => {
        dispatch(addMessageWithReply(newMessage, chatId));
    }



    // const [messageList, setMessageList] = useState([]);  // создаем пустой массив через юзстейт, чтобы отслеживать изменения.

    const handleSumbit = (text) => {
        const newMessage = { text, author: AUTHORS.HUMAN, id: `msg-${Date.now()}` };
        onAddMessage(newMessage, chatId)

    };



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
