import getSetupJokeButton from '../components/buttons/getJokeButton';
import getPunchlineButton from '../components/buttons/getPunchlineButton';
import getRandomProgrammingJoke from './data/jokeData';

const domEvents = () => {
  let jokeObject = [];
  $('body').on('click', (e) => {
    console.warn(e.target.id);
    if (e.target.id.includes('get-joke-btn')) {
      jokeObject = [];
      $('.joke-text').empty();
      getRandomProgrammingJoke().then((response) => {
        jokeObject.push(response[0]);
        $('#joke-setup-container').html(jokeObject[0].setup);
        getPunchlineButton('GET PUNCHLINE');
      });
    }
    if (e.target.id.includes('get-setup-joke-btn')) {
      console.warn(jokeObject);
      $('#joke-punchline-container').html(jokeObject[0].punchline);
      getSetupJokeButton('GET ANOTHER JOKE');
    }
  });
};

export default domEvents;
