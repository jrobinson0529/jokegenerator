import getNewJoke from '../components/buttons/getNewJokeButton';
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
      getNewJoke('GET ANOTHER JOKE');
    }
    if (e.target.id.includes('get-new-joke-btn')) {
      $('.joke-text').empty();
      getJoke();
      $('#joke-setup-container').html(giveJokeSetup());
      getPunchlineButton('GET PUNCHLINE');
    }
  });
};

export default domEvents;
