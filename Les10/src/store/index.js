import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { chatsReducer } from './chats/reducer';
import { messagesReducer } from './messages/reducer';
import { profileReducer } from './profile/reducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { dogsReducer } from './articles/reducer';
import { weatherReducer } from './Weather/reducer';


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    messages: messagesReducer,
    chats: chatsReducer,
    profile: profileReducer,
    dogs: dogsReducer,
    weather: weatherReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)),
);

export const persistor = persistStore(store)