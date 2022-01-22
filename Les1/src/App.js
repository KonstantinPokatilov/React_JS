import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message';

const text = 'Добрый вечер';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message title={text} />
      </header>
    </div>
  );
}

export default App;
