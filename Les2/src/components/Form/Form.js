import { useState } from 'react';


export const Form = ({ onAddMessage, }) => {  //создаем компонент формы, в пропс передаем событие по клику, т.е. - отправку сбщ
    const [value, setValue] = useState(''); //создаем переменную value через юзстейт, чтобы отслеживать изменение в инпуте

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // не обновляем страницу

        setValue(""); // очищаем инпут
        onAddMessage({ text: value, author: 'Human', }); //вызаем через пропс в основном компоненте функцию, в которую передаем текст и автора
    };






    return ( // при нажатии на кнопку, запускаем событие handleSubmit
        <form onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={handleChange} />
            <button onSubmit={handleSubmit}>Отправить</button>
        </form>
    )
}