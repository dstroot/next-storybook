// mock canvas
import 'jest-canvas-mock';

// We need to add enzyme and the enzyme adapter to work with React.
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// If some code uses a method which JSDOM (the DOM implementation used
// by Jest) hasn't implemented yet, testing it is not easily possible. T
// his is e.g. the case with window.matchMedia(). Jest returns TypeError:
// window.matchMedia is not a function and doesn't properly execute the test.
// In this case, mocking matchMedia in the test file should solve the issue:
window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

window.scrollTo = jest.fn().mockImplementation(() => {
  return {
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

// mock local storage
// https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests
window.localStorage = jest.fn().mockImplementation(() => {
  var store = {};
  return {
    getItem: function(key) {
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key) {
      delete store[key];
    },
  };
});

// https://medium.com/@stipsan/testing-with-jest-15-awesome-tips-and-tricks-42150ec4c262

// eslint-disable-next-line no-console
const error = console.error;
// eslint-disable-next-line no-console
console.error = (warning, ...args) => {
  if (/(Invalid prop|Failed prop type)/gi.test(warning)) {
    throw new Error(warning);
  }
  error.apply(console, [warning, ...args]);
};
