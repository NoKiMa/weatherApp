import {dayList} from '../models/weather.model';
import {DAYS} from '../config/main.const';


export const getDayNum = (date: string) => {
  let dt_txt_cut: string = date.split(" ")[0];
  // return new Date(dt_txt_cut).getDay();
  return new Date(date.split(" ")[0]).getDay();
};

export const getDayName = (day: dayList) => {
  return DAYS[getDayNum(day.dt_txt)];
};
