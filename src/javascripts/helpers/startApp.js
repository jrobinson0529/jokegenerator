import getSetupJokeButton from '../components/buttons/getJokeButton';
import domBuilder from '../components/domBuilder';
import domEvents from './domEvents';
import { getJoke } from './getJoke';

const startApp = () => {
  domBuilder();
  domEvents();
  getJoke();
  getSetupJokeButton('GET A JOKE');
};

export default startApp;
