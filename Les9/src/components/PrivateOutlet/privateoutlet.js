import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom"
import { selectIsAuthed } from "../../store/profile/selectors";

export const PrivateOutlet = () => {
    const isAuthed = useSelector(selectIsAuthed);

    return isAuthed ? <Outlet /> : <Navigate to="/" replace />; //если пользователь аутентифицирован, рендерим что нужно было, если нет - на домашнюю страницу
}