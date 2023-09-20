
let button = document.querySelector("#searchButton")

button.addEventListener('click', async () => {
    //variables 
    let pokemonName = document.querySelector("#pokemonName")
    let pokemonAbilities = document.querySelector(".pokemonAbilities")
    let pokemonImage = document.querySelector("#pokemonImage")
    let pokemonMoves = document.querySelector(".pokemonMoves")
    let pokemonStats = document.querySelector(".pokemonStats")
    let textInput = document.querySelector("#inputBar").value
    //Checking to ensure user input is logged. 
    console.log(textInput)
    
    //API Call

    const pokeName = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)

    //Display based on user input
    pokemonName.innerText = pokeName.data.name
    pokemonImage.src = pokeName.data.sprites.front_default

    pokemonAbilities.innerText = `Abilities: ${pokeName.data.abilities[0].ability.name}, ${pokeName.data.abilities[1].ability.name} `
    
    pokemonMoves.innerText = `Moves: ${pokeName.data.moves[0].move.name}, ${pokeName.data.moves[1].move.name}, ${pokeName.data.moves[2].move.name} `

    // for (i = 0; i < pokeName.data.stat.length; i++) {
    pokemonStats.innerText = `Stats: ${pokeName.data.stats[0].stat.name}:  ${pokeName.data.stats[0].base_stat}, ${pokeName.data.stats[1].stat.name}:  ${pokeName.data.stats[1].base_stat}, ${pokeName.data.stats[2].stat.name}: ${pokeName.data.stats[2].base_stat} `
    
}
)



//let placeholderTypeArray = pokeName.data.types[i].type.name

// `Abilities: ${pokeName.data.abilities[0].ability.name}, ${pokeName.data.abilities[1].ability.name}, ${pokeName.data.abilities[2].ability.name} `