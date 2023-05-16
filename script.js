//need to add evenlistener for the click 
//then make an async axiot req which gets the poke from the api
// let button = document.querySelector("#searchButton");


const button = document.querySelector("#searchButton");
const breedInput = document.querySelector("#inputBar");
const pokemonName = document.querySelector("#pokemonName");
const pokemonImage = document.querySelector("#pokemonImage");

const pokemonDetails = document.querySelector("#pokemonDetails");

button.addEventListener('click', async () => {
  const textInput = breedInput.value.toLowerCase();
//i found this code really helpful it basically takes a code
//that may create an error ypdates th dom to display the info
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`);
    const data = response.data;

    pokemonName.textContent = data.name;
    pokemonImage.src = data.sprites.front_default;

    // now i have to figure out how to get additional stats 
    //i need a code that will go over the array of abilities and moves and then 
    //it will create a new array for the abilites on scvcreen
    const abilities = data.abilities.map((ability) => ability.ability.name);
    const types = data.types.map((type) => type.type.name);
    const movesResponse = await axios.get(data.moves[12].move.url); //this one took me almost an hour to figure out 
    //this sends a get to the axios libraray and gets the 13th move (because all the cool moves happen later)
    const moves = movesResponse.data;

    
    pokemonDetails.innerHTML = "";

    // here i had to create a new element 'p' for each detail i was pulling other than 
    //the name and picture then for each element i had the string start with the respective
    //word
    const abilitiesElement = document.createElement("p");
    abilitiesElement.textContent = `Abilities: ${abilities}`;
    pokemonDetails.appendChild(abilitiesElement);
// i found this code on google, the append child code is really useful 
//so basically it just adds the abilitiesElement to the pokemonDetails  
    const typesElement = document.createElement("p");
    typesElement.textContent = `Types: ${types}`;
    pokemonDetails.appendChild(typesElement);

    const movesElement = document.createElement("p");
    movesElement.textContent = `Moves: ${moves.name}`;
    pokemonDetails.appendChild(movesElement);
  } 
  //im goign to google how to create an error message when the wrong thing is in the search 
  catch (error) {
    pokemonName.textContent = "Not a real Pokemon! :/";
    
  }
});
