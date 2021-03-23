import getRandomProgrammingJoke from './data/jokeData';

let joke = {};

const getJoke = () => {
  joke = {};
  getRandomProgrammingJoke().then((response) => {
    [joke] = response;
  });
};

const giveJokeSetup = () => joke.setup;
const giveJokePunchline = () => joke.punchline;

export { getJoke, giveJokeSetup, giveJokePunchline };
