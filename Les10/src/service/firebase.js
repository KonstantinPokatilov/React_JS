import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAuth
} from "firebase/auth";
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBFZnO4lbzaJKm-6V6pZkIFOWsC32KDuqQ",
    authDomain: "react-chat-20109.firebaseapp.com",
    projectId: "react-chat-20109",
    storageBucket: "react-chat-20109.appspot.com",
    messagingSenderId: "645555941851",
    appId: "1:645555941851:web:7189101fda574ae7b1b7fe"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
};
export const logIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
};
export const logOut = async () => {
    await signOut(auth);
};

export const userRef = ref(db, 'user');
export const userNameRef = ref(db, 'user/name');
export const userShowNameRef = ref(db, 'user/showName');

export const chatsRef = ref(db, "chats");
export const getChatRefById = (id) => ref(db, `chats/${id}`);

export const msgsRef = ref(db, "messages");
export const getMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
export const getMsgsListRefById = (chatId) => ref(db, `messages/${chatId}/messageList`);