const getPokemon = async () => {
    const pokemonType = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    console.log(pokemonType.data)
}

getPokemon()

const button = document.querySelector ('button')
const pokemonInput = document.querySelector ('#pokemoninput')
const pokemonInfo = document.querySelector ('#pokemoninfo')
const pokemonName = document.querySelector('#pokemonName')
const pokemonImage = document.querySelector ('#pokemonImage')
const pokemonAbility = document.querySelector ('#pokemonAbility')
const pokemonForms = document.querySelector ('#pokemonForms')
const pokemonMoves = document.querySelector ('#pokemonMoves')


// const imageDiv = document.querySelector ('div')



button.addEventListener('click', async () => {
    //pokemon is pulled from html document, input (line 17) stores it in 'pokemon'
    let pokemon = pokemonInput.value
    pokemonName.innerText = pokemon
    console.log(pokemon)
    //get info from pokeapi 
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        )
    //returns info
        console.log(response.data)
    pokemonImage.src = response.data.sprites.front_default;
    
  });

    

    
// need to get the name to show up
// need to get the picture to show up
// need to get data below to show up

})
