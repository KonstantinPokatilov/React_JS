import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../store/Weather/actions";
import { selectErrorMessage, selectIsError, selectIsLoading, selectWeather } from "../../store/Weather/selectors";

export const Weather = () => {

    const weather = useSelector(selectWeather);
    const errorMsg = useSelector(selectErrorMessage);
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);

    const dispatch = useDispatch();

    const requestWeather = async () => {
        dispatch(getWeather())
    };

    useEffect(() => {
        requestWeather()
    }, []);

    return (
        <>
            <h3>
                Погода во Владивостоке
            </h3>

            <button onClick={requestWeather}>Обновить</button>
            {isLoading && <CircularProgress />}
            <h4>Сейчас:</h4>
            {!isError ? (<h5>{Math.round(weather.hourly[0].temp - 273.15)} ° С</h5>) :
                (<>
                    <h4>Error: {errorMsg}</h4>
                    <button onClick={requestWeather}>Перезагрузить</button>
                </>
                )
            }
        </>
    )
}