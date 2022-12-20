let pokemonRepository = (function() {
  //pokemon array
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //function to add new pokemon to the pokemonList array via push (upend the existing array). Check that the input is an object.
  function add(pokemon) {
    pokemonList.push(pokemon);
  }


  //Add pokemon to the list with the format of a button
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let pokemonItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('name-button');
    button.addEventListener('click', Event => showDetails(pokemon));
    pokemonItem.appendChild(button);
    pokemonList.appendChild(pokemonItem);
  }

  //getAll function to return all of the items in the pokemonList array
  function getAll() {
    return pokemonList;
  }

  //loadList function gets the pokemon list from the pokeAPI 
  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      //forEach loop to get the name and detail URL from the pokeAPI response
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        //calls the add function to add the "items"/pokemon to the pokemonList array 
        add(pokemon);
      });
      //if error log to the console 
    }).catch(function(e) {
      console.error(e);
    })
  }

  //loads the details of the pokemon from the detailsUrl call 
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
      //from the details API get the image, height, and types associated with each pokemon
    }).then(function(details) {
      item.imageURL = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e) {
      console.log(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      console.log(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };

})();
pokemonRepository.loadList().then(function() {
  //go to the pokemonRepository variable which should return the pokemon list via .gitAll*key is it's a funciton needs () and perform a forEach loop through each parameter of the pokemonRepo
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
