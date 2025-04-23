import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
import useSWR from 'swr';
import fetcher from '../lib/fetcher';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

if (!BASE_URL || !API_KEY) {
  throw new Error('API URL or Key is not defined in environment variables');
}

export function useWeather(endpoint, location) {
  const apiEndpoint = `?key=${API_KEY}&q=${location}`;

  const { data, error, isLoading } = useSWR(
    `${BASE_URL}/${endpoint}.json${apiEndpoint}`,
    fetcher,
  );

  return {
    weather: endpoint === 'current' ? (data ? mapResponseProperties(data) : null) : null,
    forecast: endpoint === 'forecast' ? (data ? mapForecastProperties(data) : null) : null,
    isLoading,
    isError: error,
  };
}

function mapResponseProperties(data) {
  const mapped = {
    location: {
      name: data.location.name,
      region: data.location.region,
      country: data.location.country,
      localtime: data.location.localtime,
    },
    current: {
      temp_c: data.current.temp_c,
      feelslike_c: data.current.feelslike_c,
      condition: {
        text: data.current.condition.text,
        icon: data.current.condition.icon,
      },
      wind_kph: data.current.wind_kph,
      wind_dir: data.current.wind_dir,
      humidity: data.current.humidity,
    },
  };

  return mapped;
}

function mapForecastProperties(data) {
  return data.forecast.forecastday.map((day) => ({
    date: day.date,
    day: {
      maxtemp_c: day.day.maxtemp_c,
      mintemp_c: day.day.mintemp_c,
      condition: day.day.condition.text,
      icon: day.day.condition.icon,
    },
  }));
}
