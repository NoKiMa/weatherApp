import * as React from 'react';
import { Text, View, FlatList, ListRenderItem, StyleSheet } from 'react-native';
import {WeatherItem} from '../../models/types';
import DayItem from '../../components/DayItem/DayItem'
type DayListProps = {
  weather_data:Array<WeatherItem>;
}

const DayList = (props: DayListProps) => {

    const renderItem:ListRenderItem<WeatherItem> = ({item}) =>(
        <DayItem
         id={item.id}
         max_temp={item.max_temp}
         min_temp={item.min_temp}
         day={item.day}
         icon={item.icon}
        //  city={item.city}
        />
    )

  return (
    <View style={styles.daylist_container}>
      <FlatList
      data={props.weather_data}
      renderItem={renderItem}
      keyExtractor={item=>item.id}
      horizontal={true}
      />
    </View>
  );
};

export default DayList;

const styles = StyleSheet.create({
  daylist_container: {
      flex:1,
    //   justifyContent:'space-around',
      alignItems: 'center'
  }
});
