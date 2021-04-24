import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {WeatherItem} from '../../models/types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {BASE_OPEN_WEATHER_URL_FOR_ICONS} from '../../config/main.const'

const DayItem = (props: WeatherItem) => {
  return (
    <View style={styles.dayitem_container}>
      <View style={styles.day_title_container}>
        <Text style={styles.day_title}>{props.day}</Text>
      </View>
      <Image
        source={{uri: `${BASE_OPEN_WEATHER_URL_FOR_ICONS}${props.icon}@2x.png`}}
        style={{width: 55, height: 55}}
      />
      <View style={styles.temp_container}>
        <Text style={[styles.temp_txt, {color: 'aliceblue'}]}>
          {props.max_temp}
        </Text>
        <FontAwesome5 name={'temperature-low'} size={8} color="aliceblue" />
        <Text style={[styles.temp_txt, {color: 'gainsboro'}]}>
          {props.min_temp}
        </Text>
        <FontAwesome5 name={'temperature-low'} size={8} color="gainsboro" />
      </View>
    </View>
  );
};

export default DayItem;

const styles = StyleSheet.create({
  dayitem_container: {
    marginHorizontal: 3,
    marginVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 65,
  },
  temp_container: {
    flexDirection: 'row',
  },
  temp_txt: {
    fontSize: 15,
    fontFamily: 'Helvetica',
    marginHorizontal: 2,
    paddingHorizontal: 2,
  },
  day_title_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  day_title: {
    fontSize: 20,
    fontFamily: 'Helvetica',
    color: 'aliceblue',
  },
});
