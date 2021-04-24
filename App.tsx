// @ts-ignore
import React, {useState, useEffect, Node, useMemo} from 'react';
import InputCity from './containers/InputCity/InputCity';
import Weatherboard from './containers/Weatherboard/Weatherboard';
import {WeatherItem} from './models/types';
import {creatWeatherData} from './services/conversionService/conversionService';
import {DEFAULT_CITY} from './config/main.const';
import restServiceApi from './services/restServiceApi/restServiceApi';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

const App: () => Node = () => {
  const [city, setCity] = useState(DEFAULT_CITY);
  const [weatherData, setWeatherData] = useState<WeatherItem[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    restServiceApi.getWeather(city).then(data => {
      if (data.cod !== '200') {
        setMessage(data.message);
        showAlert();
        setCity(DEFAULT_CITY);
      } else {
        setWeatherData(creatWeatherData(data));
      }
    });
  }, [city]);



  const showAlert = () => {
    Alert.alert('Warning', `${message}`, [{text: 'Ok'}]);
  };

  // isYouNeedUmbrella(weatherData);

  // useMemo(()=>{
  //   console.log("take umbrella");
  //   return setNeedUmbrella(takeUmbrella());
  // },[isRainy])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <Weatherboard name={city} daylist={weatherData} />
        <InputCity current_city={city} getNewCity={setCity} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'lightcyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
