import axios from 'axios';

const dbUrl = 'https://official-joke-api.appspot.com';

const getRandomProgrammingJoke = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/jokes/programming/random`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getRandomProgrammingJoke;
