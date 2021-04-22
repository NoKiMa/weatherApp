import {WeatherItem} from '../../models/types';
import {dayList, WeatherModel} from '../../models/weather.model';
import {getDayName, getDayNum} from '../../utils/day.util';

type DayChunk = {
  dayOfWeek: number;
  dayTemps: Array<number>;
};

type DayRes = {
  dayOfWeek: number;
  max: number;
  min: number;
};

export const creatWeatherData = (data: WeatherModel) => {
  return data.list
    .filter((day: dayList, index: number) => index % 8 === 0)
    .map(day => {
      const separateDays = getSeparateDays(data.list);
      const dayOfWeek = separateDays.find(
        separateDay => separateDay.dayOfWeek === getDayNum(day.dt_txt),
      );
      const weatherItem: WeatherItem = {
        id: day.dt.toString(),
        max_temp: dayOfWeek.max,
        min_temp: dayOfWeek.min,
        day: getDayName(day),
        icon: day.weather[0].icon,
      };
      return weatherItem;
    });
};

const getSeparateDays = (forecast: dayList[]) => {
  let arrDays: Array<DayChunk> = [];
  let arrDayRes: DayRes[] = [];
  for (let i = 0; i < 7; i++) {
    let dayChunk: DayChunk = {
      dayOfWeek: i,
      dayTemps: [],
    };
    arrDays.push(dayChunk);
  }

  forecast.forEach(item => {
    arrDays.forEach(day => {
      if (day.dayOfWeek === getDayNum(item.dt_txt)) {
        day.dayTemps.push(Math.floor(item.main.temp_max));
        day.dayTemps.push(Math.floor(item.main.temp_min));
      }
    });
  });

  arrDays.forEach(day => {
    let max_temp: number = Math.max.apply(Math, day.dayTemps);
    let min_temp: number = Math.min.apply(Math, day.dayTemps);

    if (max_temp !== Infinity && min_temp !== Infinity) {
      let dayRes: DayRes = {
        dayOfWeek: day.dayOfWeek,
        max: max_temp,
        min: min_temp,
      };
      arrDayRes.push(dayRes);
    }
  });

  return arrDayRes;
};
