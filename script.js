// let button = document.querySelector("#searchButton")
// const getPokemon = async () => {
//     const pokemon = await axios.get('https://pokeapi.co/api/v2/'({pokemon}))
//     console.log(pokemon.data.message)

// }
// getPokemon()

// button.addEventListener('click', async () => {

//     let pokemonName = document.querySelector("#pokemonName")
//     // let pokemonImage = document.querySelector("#pokemonImage")
//     //where does this need to be scoped?
//     let textInput = document.querySelector("#inputBar").value
//     let response = await axios.get('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png')
//     let pokemonImage = response.data.sprites.other["official-artwork"].front_default
//     imageDiv.innerHTML = `<img src=${pokemonImage}>`
    
        

//     //Axios call goes here
//     //remember to use Async and Await!
//     //DOM Setters go here

// })

// const button = document.querySelector("#searchButton");

// const getPokemon = async () => {
//   try {
//     const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
//     console.log(response.data.message);
//   } catch (error) {
//     console.error(error);
//   }
// };

// getPokemon();

// button.addEventListener('click', async () => {
//   try {
//     const pokemonName = document.querySelector("#pokemonName");
//     const pokemonImage = document.querySelector("#pokemonImage");
//     const textInput = document.querySelector("#inputBar").value;
//     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`);
//     const pokemonPic = response.data.sprites.front_default;
//     pokemonImage.innerHTML = `<img src="${pokemonPic}" alt="${textInput}">`;
//   } catch (error) {
//     console.error(error);
//   }
// });

// script.js

const button = document.querySelector("#searchButton");

button.addEventListener('click', async () => {
  try {
    const pokemonName = document.querySelector("#pokemonName");
    const pokemonImage = document.querySelector("#pokemonImage");
    const textInput = document.querySelector("#inputBar").value;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`);
    const pokemonPic = response.data.sprites.front_default;
    pokemonName.textContent = textInput;
    pokemonImage.setAttribute('src', pokemonPic);
    pokemonImage.setAttribute('alt', textInput);
  } catch (error) {
    console.error(error);
  }
});

// document.addEventListener('DOMContentLoaded', function() {
//     var video = document.getElementById('background-video');
//     var button = document.getElementsByTagName('submit');
  
//     button.addEventListener('click', function() {
//       if (video.paused) {
//         video.play();
//         button.textContent = 'Pause Video';
//       } else {
//         video.pause();
//         button.textContent = 'Play Video';
//       }
//     });
//   });
  
