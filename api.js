const baseURL ='https://pokeapi.co/api/v2/pokemon/ditto';

const searchForm = document.querySelector('form');
const pokemons = document.querySelector('ul');

searchForm.addEventListener('submit', fetchPokemons);

function fetchPokemons(e){
    e.preventDefault();
    
    fetch(baseURL)
    .then(result => result.json())
    .then(json => {
      console.log(json);
        displayDitto(json);
    })
    .catch(err => console.log(err))
}

function displayDitto(ditto){
        ditto.forEach(d => {
            let ditto = document.createElement('li');
            ditto.innerText = d.abilities[1];
            pokemons.appendChild(ditto);
        
        })
    }
    
    function displayDitto(ditto){
        ditto.forEach(d => {
            let ditto = document.createElement('li');
            ditto.innerText = d.abilities[3];
            pokemons.appendChild(ditto);
        
        })
    }

function average(a, b) {
    return a + b / 2;
}
console.log(average(2,1));