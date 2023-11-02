const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  'Why did the scarecrow win an award? Because he was outstanding in his field!',
  'I told my wife she was drawing her eyebrows too high. She looked surprised.',
  'What do you call a bear with no teeth? A gummy bear.',
  'Why are snails slow? Because they are carrying a house on their back.',
  'What is fast, loud and crunchy? A rocket chip.',
  'What do you call a guy who’s really loud? Mike.',
];

const jokeElement = document.getElementById('joke');
const getJokeButton = document.getElementById('getJokeButton');

const getRandomJokes = () => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
};
console.log(getRandomJokes());
getJokeButton.addEventListener('click', displayRandomJoke);
