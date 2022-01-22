import { async } from "@firebase/util";
import { getWeather, getWeatherFailure, getWeatherRequest, getWeatherSuccess } from "../actions"

describe('getWaeather', () => {
    it('dispatch getWeatherRequest', () => {
        const mockDispatch = jest.fn();
        getWeather()(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith(getWeatherRequest());
    });

    it('calls getWeatherSuccess if fetch was successful', async () => {
        const mockDispatch = jest.fn();
        const body = { test: 'test' };
        fetch.mockResponseOnce(JSON.stringify(body));
        await getWeather()(mockDispatch);

        expect(mockDispatch).toHaveBeenLastCalledWith(getWeatherSuccess(body))
    });

    it('calls getWeatherFailure if fetch was unsuccessful', async () => {
        const mockDispatch = jest.fn();
        const error = { message: 'test' };
        fetch.mockRejectOnce(error);
        await getWeather()(mockDispatch);

        expect(mockDispatch).toHaveBeenLastCalledWith(getWeatherFailure(error.message))
    })
});