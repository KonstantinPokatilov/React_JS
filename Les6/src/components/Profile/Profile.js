import { store } from "../../store/index";
import { Form } from "../Form/Form";
import { withProfileContext } from '../../Ulils/ProfileContext'
import { useDispatch, useSelector } from "react-redux";
import { setName, SET_NAME, toggleName } from "../../store/profile/actions";

const Profile = () => {
    const showName = useSelector((state) => state.showName);
    const userName = useSelector((state) => state.name);
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(toggleName);
    };

    const handleSubmit = (newName) => {
        dispatch(setName(newName));
    };

    return (
        <>
            <h3>Profile</h3>
            <input type="checkbox" checked={showName} onChange={handleChange} />
            {showName && < span > {userName}</span>}
            <Form onSubmit={handleSubmit} />
        </>
    );
}


export default Profile;