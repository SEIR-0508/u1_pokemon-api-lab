const input = document.querySelector("input")
const button = document.querySelector("button")
const imageDiv = document.querySelector("#image-div")
const image = document.querySelector("img")
const nameDisplay = document.querySelector("#name-display")
const list = document.querySelector("ul")
const movesTitle = document.querySelector("#moves")
const heightTitle = document.querySelector("#height")
const fightButton = document.querySelector("#fight-btn")
const computerHeading = document.querySelector("#computer-chooses")
const computerNameDisplay = document.querySelector("#computer-name-display")
const computerImage = document.querySelector("#computer-image-div")
const fightingDisplay = document.querySelector("#fighting")
const winnerText = document.querySelector("#winner")
const winnerImage = document.querySelector("#winner-picture")


button.addEventListener("click", async()=>{

    fightingDisplay.style.display = "none"
    if (input.value.includes(" ") === false){
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
    let pokemonName = pokemon.data.name.toUpperCase()
    let pokemonImage = pokemon.data.sprites.front_default
    nameDisplay.innerText = pokemonName
    imageDiv.innerHTML = `<img src='${pokemonImage}' />`
    movesTitle.style.display = "none"
    list.style.display = "none" 
    heightTitle.style.display = "none"

    } else if (input.value.includes(" moves") === true){
    const justPokemonName = input.value.replace(" moves","")
    //found replace( ) method online
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${justPokemonName}`)
    let pokemonName = pokemon.data.name.toUpperCase()
    let pokemonImage = pokemon.data.sprites.front_default
    nameDisplay.innerText = pokemonName
    imageDiv.innerHTML = `<img src='${pokemonImage}' />`
    movesTitle.style.display = "block"
    list.style.display = "block"  
    heightTitle.style.display = "none"
    
    const pokemonMoves = pokemon.data.moves
    for (let i = 0;i<pokemonMoves.length;i++){
    list.insertAdjacentHTML("afterbegin", `<li>${pokemon.data.moves[i].move.name}</li>`)
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
    } 

    } else if (input.value.includes(" height")=== true) {
    const justPokemonName = input.value.replace(" height","")
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${justPokemonName}`)
    let pokemonName = pokemon.data.name.toUpperCase()
    let pokemonImage = pokemon.data.sprites.front_default
    nameDisplay.innerText = pokemonName
    imageDiv.innerHTML = `<img src=${pokemonImage} />`
    heightTitle.style.display = "block"
    movesTitle.style.display = "none"
    list.style.display = "block"
    list.innerHTML = `<li>${pokemon.data.height} ft</li>`
    }

    console.log(await axios.get(`https://pokeapi.co/api/v2/pokemon/${input.value}`))
}) 


fightButton.addEventListener("click", async ()=>{
computerHeading.style.display = "inline"
imageDiv.style.marginLeft = "170px"
nameDisplay.style.marginLeft = "170px"
let randomPokemon = Math.round(Math.random()*150)
let getRandomPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
computerNameDisplay.innerText = getRandomPokemon.data.name.toUpperCase()
computerImage.innerHTML = `<img src=${getRandomPokemon.data.sprites.front_default} />`
fightingDisplay.style.display = "inline"

const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
let chosenPokemon = pokemon.data.sprites.front_default
let computerPokemon = getRandomPokemon.data.sprites.front_default
const winnerChoices = [chosenPokemon,computerPokemon]
let winner = winnerChoices[Math.round(Math.random())]
fightingDisplay.innerText = "Hitting, smashing..."
const displayWinner = () => {
    winnerImage.innerHTML = `<img src=${winner} />`
    fightingDisplay.innerText = "We have a winner!"
}
setTimeout(displayWinner,2000)
//https://www.w3schools.com/jsref/met_win_settimeout.asp


})
