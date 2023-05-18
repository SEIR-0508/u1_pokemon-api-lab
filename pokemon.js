console.log('working')

const typeInput = document.querySelector('input')
let button = document.querySelector("#searchButton")
let image = document.querySelector('#pokemonImage')




button.addEventListener('click', async () => {

    let displayName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    let pokemonWeight = document.querySelector('#weight')
    let pokemonAbilities = document.querySelector('#abilities')
    let textInput = document.querySelector("#inputBar").value
    let height = document.querySelector('#height')

    let pokeType = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    console.log(pokeType.data.sprites.front_default)
    displayName.innerHTML = pokeType.data.name    
    pokemonImage.src = pokeType.data.sprites.front_default
    pokemonWeight.innerHTML = `Weight: ${pokeType.data.weight}`
    height.innerHTML = `Height: ${pokeType.data.height}`
    pokemonAbilities.innerHTML = `Abilities: ${pokeType.data.abilities.map((ability) => ability.ability.name + " ")}`
   
   
    console.log(pokeType)

})




// const getPokemon = async () => {
   
//     displayName.innerHTML = pokeType.data.name
//     }




// searchButton.addEventListener('click', async () => {
//     let type = inputBar.value
//     console.log(type)
//     let response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0${type}`)
//     console.log(response)

// })





// getPokemon()