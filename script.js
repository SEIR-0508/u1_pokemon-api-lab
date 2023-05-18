console.log('working')

let pokeName = document.querySelector("#pokemonName")
let pokeImage = document.querySelector("#pokemonImage")
let searchValue = document.querySelector("#inputBar")
let button = document.querySelector("#searchButton")
console.log()



const getPokemon = async () => {
    pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/')
   console.log(pokemon)
 }

 
button.addEventListener('click', async () => {
    pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchValue.value}`)
    pokemonName.innerText = pokemon.data.name
    pokemonImage.src = pokemon.data.sprites.front_default
    console.log(pokemon)

    
    

}
)
