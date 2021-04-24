import {dayList} from '../models/weather.model';
import {DAYS} from '../config/main.const';


export const getDayNum = (date: string) => (new Date(date.split(" ")[0]).getDay());

export const getDayName = (day: dayList) => (DAYS[getDayNum(day.dt_txt)]);
