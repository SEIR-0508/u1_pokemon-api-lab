//variables


// functionality
let button = document.querySelector("#searchButton")

button.addEventListener('click', async () => {
let pokemonName = document.querySelector("#pokemonName")
let pokemonImage = document.querySelector("#pokemonImage")
let pokemonImage2 = document.querySelector("#pokemonImage2")
let heldItems = document.querySelector('#heldItems')
let pokemonMoves = document.querySelector('#pokemonMoves')
// let pokemonInfo = document.querySelector('.pokemonInfo')
//where does this need to be scoped?
let textInput = document.querySelector("#inputBar").value
//Axios call goes here
console.log(textInput)
let response = await axios.get(
  `https://pokeapi.co/api/v2/pokemon/${textInput}`)

console.log(response.data)
//remember to use Async and Await!

pokemonName.innerText = response.data.name
pokemonImage.src = response.data.sprites.front_default
pokemonImage2.src = response.data.sprites.back_default
// pokemonInfo.src = response.data.abilities
heldItems.innerText = response.data.held_items[0].item.name
pokemonMoves.innerText = response.data.moves[0].move.name
//DOM Setters go here
console.log(response.data.held_items[0].item.name)
})



// add some setters

