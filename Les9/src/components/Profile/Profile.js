
import { Form } from "../Form/Form";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { initUserData, setName, setNameInDb, toggleName } from "../../store/profile/actions";
import { selectShowName, selectUserName } from "../../store/profile/selectors";
import { logOut } from "../../service/firebase";
import { useEffect, } from "react";
import { onValue, set } from "firebase/database";

const Profile = () => {
    const showName = useSelector(selectShowName, shallowEqual);
    const userName = useSelector(selectUserName, shallowEqual);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(initUserData());
    }, []);

    const handleChange = (e) => {
        dispatch(toggleName(e.target.checked));
    };

    const handleSubmit = (newName) => {
        dispatch(setNameInDb(newName));
    };


    return (
        <>
            <h3>Profile</h3>
            <button onClick={logOut}>Выйти</button>
            <input type="checkbox" checked={showName} onChange={handleChange} />
            {showName && < span > {userName}</span>}
            <Form onSubmit={handleSubmit} />
        </>
    );
}


export default Profile;