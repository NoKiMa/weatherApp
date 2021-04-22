import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

type InputCityProps = {
  current_city: string;
  getNewCity: (string) => void;
};
const InputCity = (props: InputCityProps) => {
  const [city, setCity] = useState('');
  const returnNewCity = () => {
    props.getNewCity(city);
    setCity('');
  };

  return (
    <View style={styles.input_container}>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
        placeholder="add name of the city"
        placeholderTextColor="deepskyblue"
      />
      <TouchableHighlight onPress={returnNewCity}>
        <View style={styles.input_btn}>
          <Text style={{color: '#ffffff'}}>Go</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  input_container: {
    height: 50,
    width: '85%',
    flexDirection: 'row',
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    flex: 8,
    marginHorizontal: 5,
    borderBottomColor: 'deepskyblue',
  },
  input_btn: {
    // flex:2,
    height: 35,
    width: 35,
    marginHorizontal: 10,
    backgroundColor: 'deepskyblue',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InputCity;
