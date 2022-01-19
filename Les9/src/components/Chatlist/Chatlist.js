
import './Chatlist.css'
import { Outlet } from 'react-router-dom';
import { Form } from '../Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, addChatWithFb, deleteChat, deleteChatWithFb, initChatsTracking } from '../../store/chats/actions';
import { ChatItem } from './ChatItem/chatItem';
import { useEffect, useState } from 'react';
import { onValue, set } from 'firebase/database';
import { chatsRef, getChatRefById, getMsgsRefById } from '../../service/firebase';
import { initMsgsTracking } from '../../store/messages/actions';




export const ChatList = () => {

    const chats = useSelector(state => state.chats);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initChatsTracking());
        dispatch(initMsgsTracking());
    }, []);

    const onAddChat = (newChatName) => {
        dispatch(addChatWithFb(newChatName));
    };

    const handleDeleteChat = (id) => {
        dispatch(deleteChatWithFb(id));
    };


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