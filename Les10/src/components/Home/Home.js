import { async } from '@firebase/util';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn, signUp } from '../../service/firebase';
import './Home.css';

export const Home = ({ isSignUp }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleClick = async (e) => {
        e.preventDefault();
        // dispatch(signIn());
        try {
            if (isSignUp) {
                await signUp(email, pass);
            } else {
                await logIn(email, pass);
            }
            setEmail('');
            setPass('');
        } catch (e) {
            setError(e.message);
        }

    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePass = (e) => {
        setPass(e.target.value);
    }

    return (
        <>
            <div className='homePage'><h3>{isSignUp ? "Зарегистрироваться" : "Войти"}</h3></div>
            <form onSubmit={handleClick}>
                <input type="email" value={email} onChange={onChangeEmail} />
                <input type="password" value={pass} onChange={onChangePass} />
                <button>SignIn</button>
            </form>
            {error && <h4>{error}</h4>}
            <Link to={isSignUp ? "/" : "/signup"}>{!isSignUp ? "Зарегистрироваться" : "Войти"}</Link>
        </>
    )
}