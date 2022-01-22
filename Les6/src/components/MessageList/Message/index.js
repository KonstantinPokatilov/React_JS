import { AUTHORS } from '../../../Ulils/constants';
import { Avatar } from '@mui/material';
import '../Messagelist.css';
import { green, red } from '@mui/material/colors';
import { useContext } from 'react';
import { ProfileContext } from '../../../Ulils/ProfileContext';

export const Message = ({ author, text }) => {
    const { name } = useContext(ProfileContext);


    return (
        <div>
            {author === AUTHORS.HUMAN ?
                <Avatar sx={{ bgcolor: green[500] }} variant="rounded">H</Avatar> :
                <Avatar sx={{ bgcolor: red[500] }} variant="rounded">B</Avatar>
            }
            <div className={author === AUTHORS.HUMAN ? "msg human-msg" : "msg bot-msg"}>
                {author === AUTHORS.HUMAN ? name : author}: {text}
            </div>

        </div>
    )
}
