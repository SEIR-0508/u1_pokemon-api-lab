const button = document.querySelector('#searchButton')
const textInput = document.querySelector('#inputBar')
const pokemonName = document.querySelector('#pokemonName')
const pokemonImage = document.querySelector('#pokemonImage')
//const  clearBtn = document.getElementById('clearBtn')



button.addEventListener('click', async() => {

    
    let pokeInput = textInput.value
    
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeInput}`)
console.log(response)


    let pokePic = response.data.sprites.front_default
    pokemonImage.innerHTML = `<img src= ${pokePic}>`


    let pokeName = response.data.name
    pokemonName.innerHTML = pokeName



    let pokeBaseEXP = response.data.base_experience
    let divEXP = document.createElement('div')
    divEXP.setAttribute('class','pokeBaseEXP')
    divEXP.textContent = 'Base Experience:' + pokeBaseEXP
    document.body.append(divEXP)
    


    let pokeWeight = response.data.weight
    let divWeight = document.createElement('div')
    divWeight.setAttribute('class', 'pokeWeight')
    divWeight.textContent = 'Weight:' + pokeWeight
    document.body.append(divWeight)

    let pokeHeight = response.data.height
    let divHeight = document.createElement('div')
    divHeight.setAttribute('class', 'pokeHeight')
    divHeight.textContent = 'Height:' + pokeHeight
    document.body.append(divHeight)
 
    let pokeAbilities = response.data.abilities
    pokeAbilities.forEach((ab) => {
        let abilityName = ab.ability.name
        let newDiv =  document.createElement('div')
        newDiv.setAttribute('class', 'pokeAbilities')
        newDiv.textContent = 'Ability:' + abilityName
        document.body.append(newDiv)

    


    })
 
  

})

// clearBtn.addEventListener('click', restart)
// function restart(){
//     form.fill(null)

//     }
