



 let button = document.querySelector('#searchButton')

 button.addEventListener('click', async () => {  
 let textInput = document.querySelector('#inputBar')
 let pokeInfo = textInput.value
 let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeInfo}`)
console.log(response)



 //finds immage 
 let pokemonImage = document.querySelector(`#pokemonImage`)
 let pokePic = response.data.sprites.front_default
  pokemonImage.src=pokePic

//finds type
let pokemonType= document.querySelector('#pokemonType')
let pokeType = response.data.types.map(type => type.type.name)
 pokemonType.innerHTML= pokeType.join(', ')

 //find weight
let pokemonWeight= document.querySelector('#pokemonWeight')
let pokeWeight = response.data.weight
 pokemonWeight.innerHTML= pokeWeight

 
 let pokemonEvolveFrom= document.querySelector('#pokemonEvolveFrom"')
 let pokeEvolveF = response.data.evolves_from_species.name
  pokemonEvolveFrom.innerHTML= pokeEvolveF



})


