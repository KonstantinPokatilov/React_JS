import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { NoMatch } from "../NoMatch/Nomatch";
import Profile from '../Profile/Profile';
import Chats from '../Chats/index';
import { Home } from '../Home/Home';
import { ChatList } from "../Chatlist/Chatlist";



export const Router = () => (
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
            <Route path="chats" element={<ChatList />}>
                <Route path=":chatId"
                    element={
                        <Chats />
                    } />
            </Route>
            <Route path="/profile" element={
                <Profile />
            } />

            <Route path="*" element={<NoMatch />} />
        </Routes>
    </BrowserRouter >
);
