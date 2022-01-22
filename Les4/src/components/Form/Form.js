import { useEffect, useState, useRef } from 'react';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import './Form.css'



export const Form = ({ onSubmit, }) => {  //создаем компонент формы, в пропс передаем событие по клику, т.е. - отправку сбщ
    const [value, setValue] = useState(''); //создаем переменную value через юзстейт, чтобы отслеживать изменение в инпуте

    const inputRef = useRef();

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e?.preventDefault && e.preventDefault(); // не обновляем страницу

        setValue(""); // очищаем инпут
        onSubmit(value); //вызаем через пропс в основном компоненте функцию, в которую передаем текст и автора
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    return ( // при нажатии на кнопку, запускаем событие handleSubmit
        <form onSubmit={handleSubmit}>
            <TextField type='text' value={value} id="outlined-basic" label="Сообщение" variant="outlined" onChange={handleChange} />
            {/* <input type='text' ref={inputRef} value={value} onChange={handleChange} /> */}
            <Button variant="contained" type='submit'>
                Отправить
            </Button>
        </form >
    )
}