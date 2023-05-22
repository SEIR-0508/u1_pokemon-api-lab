// Grab HTML elements 
const searchButton = document.getElementById('searchButton'); 
const pokemonInput = document.getElementById('pokemonInput'); 
const pokemonContainer = document.getElementById('pokemonContainer'); 
const pokemonImage = document.getElementById('pokemonImage');
const pokemonName = document.getElementById('pokemonName'); 
const pokemonDescription = document.getElementById('pokemonDescription'); 
const pokemonAbilities = document.getElementById('pokemonAbilities'); 
const pokemonStats = document.getElementById('pokemonStats'); 
const pokemonTypes = document.getElementById('pokemonTypes');

searchButton.addEventListener('click', function() {
  const value = pokemonInput.value;

      axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then(function(response) {
            
            const data = response.data;
            // display the Pokemon's name and picture
            pokemonName.textContent = data.name;
            pokemonImage.src = data.sprites.front_default;

            //list out the Pokemon's abilities
            // emptying out the current list
            pokemonAbilities.innerHTML = '';
            //loop over each of the Pokemon's abilities
            data.abilities.forEach(function(item) {
                // for each ability, create a new list item and add it to the list
                pokemonAbilities.innerHTML += `<li>${item.ability.name}</li>`;
            });

            // do the same for the Pokemon's stats and types
            pokemonStats.innerHTML = '';
            data.stats.forEach(function(stat) {
                pokemonStats.innerHTML += `<li>${stat.stat.name}: ${stat.base_stat}</li>`;
            });
            pokemonTypes.innerHTML = '';
            data.types.forEach(function(type) {
                pokemonTypes.innerHTML += `<li>${type.type.name}</li>`;
            });

            // make another request to the Pokemon API for data about the Pokemon's species, 
             return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${data.id}`);
        })
        .then(function(response) {
            const data = response.data;
            //find the Pokemon's description that is in English**
            const description = data.flavor_text_entries.find(function(item) {
                return item.language.name === 'en';
            });
            // display the description
            pokemonDescription.textContent = description.flavor_text;
        })
        // Log any errors to the console
        .catch(function(error) {
            console.log('Error: ', error);
        });
});
