let pokemonRepository = (function() {
  //pokemon array
  let pokemonList = [{
      name: "Bulbasaur",
      height: 2.04,
      types: [" Grass", " Poison"]
    },
    {
      name: "Charizard",
      height: 5.07,
      types: [" Fire", " Flying"]
    },
    {
      name: "Butterfree",
      height: 3.07,
      types: [" Bug", " Flying"]
    }
  ];

  //function to add new pokemon to the pokemonList array via push (upend the existing array). Check that the input is an object.
  function add(pokemon) {
    if (typeof pokemon === "object" && 
    Object.keys(pokemon).includes("name") && 
    Object.keys(pokemon).includes("height") && 
    Object.keys(pokemon).includes("types")) {
      pokemonList.push(pokemon);
     } else {
      alert("Please fill in all fields to add a Pokemon");
    }
  }

  //Add pokemon to the list with the format of a button 
  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let pokemonItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name; 
    button.classList.add('name-button');
    button.addEventListener('click', (pokemon) => console.log(pokemon));
    pokemonItem.appendChild(button);
    pokemonList.appendChild(pokemonItem);
  }

  function showDetails(pokemon){
    console.log(pokemon);
  }

  //getAll function to return all of the items in the pokemonList array
  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };

})();

//go to the pokemonRepository variable which should return the pokemon list via .gitAll*key is it's a funciton needs () and perform a forEach loop through each parameter of the pokemonRepo
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
