// @flow

import { connect } from 'react-redux';
import WeatherComponent from '../../components/weather-component/weather-component';
import { getWeatherSelector } from '../../reducers/weather-reducer';
import { fetchData } from '../../actions/fetch-data/fetch-data';

const mapStateToProps = (state: Object) => getWeatherSelector(state);

const mapDispatchToProps = (dispatch: Function) => ({
  fetchData: () => dispatch(fetchData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherComponent);
