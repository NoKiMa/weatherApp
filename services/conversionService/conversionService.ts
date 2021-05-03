import {WeatherItem} from '../../models/types';
import {dayList, WeatherModel} from '../../models/weather.model';
import {getDayName, getDayNum} from '../../utils/day.util';

type GroupDays = {
    [key: string]: dayList[];
}

export const creatWeatherData = (data: WeatherModel) => {
    let weatherItems: WeatherItem [] = [];
    let groupDays: GroupDays = {} as GroupDays;
    data.list.forEach((dayList: dayList) => {
        const date: string = dayList.dt_txt.split(' ')[0];
        if (!groupDays[date]) {
            groupDays[date] = [];
        }
        groupDays[date].push(dayList);
    })

    weatherItems = Object.keys(groupDays).map((dayStamp) => {
        const currentDayData = groupDays[dayStamp];
        const maxTemp: number = currentDayData.reduce((max: number, date: dayList) => Math.max(max, Math.floor(date.main.temp_max)), Math.floor(currentDayData[0].main.temp_max))
        const minTemp: number = currentDayData.reduce((min: number, date: dayList) => Math.min(min, Math.floor(date.main.temp_min)), Math.floor(currentDayData[0].main.temp_max))
        return {
            id: currentDayData[0].dt.toString(),
            max_temp: maxTemp,
            min_temp: minTemp,
            day: getDayName(currentDayData[0]),
            icon: getWeatherIcon(currentDayData)
        };
    });
    weatherItems.length = 5;
    return weatherItems;
}

const getWeatherIcon = (dayWeather: dayList[]) => {
    let today: number = new Date(dayWeather[0].dt_txt.split(" ")[0]).getDay();
    return today === new Date().getDay() ? dayWeather[0].weather[0].icon : dayWeather[Math.ceil(dayWeather.length / 2)].weather[0].icon;
}
