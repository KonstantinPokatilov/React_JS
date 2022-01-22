import { store } from "../../store/index";
import { Form } from "../Form/Form";
import { withProfileContext } from '../../Ulils/ProfileContext'
import { useDispatch, useSelector } from "react-redux";
import { toggleName } from "../../store/profile/actions";

export const Profile = ({ name, setName }) => {
    const showName = useSelector((state) => state.showName);
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(toggleName);
    }
    return (
        <>
            <h3>Profile</h3>
            <input type="checkbox" checked={showName} onChange={handleChange}></input>
            {showName && < span > {name}</span>}
            <Form onSubmit={setName} />
        </>
    );
}

export default withProfileContext(Profile);
