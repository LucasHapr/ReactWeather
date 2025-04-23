import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { useWeather } from '../hooks/useWeather';
import Loading from './loading';

const Forecast = ({ location }) => {
  const { forecast, isLoading, isError } = useWeather('forecast', location);

  if (isLoading || isError) return <Loading />;
  return (
    <>
      <div className="m-4">
        <div className="">
          {forecast.map((item, index) => {
            return (
              <ul className="mt-4" key={index}>
                <li className="flex flex-row p-1 text-gray-500 dark:text-white">
                  <span className="flex-1 text-left">
                    {dayjs(item.date).format('dddd')}
                  </span>
                  <span className="text-2xl text-indigo-700 dark:text-white">
                    <img
                      src={`https:${item.day.icon}`}
                      alt="Ícone do Clima"
                      className="inline-block w-8 h-8"
                    />
                  </span>
                  <span className="flex-1 text-right">
                    {item.day.mintemp_c}&deg;C / {item.day.maxtemp_c}&deg;C
                  </span>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

Forecast.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Forecast;
