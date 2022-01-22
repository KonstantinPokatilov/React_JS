import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { NoMatch } from "../NoMatch/Nomatch";
import Profile from '../Profile/Profile';
import Chats from '../Chats/index';
import { Home } from '../Home/Home';
import { ChatList } from "../Chatlist/Chatlist";
import { Dogs } from '../Dogs/dogs';
import { Weather } from '../Weather/Weather';
import { PrivateOutlet } from "../PrivateOutlet/privateoutlet";
import { PublicOutlet } from "../PublicOutlet/publicoutlet";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../service/firebase";
import { useDispatch } from "react-redux";
import { initAuthTracking, signIn, signOut } from "../../store/profile/actions";



export const Router = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initAuthTracking());
    }, []);

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
                <li>
                    <NavLink
                        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
                        to="/dogs">
                        DOGS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
                        to="/Weather">
                        Weather
                    </NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<PublicOutlet />}>
                    <Route path="" element={<Home />} />
                    <Route path="signup" element={<Home isSignUp />} />
                </Route>
                <Route path="chats" element={<PrivateOutlet />}>
                    <Route path="" element={<ChatList />}>
                        <Route path=":chatId" element={<Chats />} />
                    </Route>
                </Route>
                <Route path="/profile" element={<PrivateOutlet />}>
                    <Route path="" element={<Profile />} />
                </Route>
                <Route path="/dogs" element={<Dogs />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter >
    )
};
