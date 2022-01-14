
import { Form } from "../Form/Form";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setName, toggleName } from "../../store/profile/actions";
import { selectShowName, selectUserName } from "../../store/profile/selectors";

const Profile = () => {
    const showName = useSelector(selectShowName, shallowEqual);
    const userName = useSelector(selectUserName, shallowEqual);
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