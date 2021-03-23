import getSetupJokeButton from '../components/buttons/getJokeButton';
import domBuilder from '../components/domBuilder';
import domEvents from './domEvents';

const startApp = () => {
  domBuilder();
  domEvents();
  getSetupJokeButton('GET A JOKE');
};

export default startApp;
