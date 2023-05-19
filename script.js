

    
    let button = document.querySelector("#searchButton")

    

    button.addEventListener('click', async () => {
       let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    let pokeID = document.querySelector("#pokeID")
    let abilities = document.querySelector("#abilities")
    let textInput = document.querySelector("#inputBar")
    let poke = textInput.value.toLowerCase()
        //axios call goes here
        let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)

        pokemonName.innerHTML = `${pokemon.data.name}`
        pokemonImage.innerHTML = `<img alt="An image of ${pokemon.data.name}." src ="${pokemon.data.sprites.other["official-artwork"].front_default}"/>`
        pokeID.innerHTML = `${pokemon.data.id}`
        // abilities.innerHTML = `<tr>${pokemon.data.abilities[0].ability.name}</tr>`

        


        console.log(pokemon.data)
    })
    


   
    

    //remember to use Async and Await!
    //DOM Setters go here

   
//     console.log(poke)
//     let response = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon/${poke}/`
//     )
//     let pokePic = response.data.sprites.other["official-artwork"].front_default
//     imgDIV.innerHTML = `<img src = ${pokePic}>`
    
//      })
    
// console.log(response.data.message)
