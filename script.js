const button = document.querySelector("#searchButton")

axios.get('https://pokeapi.co/api/v2/pokemon-species').then((response)=>{
    console.log(response.data)
})

const getPoke = async () => {
    const pokeKind= await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    console.log(pokeKind.data)
    
}
getPoke()


button.addEventListener('click', async() => {
    
    const pokeImage = document.querySelector('#pokemonImage')
    const textInput = document.querySelector("#inputBar").value
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    console.log(response)
let pokePic = response.data.sprites.front_default
pokeImage.src = pokePic
})




















// const pokeApi= async () => {
//     const pokemonApi= await axios.get('https://pokeapi.co/api/v2/pokemon/').then( function() {
//         console.log(pokemonApi.data.message)
//     })
//     // pokemon = pokemonApi.data 
// }

// button.addEventListener('click', async ()=> {
//     let pokemon = input.value 
//     let pokemonPic= Response.data.message
//     imageDiv.innerHMTL = '<img src= ${pokemonPic}>'
// })

// getUsers().then(data => console.log(data));
// data.forEach((pokemon) => {
//   // Log each movie's title
//   console.log(pokemon)
// })
//     let pokeName = document.querySelector("input")
//     let image = document.querySelector("#pokemonImage")
//     let button = document.querySelector("inputBar")
//     //where does this need to be scoped?


// button.addEventListener('click', async () => {
// let pokeName = name.value
// console.log(name)
// let textInput = document.querySelector("#inputBar").value
//     let response = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon/${textInput}`
//         )
//     console.log(response)

    // pokemonImage= response.data.message
    // console.log(pokemonImage)
    // imageDiv.innerHTML= `<img src=${pokemonImage}`
    //remember to use Async and Await!
    //DOM Setters go here

// })



