
import './App.css';

import { useEffect, useState } from 'react';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/Messagelist';
import { AUTHORS } from './Ulils/constants';
import { Chatlist } from './components/Chatlist/Chatlist';


function App() {

  const [messageList, setMessageList] = useState([]);  // создаем пустой массив через юзстейт, чтобы отслеживать изменения.

  const chtList = [
    {
      name: 'Артур',
      id: 1
    },
    {
      name: 'Игорь',
      id: 2
    },
    {
      name: 'Антон',
      id: 3
    }

  ]

  const handleAddMessage = (text) => {

    const newMessage = { text, author: AUTHORS.HUMAN, id: `msg-${Date.now()}` };
    setMessageList(prevMessageList => [...prevMessageList, newMessage])

  };


  useEffect(() => {
    let timeout;
    if (messageList[messageList.length - 1]?.author === AUTHORS.HUMAN) {
      timeout = setTimeout(() => {
        setMessageList(prevMessageList => [...prevMessageList,
        { text: 'Даров', author: AUTHORS.BOT, id: `msg-${Date.now()}` }])
      }, 1500);
    };

    return () => {
      clearTimeout(timeout)
    };
  }, [messageList]);

  return (
    <div className="App">
      <div className="App-header">
        <Chatlist chats={chtList} />
        <div className="mainForm">
          <Form onSubmit={handleAddMessage} />
          <MessageList messages={messageList} />
        </div>
      </div >
    </div >
  );
}

export default App;
