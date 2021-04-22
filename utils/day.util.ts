import {dayList} from '../models/weather.model';
import {DAYS} from '../config/main.const';

export const getDayNum = (date: string) => {
  return new Date(date).getDay();
};

export const getDayName = (day: dayList) => {
  return DAYS[getDayNum(day.dt_txt)];
};
