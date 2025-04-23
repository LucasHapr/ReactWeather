import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/pt-br'; // Importa o idioma português
dayjs.extend(utc);
dayjs.locale('pt-br'); // Define o idioma como português
import Loading from './loading';
import { useWeather } from '../hooks/useWeather';
import PropTypes from 'prop-types';

const WeatherCard = ({ location }) => {
  const { weather, isLoading, isError } = useWeather('current', location || 'Franca');

  // Traduções para o texto do clima
  const conditionTranslations = {
    "Patchy rain nearby": "Chuva irregular nas proximidades",
    "Sunny": "Ensolarado",
    "Partly cloudy": "Parcialmente nublado",
    "Cloudy": "Nublado",
    "Overcast": "Encoberto",
    "Light rain": "Chuva leve",
    // Adicione mais traduções conforme necessário
  };

  if (isLoading || isError) return <Loading />;
  return (
    <>
      <div className="m-4">
        <div className="sm">
          <p className="text-2xl font-semibold tracking-wide dark:text-white">
            {weather.location.name}, {weather.location.region}, {weather.location.country}
          </p>
          <p className="tracking-wide text-gray-500 dark:text-gray-400">
            {dayjs(weather.location.localtime).format('dddd')},{' '}
            {dayjs(weather.location.localtime).format('HH:mm')},{' '}
            {conditionTranslations[weather.current.condition.text] || weather.current.condition.text}
          </p>
        </div>
        <div className="my-8 flex flex-row justify-between text-5xl tracking-wide lg:my-4 lg:text-6xl">
          <span className="mt-6 font-light text-gray-500 dark:text-white md:mt-10">
            {weather.current.temp_c}&deg;C
            <span className="mt-1 flex flex-col text-base font-normal tracking-wide text-gray-500 dark:text-gray-400">
              Sensação térmica {weather.current.feelslike_c}&deg;C
            </span>{' '}
          </span>
          <div className="mt-4 text-8xl text-indigo-700 dark:text-white sm:text-9xl">
            <img
              src={`https:${weather.current.condition.icon}`}
              alt="Ícone do Clima"
            />
          </div>
        </div>
        <div className="mt-1 text-indigo-700 dark:text-gray-400">
          <span className="wi wi-strong-wind text-xl"></span>
          <span className="ml-1 mr-2 tracking-wide text-gray-500 dark:text-white">
            {weather.current.wind_kph} km/h ventos ({weather.current.wind_dir})
          </span>
          <span className="wi wi-humidity text-xl"></span>
          <span className="ml-1 tracking-wide text-gray-500 dark:text-white">
            {weather.current.humidity}% umidade
          </span>
        </div>
        <div className="mt-10 mb-4 text-center text-2xl tracking-wide text-gray-500 dark:text-white">
          {conditionTranslations[weather.current.condition.text] || weather.current.condition.text}
        </div>
      </div>
    </>
  );
};

export default WeatherCard;

WeatherCard.propTypes = {
  location: PropTypes.string,
};
