/* VARIABLES */

const button = document.querySelector('#searchButton')
const pokeDiv = document.querySelector('#pokeImg')
const pokeName = document.querySelector('#pokeName')
const type = document.querySelector('#type')
const healthPoints = document.querySelector('#hp')
const exp = document.querySelector('#xp')
const showPokeDex = document.querySelector('section#main')
const description = document.querySelector('#description')
const attack = document.querySelector('#attack')

/* EVENT LISTENERS */

button.addEventListener('click', async () => {
    let pokeInput = document.querySelector('#searchBar').value;
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeInput}`);
    let pokemonImg = response.data.sprites.front_default;
    pokeDiv.innerHTML = `<img src=${pokemonImg}>`;
    let pName1 = response.data.name;
    let pName2 = pName1.toUpperCase();
    pokeName.innerHTML = `${pName2}`
    let pType = response.data.types[0].type.name;
    type.innerHTML = `<strong>Type:</strong> ${pType}`
    let health = response.data.stats[0].base_stat;
    healthPoints.innerHTML = `<strong>HP:</strong> ${health}`
    let exPoints = response.data.base_experience;
    exp.innerHTML = `<strong>XP:</strong> ${exPoints}`;
    let pAttack = response.data.stats[1].base_stat
    attack.innerHTML = `<strong>Attack:</strong> ${pAttack}`
    let pokeId = response.data.id;
    let descResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}`);
    let blurb = descResponse.data.flavor_text_entries[0].flavor_text;
    description.innerHTML = `<p><strong>Description:</strong> ${blurb}</p>`
})





/* FUNCTIONS */

function render() {
    renderPD();
}

render();

function renderPD() {
    showPokeDex.style.visibility = EventTarget.button ? 'hidden' : 'visible';
}