import { Message } from './Message/index.js';
import './Messagelist.css'


export const MessageList = ({ messages }) => (
    <div className="valueArea">
        {messages.map(({ text, author, id }) => ( //с помощью map обходим массив и рендерим объект автор-текст. Массив пока пустой
            <Message key={id} author={author} text={text} />
        ))}
    </div>

)