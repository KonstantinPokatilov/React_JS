
import './Chatlist.css'
import { Link, Outlet } from 'react-router-dom';
import { Form } from '../Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../../store/chats/actions';




export const ChatList = () => {

    const chats = useSelector(state => state.chats);
    const dispatch = useDispatch();

    const onAddChat = (newChatName) => {
        const newId = `chat${Date.now()}`;
        const newChat = {
            id: newId,
            name: newChatName,
        };
        dispatch(addChat(newChat));
    }
    return (
        <>
            <ul>{chats.map((chat) => (
                <li key={chat.id}>
                    <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                </li>
            ))}</ul>
            <Form onSubmit={onAddChat} />
            <Outlet />
        </>
    )


};