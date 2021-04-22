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
      <View style={styles.namecity_container}>
        <Text style={styles.namecity}>{props.name}</Text>
      </View>
      <View style={styles.daylist_container}>
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
  namecity_container: {
    flex: 1.5,
  },
  namecity: {
    marginTop: 15,
    marginHorizontal: 20,
    fontSize: 28,
    color: 'white',
  },
  daylist_container: {
    flex: 3.5,
  },
});
