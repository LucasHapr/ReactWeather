import React from 'react';
import Layout from './layout';

const About = () => {
  return (
    <>
      <Layout>
        <section
          className="prose prose-lg mx-auto mt-12 mb-32 h-auto max-w-3xl rounded-lg pt-2 shadow-lg"
          style={{ backgroundPositionY: '100%' }}
        >
          <div className="p-4 text-gray-500 dark:text-gray-400">
            <h3 className="font-sans text-xl font-medium text-gray-600 dark:text-white">
              Sobre o ReactWeather
            </h3>
            <p className="pt-4">
              O ReactWeather é um aplicativo de clima bonito, construído com a API{' '}
              <a
                className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                href="https://www.weatherapi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WeatherAPI
              </a>
              .
            </p>
            <p className="pt-4">
              Este é um projeto de código aberto feito por mim,{' '}
              <a
                className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                href="https://github.com/lucasHapr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lucas
              </a>
              , um desenvolvedor de software.
            </p>
            <p className="pt-4">
              O aplicativo foi desenvolvido utilizando{' '}
              <a
                className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>{' '}
              e{' '}
              <a
                className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TailwindCSS
              </a>
              . Ele utiliza os{' '}
              <a
                className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                href="https://erikflowers.github.io/weather-icons/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ícones de clima de Erik Flowers
              </a>{' '}
              e está hospedado na{' '}
              <a
                className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel
              </a>
              . Se você gostou do projeto, sinta-se à vontade para fazer um fork no{' '}
              <a
                className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LucasHapr/ReactWeather"
              >
                GitHub
              </a>{' '}
              e deixar uma estrela!
            </p>
            <p className="pt-4">
              Obrigado por visitar. Tenha um ótimo dia!
            </p>
          </div>
        </section>
        <div className="flex justify-center">
          <a
            href="https://www.buymeacoffee.com/lucas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Compre-me um café"
              className="h-16 w-56 rounded-lg shadow"
            />
          </a>
        </div>
      </Layout>
    </>
  );
};

export default About;
