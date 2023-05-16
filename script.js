console.log("working")

const button = document.getElementById("searchButton")

button.addEventListener('click', async () => {

    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    let pokemonDesc = document.querySelector("#pokemonDesc")
    let pokemonSpec = document.querySelector("#pokemonSpecies")
    let pokemonWeight = document.querySelector("#pokemonWeight")
    let pokemonHeight = document.querySelector("#pokemonHeight")
    let pokemonNo = document.querySelector("#pokemonNumber")
    
    let textInput = document.querySelector("#inputBar").value

    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`
    )
    let response2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${textInput}`
    )
    
    
    let pName = response.data.name
    let pImage = response.data.sprites.front_default
    let pHt = response.data.height / 10 
    let pWt = response.data.weight / 10
    let pNo = response.data.id
    let pDesc = response2.data.flavor_text_entries[0].flavor_text
    let pSpec = response2.data.genera[7].genus
    
    pokemonName.innerHTML = pName
    pokemonImage.src=pImage
    pokemonDesc.innerHTML = pDesc
    pokemonSpec.innerHTML =`The ${pSpec}` 
    pokemonWeight.innerHTML = `WT ${pWt}kg`
        if(pNo > 9 && pNo <= 99){
            pokemonNo.innerHTML = `No. 0${pNo}`
        }else if(pNo < 10){
            pokemonNo.innerHTML = `No. 00${pNo}`
        }else{
            pokemonNo.innerHTML = `No. ${pNo}`
        }
    pokemonHeight.innerHTML = `HT ${pHt}m`
})