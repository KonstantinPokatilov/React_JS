
import './App.css';

import { Provider } from 'react-redux';

import { Router } from './components/Router/Router';
import { ProfileContext } from './Ulils/ProfileContext';
import { useState } from 'react';
import { store } from './store'


function App() {
  const [name, setName] = useState('default');
  return (
    <Provider store={store}>
      <ProfileContext.Provider value={{ name, setName }} >
        <Router />
      </ ProfileContext.Provider>
    </Provider>


  )


}

export default App;
