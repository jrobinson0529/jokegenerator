import getSetupJokeButton from '../components/buttons/getJokeButton';
import getPunchlineButton from '../components/buttons/getPunchlineButton';
import { getJoke, giveJokePunchline, giveJokeSetup } from './getJoke';

const domEvents = () => {
  $('body').on('click', (e) => {
    console.warn(e.target.id);
    if (e.target.id.includes('get-joke-btn')) {
      $('.joke-text').empty();
      $('#joke-setup-container').html(giveJokeSetup());
      getPunchlineButton('GET PUNCHLINE');
    }

    if (e.target.id.includes('get-setup-joke-btn')) {
      $('#joke-punchline-container').html(giveJokePunchline());
      getSetupJokeButton('GET NEW JOKE');
      getJoke();
    }
  });
};

export default domEvents;
