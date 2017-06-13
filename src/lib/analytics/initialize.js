import ReactGA from 'react-ga';

export default function initialize(debug = false, id = 'UA-99690204-1') {
  ReactGA.initialize(id, {
    debug
  });
}
