// @flow

import React from 'react';
import {
  View,
  Button,
  Text,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';

type Props = {
  error : boolean,
  isLoading : boolean,
  weatherInfo : Object,
  fetchData : Function,
}

const getErrorMessage = () => (
  <Text style={styles.errorText}>
    An Error occured when fetching data
  </Text>
);

const getWeatherInfo = (weatherInfo) => {
  const { summary, temperature } = weatherInfo;
  return (
    <View style={styles.weatherInfoContainer}>
      <Text style={styles.weatherInfoText}>
        {`${Math.floor(temperature)} deg, ${summary}`}
      </Text>
    </View>
  );
};

const WeatherComponent = (props : Props) => {
  const {
    isLoading,
    error,
    fetchData,
    weatherInfo,
  } = props;
  const hasWeatherData = Object.keys(weatherInfo).length;

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : null}
      {error ? getErrorMessage() : null}
      {hasWeatherData ? getWeatherInfo(weatherInfo) : null}
      <Button
        onPress={fetchData}
        title='Load Data'
      />
    </View>
  );
};

export default WeatherComponent;
