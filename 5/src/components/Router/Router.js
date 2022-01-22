import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { NoMatch } from "../NoMatch/Nomatch";
import Profile from '../Profile/Profile';
import Chats from '../Chats/index';
import { Home } from '../Home/Home';
import { ChatList } from "../Chatlist/Chatlist";
import { useState } from 'react';


const initialChats = [
    {
        id: 'chat1',
        name: 'Chat 1',
    },
    {
        id: 'chat2',
        name: 'Chat 2',
    },
    {
        id: 'chat3',
        name: 'Chat 3',
    },
    {
        id: 'chat4',
        name: 'Chat 4',
    },
];

const initialMessages = initialChats.reduce((acc, chat) => {  //перебираем массив 
    acc[chat.id] = [];
    return acc;
}, {});
// начальное значение - пустой объект. Грубо говоря, запихиваем к чату (по ID) пустой массив для сообщений



export const Router = () => {

    const [chats, setChats] = useState(initialChats);
    const [messages, setMessages] = useState(initialMessages);

    const handleAddMessage = (newMessage, chatId) => {

        setMessages(prevMessages => ({
            ...prevMessages,
            [chatId]: [...prevMessages[chatId], newMessage],
        }));

    };

    return (
        <BrowserRouter>
            <ul>
                <li>
                    <NavLink
                        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
                        to="/">
                        Home</NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
                        to="/chats">
                        Chats</NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
                        to="/profile">
                        PROFILE</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="chats" element={<ChatList chats={chats} />}>
                    <Route path=":chatId" element={
                        <Chats messages={messages} onAddMessage={handleAddMessage} />
                    } />
                </Route>
                <Route path="/profile" element={
                    <Profile />
                } />

                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter >
    )
}