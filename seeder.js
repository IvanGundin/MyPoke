// 1) создать 2 покемона через класс
// 2) cloneNode чтобы создать "шаблон"
// 3) наполнить шаблон корректными данными
// 4) добавть новую карточку на страницу

import { Pokemon } from "./classes.js";
import { Pokemon as RenamePoke } from './classes.js';                                                        //создать 2 покемона, импортировал у -> classes
import mockedPokemons from './mockedPokemons.js';
    const btn = document.querySelector('button');
    const pokemonsList = mockedPokemons.map((pokemon) => {
    const { name, abilities, base_experience: experience, sprites: { front_default: image } } = pokemon;
    const abilitiesNames = abilities.map(el => {
    const { ability: { name } } = el;
    return name;
    });
    return new RenamePoke(name, abilitiesNames, experience, image);
});
const kiwi = new Pokemon('Kiwi', ['jump on tree'], null, null);                                              // создал одного покемона
const slowpoke = new Pokemon('Slowpoke', ['wisdom', 'psycho', 'smile'], 101, './assets/Slowpoke.png');       // создал другого покемона => задание п.1 готово!
        const cardList = document.querySelector('.card-list');
        const card = document.querySelector('.card');
        const buttonIdentity = document.querySelector('button');
        const fillPokemonCard = (pokemon) => {
        const cloneCard = card.cloneNode(true);
        const title = cloneCard.querySelector('h3');
        const image = cloneCard.querySelector('img');
        const propertiesText = cloneCard.querySelector('.properties p');
        const [description] = cloneCard.getElementsByClassName('description');
        title.innerText = pokemon.name;
        image.src = pokemon.image;
        propertiesText.innerText = `Уровень ${pokemon.experience}`;
        description.innerHTML = `<h4> Abilities: </h4>
            <ul>
            ${pokemon.abilities.map((el) => `<li>${el}</li>`).join('')}
            </ul>
            `;
        cardList.append(cloneCard); 
    };
    [kiwi, slowpoke].forEach(fillPokemonCard);
//по клику добавляет карточку покемона
buttonIdentity.addEventListener('click', (event) => {
let pokemon = pokemonsList[Math.floor(Math.random()*pokemonsList.length)];    
const pokeMy = new Pokemon(pokemon.name, pokemon.abilities, pokemon.experience, pokemon.image); 
[pokeMy].forEach(fillPokemonCard);
console.log(pokemonsList)
});
//вывод формы alert
const form = document.getElementById('form');
form.addEventListener('submit', getFormValue);
function getFormValue(event) {
    const name = form.querySelector('[name="pokemonName"]'); 
    const data = {name: name.value}
    alert(`👉` + `${name.value}` + `👈` );
    document.data.reset()
}