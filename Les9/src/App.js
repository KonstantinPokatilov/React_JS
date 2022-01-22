
import './App.css';

import { Provider } from 'react-redux';

import { Router } from './components/Router/Router';
import { ProfileContext } from './Ulils/ProfileContext';
import { useState } from 'react';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';


function App() {
  const [name, setName] = useState('default');
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ProfileContext.Provider value={{ name, setName }} >
          <Router />
        </ ProfileContext.Provider>
      </PersistGate>
    </Provider>


  )


}

export default App;
