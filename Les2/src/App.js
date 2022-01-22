
import './App.css';

import { useEffect, useState } from 'react';
import { Form } from './components/Form/Form';



function App() {

  const [messageList, setMessageList] = useState([]);  // создаем пустой массив через юзстейт, чтобы отслеживать изменения.


  const handleAddMessage = (newMessage) => {
    setMessageList(prevMessageList => [...prevMessageList, newMessage])

  };


  useEffect(() => {
    messageList.push({ robotMessage: 'Сообщение отправлено' });
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">

        <div class="mainForm">
          <Form onAddMessage={handleAddMessage} />
        </div>

        <div class="valueArea">
          {messageList.map(({ text, author, robotMessage }) => ( //с помощью map обходим массив и рендерим объект автор-текст. Массив пока пустой
            < div >
              {author}: {text}
              <div class="robotMessage">{robotMessage}</div>
            </div>))}
        </div>
      </header >
    </div >
  );
}

export default App;
