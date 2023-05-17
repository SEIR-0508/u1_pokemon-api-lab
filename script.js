console.log('working')
let button = document.querySelector("#searchButton")

button.addEventListener('click', async () => {

    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    //where does this need to be scoped?
    let textInput = document.querySelector("#inputBar").value
    let name = document.getElementById('name')
    let id = document.getElementById('id')
    let height = document.getElementById('height')
    let weight  = document.getElementById('weight')
    let base_experience = document.getElementById('base_experience')
    let pokemonAbility = document.querySelector(".ability")
    let pokemonMove = document.querySelector('.move')
        

    //Axios call goes here
    //remember to use Async and Await!
    //DOM Setters go here
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)

    //Name
    pokemonName.innerText = pokemon.data.name
    
    //Picture
    let pic1 = `<img src="${pokemon.data.sprites.front_default}"/>`
    let pic2 = `<img src="${pokemon.data.sprites.front_shiny}"/>`
    let pic3 = `<img src="${pokemon.data.sprites.back_default}"/>`
    let pic4 = `<img src="${pokemon.data.sprites.back_shiny}"/>`
    pokemonImage.innerHTML = pic1 + pic2 + pic3 + pic4
    
    //Basic info
    id.innerText = `ID: ${pokemon.data.id}`
    name.innerText = `Name: ${pokemon.data.name}`
    height.innerText = `Height: ${pokemon.data.height}`
    weight.innerText = `Weight: ${pokemon.data.weight}`
    
    base_experience = `Base Experience: ${pokemon.data.base_experience}`
    
    //Abilities
    let abilitiesData= pokemon.data.abilities
    let aTitle= `<p>Ability(ies):</p>`
    let aList = ``
    abilitiesData.forEach( (a) => {
        aList += `<li>${a.ability.name}</li>`
    })
    pokemonAbility.innerHTML = aTitle + aList

    //moves
    let moveData= pokemon.data.moves
    let mTitle= `<p>Move(s):</p>`
    let mList = ``
    moveData.forEach( (m) => {
        mList += `<li>${m.move.name}</li>`
    })
    pokemonMove.innerHTML = mTitle + mList
}
)