// @ts-ignore
import React, {useMemo, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import DayList from '../../components/DayList/DayList';
import {WeatherItem} from '../../models/types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {heavyweightThemeChange} from "../../services/heavyweightService/umbrellaService";


type WeatherboardProps = {
  name: string;
  daylist: Array<WeatherItem>;
};

const Weatherboard = (props: WeatherboardProps) => {
  const [isDay, setIsDay] = useState(false);

  let change:boolean = useMemo(()=>heavyweightThemeChange(isDay), [isDay])

  return (
    <View style={[styles.container_weatherboard, {backgroundColor: change? 'deepskyblue':"midnightblue"}]}>
      <View style={styles.name_city_container}>
        <Text style={styles.name_city}>{props.name}</Text>
        <TouchableOpacity onPress={()=>{setIsDay(prev=>!prev)}}>
          <View style={styles.night_theme_container}>
            <Text style={styles.night_theme_txt}>
              night theme
            </Text>
            <FontAwesome5 name={'moon'} size={20} color="aliceblue" />
          </View>
        </TouchableOpacity>

      </View>
      <View style={styles.day_list_container}>
        <DayList weather_data={props.daylist} />
      </View>
    </View>
  );
};

export default Weatherboard;

const styles = StyleSheet.create({
  container_weatherboard: {
    height: 220,
    width: 360,
    backgroundColor: 'deepskyblue',
    marginBottom: 10,
    borderRadius: 5,
  },
  name_city_container: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  name_city: {
    marginTop: 15,
    marginHorizontal: 20,
    fontSize: 28,
    color: 'white',
  },
  day_list_container: {
    flex: 3.5,
  },
  night_theme_container:{
    margin: 15,
    justifyContent:"center",
    alignItems:"center"
  },
  night_theme_txt:{
    fontSize:9,
    color:"aliceblue",
    marginBottom: 3

  }
});
