// CONSTANTS //

const searchBox = document.querySelector('input')
const searchBtn = document.querySelector('.search')
const selectList = document.querySelector('#pokemonSelect')
const prevPokemon = document.querySelector('.previous')
const nextPokemon = document.querySelector('.next')
const pokemonName = document.querySelector('.pokemonName')
const pokemonPic = document.querySelector('.pokemonPic')
const evolution = document.querySelector('.evolutions')
const attributes = document.querySelector('.attributes')
const myType = document.querySelectorAll('.myType')
const type1 = document.querySelector('#type1')
const type2 = document.querySelector('#type2')
const weakness = document.querySelector('.weaknesses')

// VARIABLES //

let pokemon = {}
let currentPokemon = []
let myPrevPokemon = []
let myNextPokemon = []


// EVENT LISTENERS //

searchBtn.addEventListener('click', async () => {
    let searchPokemon = searchBox.value
    if (searchBox.value == 0) currentPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
    else currentPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
    console.log(currentPokemon)
    findPrevPokemon()
    findNextPokemon()
    buildPage()

})

nextPokemon.addEventListener('click', async () => {
    currentPokemon = await axios.get(`https:pokeapi.co/api/v2/pokemon/${myNextPokemon.data.id}`)
    findPrevPokemon()
    findNextPokemon()
    buildPage()
})

prevPokemon.addEventListener('click', async () => {
    currentPokemon = await axios.get(`https:pokeapi.co/api/v2/pokemon/${myPrevPokemon.data.id}`)
    findPrevPokemon()
    findNextPokemon()
    buildPage()
})

selectList.addEventListener('change', () => {
    searchBox.value = selectList.value
})

// FUNCTIONS //

const pageStart = async () => {
    currentPokemon = await axios.get('https:pokeapi.co/api/v2/pokemon/1')
    findPrevPokemon()
    findNextPokemon()
    buildPage()

}

const buildPage = () => {
    pokemonName.innerHTML = currentPokemon.data.forms[0].name + ' #' + currentPokemon.data.id
    pokemonPic.innerHTML = `<img src='${currentPokemon.data.sprites.front_default}'>`
    let myTypes = currentPokemon.data.types    
    const Types = () => {
        for (let types in myTypes) {
            let thisType = myTypes[types].type
            if (types == 0) type1.innerHTML = thisType.name
            else type2.innerHTML = thisType.name
            if (myTypes.length === 1) type2.style.opacity = 0
            else type2.style.opacity = 1
        }
    }
    Types()
    pokeType(type1)
    pokeType(type2)
}

const findPrevPokemon = async () => {
    let myId = currentPokemon.data.id
    let previousId = 0
    if (myId === 1) {
        previousId = 1010
    } else {
        previousId = myId -1
    }
    myPrevPokemon = await axios.get(`https:pokeapi.co/api/v2/pokemon/${previousId}`)
    prevPokemon.innerHTML = myPrevPokemon.data.forms[0].name + " #" + myPrevPokemon.data.id
}

const findNextPokemon = async () => {
    let myId = currentPokemon.data.id
    let nextId = 0
    if (myId === 1010) {
        nextId = 1
    } else {
        nextId = myId +1
    }
    myNextPokemon = await axios.get(`https:pokeapi.co/api/v2/pokemon/${nextId}`)
    nextPokemon.innerHTML = myNextPokemon.data.forms[0].name + " #" + myNextPokemon.data.id
}

const pokeType = (type) => {
        if (type.innerText === "normal") type.style.backgroundColor = '#A8A77A'
        else if (type.innerText === "fire") type.style.backgroundColor = '#EE8130'
        else if (type.innerText === "water") type.style.backgroundColor = '#6390F0'
        else if (type.innerText === "electric") type.style.backgroundColor = '#F7D02C'
        else if (type.innerText === "grass") type.style.backgroundColor = '#7AC74C'
        else if (type.innerText === "ice") type.style.backgroundColor = '#96D9D6'
        else if (type.innerText === "fighting") type.style.backgroundColor = '#C22E28'
        else if (type.innerText === "poison") type.style.backgroundColor = '#A33EA1'
        else if (type.innerText === "ground") type.style.backgroundColor = '#E2NF65'
        else if (type.innerText === "flying") type.style.backgroundColor = '#A98FF3'
        else if (type.innerText === "psychic") type.style.backgroundColor = '#F95587'
        else if (type.innerText === "bug") type.style.backgroundColor = '#A6B91A'
        else if (type.innerText === "rock") type.style.backgroundColor = '#B6A136'
        else if (type.innerText === "ghost") type.style.backgroundColor = '#735797'
        else if (type.innerText === "dragon") type.style.backgroundColor = '#6F35FC'
        else if (type.innerText === "dark") type.style.backgroundColor = '#705746'
        else if (type.innerText === "steel") type.style.backgroundColor = '#B7B7CE'
        else if (type.innerText === "fairy") type.style.backgroundColor = '#D685AD'
 }

 const pokeList = async () => {
    for (let i = 1; i <= 1010; i++) {
        pokemon = await axios.get(`https:pokeapi.co/api/v2/pokemon/${[i]}`)
        let option = document.createElement('option')
        option.value = pokemon.data.forms[0].name
        option.text = pokemon.data.forms[0].name
        selectList.appendChild(option)
    }

 }

pageStart()
pokeList()

