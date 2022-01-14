import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../../store/articles/actions';
import { selectDogs, selectErrorMessage, selectIsError, selectIsLoading } from '../../store/articles/selectors';
import { apiUrl } from '../../Ulils/constants';
import './dogs.css'

export const Dogs = () => {

    const dogs = useSelector(selectDogs);
    const errorMsg = useSelector(selectErrorMessage);
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);

    const dispatch = useDispatch();

    const requestDogs = async () => {
        dispatch(getDogs())
    };

    // const getDogs = () => {
    //     setLoading(true);
    //     fetch(apiUrl)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Request error: ' + response.status);
    //             }
    //             return response.json();
    //         })
    //         .then(result => {
    //             setDogs(result);
    //         })
    //         .catch((err) => {
    //             setError(true);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // }

    useEffect(() => {
        requestDogs()
    }, []);

    return (<>
        <h3>Dogs</h3>
        <div className='blockDog'>
            <button onClick={requestDogs}>Новая собака</button>
            {isLoading && <CircularProgress />}
        </div>
        {!isError ? (<div className='dogs'><img src={dogs.message} className='dogsImg' alt="#"></img></div>) :
            (<>
                <h4>Error: {errorMsg}</h4>
                <button onClick={requestDogs}>Перезагрузить</button>
            </>
            )
        }

    </>)
}