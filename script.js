let button = document.querySelector("#searchButton")
let textInput = document.querySelector("#inputBar")
let pokemonName = document.querySelector("#pokemonName")
let imageDiv = document.querySelector(`#imageDiv`)
let detailsDiv = document.querySelector(`#detailsDiv`)
let heightDiv = document.querySelector(`#heightDiv`)
let weightDiv = document.querySelector(`#weightDiv`)
let abilitiesDiv = document.querySelector(`#abilitiesDiv`)
let expDiv = document.querySelector(`#expDiv`)
let statsDiv = document.querySelector(`#statsDiv`)
let movesDiv = document.querySelector(`#movesDiv`)

button.addEventListener('click', async function() {     
    let pokemon = textInput.value   
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    console.log(response)
    let pokeImg = response.data.sprites.other["official-artwork"].front_default
    let pokeName = response.data.name
    pokemonName.innerText = `${pokeName}`
    imageDiv.innerHTML = `<img src=${pokeImg}>`

    let height = response.data.height / 10
    let weight = response.data.weight / 10
    let abilities = response.data.abilities.map(ability => ability.ability.name).join(`, `)
    let baseExperience = response.data.base_experience
    let stats = response.data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(`||`)
    let moves = response.data.moves.map(move => move.move.name).join(`, `)

    abilitiesDiv.innerText = `Abilities: ${abilities}`
    heightDiv.innerText = `Height: ${height} m`
    weightDiv.innerText = `Weight: ${weight} kg`
    expDiv.innerText = `Base experience: ${baseExperience}`
    statsDiv.innerText = `${stats}`
    movesDiv.innerText = `Moves: ${moves}`

}
)