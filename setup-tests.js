/* eslint-env node */
import '@testing-library/jest-dom';

import.meta.env.VITE_API_URL = 'https://api.weatherapi.com/v1';
import.meta.env.VITE_API_KEY = 'bfe6f6c03f044b06a76213646251804';

beforeAll(() =>
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  }),
);
