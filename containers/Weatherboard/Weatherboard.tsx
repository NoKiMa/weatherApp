import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DayList from '../../components/DayList/DayList';
import {WeatherItem} from '../../models/types';
type WeatherboardProps = {
  name: string;
  daylist: Array<WeatherItem>;
};

const Weatherboard = (props: WeatherboardProps) => {
  return (
    <View style={styles.container_weatherboard}>
      <View style={styles.name_city_container}>
        <Text style={styles.name_city}>{props.name}</Text>
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
    //  height: "40%",
    //  width: "95%",
    height: 220,
    width: 360,
    backgroundColor: 'deepskyblue',
    marginBottom: 10,
    borderRadius: 5,
  },
  name_city_container: {
    flex: 1.5,
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
});
