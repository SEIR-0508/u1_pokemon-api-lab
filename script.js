
let button = document.querySelector('#searchButton')
//make length as big as placeholder
document.querySelector('#inputBar').setAttribute('size',document.querySelector('#inputBar').getAttribute('placeholder').length);

button.addEventListener('click', async () => {

    let charName = document.querySelector('#charName')
    let gender = document.querySelector('#gender')
    let house = document.querySelector('#house')
    let show = document.querySelector('#show')
    let book = document.querySelector('#book')
    let textInput = document.querySelector('#inputBar').value

    if(textInput.includes(' ')){
        textInput = textInput.replace(' ','%20')
    }

    let response = await axios.get(`https://www.anapioficeandfire.com/api/characters?name=${textInput}`)
    let name = response.data[0].name
    let titles = []
    let aliases = []
    response.data.forEach(element => {
        titles.push(element.titles)
    }); 
    
    response.data.forEach(element => {
        aliases.push(element.aliases)
    }); 


    
    charName.innerText = `Greetings! My name is ${name}, ${titles.join(', ')}, ${aliases.join(', ')}.`
    
    
    let houseResponse = await axios.get(response.data[0].allegiances[0])
    let bookResponse = await axios.get(response.data[0].books[0])
    
    gender.innerText = `Gender: ${response.data[0].gender}`
    house.innerText = `House: ${houseResponse.data.name}`
    show.innerText = `Last seen in Show: ${response.data[0].tvSeries.slice(-1)}`
    book.innerText = `Last seen in Book: ${bookResponse.data.name}`



    console.log(response)
})

// button.addEventListener('click', async () => {

//     let charName = document.querySelector('#pokemonName')
//     //let pokemonImage = document.querySelector('#pokemonImage')

//     let textInput = document.querySelector('#inputBar').value

//     for(let number = 1; number < 584; number++){
//         let response = await axios.get(`https://anapioficeandfire.com/api/characters/${number}`)
//         if(response.data.name == textInput) charName.innerText = response.data.name

//         console.log(response.data.name)
//     }
//     //pokemonName.innerText = response.data.name
//     //pokemonImage.src = response.data.sprites.back_default
//     //console.log(response)


