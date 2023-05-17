const button = document.querySelector('#searchButton')
const button2 = document.querySelector('#searchButton2')

button.addEventListener('click', getCharacter = async () => {
    let characterInfo = document.querySelector('#inputBar')
    let characterName = document.querySelector('.characterName')
    let characterGender = document.querySelector('.gender')
    let characterCulture = document.querySelector('.culture')
    let characterBorn = document.querySelector('.born')
    let characterDeath = document.querySelector('.death')
    let characterActor = document.querySelector('.actor-name')

    let characterRequest = parseInt(characterInfo.value)
    if(isNaN(characterRequest)) {
        alert(`You didn't enter a number!`)
    }
    else {
        const getCharacterInfo = await axios.get(`https://anapioficeandfire.com/api/characters/${characterRequest}`)
        console.log(getCharacterInfo)
        
        try {
            characterName.innerHTML = `Name: ${getCharacterInfo.data.name}`
            characterGender.innerHTML = `Gender: ${getCharacterInfo.data.gender}`
            characterCulture.innerHTML = `Culture: ${getCharacterInfo.data.culture}`
            characterBorn.innerHTML = `Born: ${getCharacterInfo.data.born}`
            characterDeath.innerHTML = `Death: ${getCharacterInfo.data.death}`
            characterDeath.innerHTML = `Death: ${getCharacterInfo.data.died}`
            characterActor.innerHTML = `Actor Name: ${getCharacterInfo.data.playedBy[0]}`
        } 
        catch(e) {
            console.log(e)
        }
        characterInfo.value = ''
}})

button2.addEventListener('click', getCharacterByName = async () => {
    let characterInfo2 = document.querySelector('#inputBar2').value
    let characterName = document.querySelector('.characterName')
    let characterGender = document.querySelector('.gender')
    let characterCulture = document.querySelector('.culture')
    let characterBorn = document.querySelector('.born')
    let characterDeath = document.querySelector('.death')
    let characterActor = document.querySelector('.actor-name')

    if(characterInfo2.includes(' ')) {
        characterRequest = characterInfo2.replace(' ', '%20')
    }
    console.log(characterRequest)
    const getCharacterInfo = await axios.get(`https://anapioficeandfire.com/api/characters?name=${characterRequest}`)
    console.log(getCharacterInfo)
    let characterDeathB1 = true
    let characterDeathB2 = true
    try {
        if (getCharacterInfo.data.length === 0) {
            characterName.innerHTML = 'Name: Could not find'
            characterGender.innerHTML = 'Gender: Could not find'
            characterCulture.innerHTML = 'Culture: Could not find'
            characterBorn.innerHTML = 'Born: Could not find'
            characterDeath.innerHTML = 'Death: Could not find'
            characterActor.innerHTML = 'Actor Name: Could not find'
        } else {
            const characterData = getCharacterInfo.data[0];
            
            if (characterData.name === null || characterData.name === undefined) {
                characterName.innerHTML = 'Name: Could not find'
            } else {
                characterName.innerHTML = `Name: ${characterData.name}`
            }
            if (characterData.gender === null || characterData.gender === undefined) {
                characterGender.innerHTML = 'Gender: Could not find'
            } else {
                characterGender.innerHTML = `Gender: ${characterData.gender}`
            }
            if (characterData.culture === null || characterData.culture === undefined) {
                characterCulture.innerHTML = 'Culture: Could not find'
            } else {
                characterCulture.innerHTML = `Culture: ${characterData.culture}`
            }
            if (characterData.born === null || characterData.born === undefined) {
                characterBorn.innerHTML = 'Born: Could not find'
            } else {
                characterBorn.innerHTML = `Born: ${characterData.born}`
            }
            if (characterData.death === null || characterData.death === undefined) {
                characterDeathB1 = false
                characterDeath.innerHTML = 'Death: Could not find'
            } else if (characterData.died === null || characterData.died === undefined) {
                characterDeathB2 = false
                characterDeath.innerHTML = 'Death: Could not find'
            } else if (characterDeathB1) {
                characterDeath.innerHTML = `Death: ${characterData.death}`
            } else if (characterDeathB2) {
                characterDeath.innerHTML = `Death: ${characterData.died}`
            }
            if (characterData.playedBy[0] === null || characterData.playedBy[0] === undefined) {
                characterActor.innerHTML = 'Actor Name: Could not find'
            } else {
                characterActor.innerHTML = `Actor Name: ${characterData.playedBy[0]}`
            }
        }
    } catch(e) {
        console.log(e)
        //alert('We could not find all the data!')
    }
    characterInfo2 = ''
})