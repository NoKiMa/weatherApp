import {
  BASE_OPEN_WEATHER_URL,
  OPEN_WEATHER_API_KEY,
} from '../../config/main.const';

const restServiceApi = {
  getWeather: async (city: string) => {
    try {
      const url: string = `${BASE_OPEN_WEATHER_URL}?q=${city}&appid=${OPEN_WEATHER_API_KEY}&cnt=40&units=metric`;
      let response = await fetch(url);
      return await response.json();
    } catch (e) {
      console.error(e);
    }
  },
};

export default restServiceApi;
