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
  error: boolean,
  isLoading: boolean,
  weatherInfo: Object,
  fetchData: Function,
}

const getErrorMessage = () => (
  <Text style={styles.errorText}>
    An Error occured when fetching data
  </Text>
);

const getWeatherInfo = (weatherInfo) => {
  const { summary, temperature } = weatherInfo;
  const info = temperature
    ? `${Math.floor(temperature)} deg, ${summary}`
    : 'No Weather Info Available. Make sure you provided a valid API key in the `config.js` file.';

  return (
    <Text style={styles.weatherInfoText}>
      {info}
    </Text>
  );
};

const WeatherComponent = (props: Props) => {
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
