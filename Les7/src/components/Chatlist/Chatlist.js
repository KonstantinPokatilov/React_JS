
import './Chatlist.css'
import { Outlet } from 'react-router-dom';
import { Form } from '../Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from '../../store/chats/actions';
import { ChatItem } from './ChatItem/chatItem';




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

    const handleDeleteChat = (id) => {
        dispatch(deleteChat(id));
    }


    return (
        <>
            <ul>{chats.map((chat) => (
                <ChatItem key={chat.id} chat={chat} onDelete={handleDeleteChat} />
            ))}</ul>
            <Form onSubmit={onAddChat} />
            <Outlet />
        </>
    )


};