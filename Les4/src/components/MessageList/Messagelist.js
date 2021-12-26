import { AUTHORS } from '../../Ulils/constants'
import { Avatar } from '@mui/material';
import './Messagelist.css'
import { green, red } from '@mui/material/colors';


export const MessageList = ({ messages }) => (
    <div className="valueArea">
        {messages.map(({ text, author, id }) => ( //с помощью map обходим массив и рендерим объект автор-текст. Массив пока пустой
            < div key={id} >
                {author === AUTHORS.HUMAN ?
                    <Avatar sx={{ bgcolor: green[500] }} variant="rounded">H</Avatar> :
                    <Avatar sx={{ bgcolor: red[500] }} variant="rounded">B</Avatar>
                }
                <div className={author === AUTHORS.HUMAN ? "msg human-msg" : "msg bot-msg"}>
                    {author}: {text}
                </div>

            </div>))}
    </div>

)