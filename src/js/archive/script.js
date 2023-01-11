let pokemonRepository = (function () {
  //pokemon array
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  //function to add new pokemon to the pokemonList array via push (upend the existing array). Check that the input is an object.
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  //Add pokemon to the list with the format of a button
  function addListItem(pokemon) {
    let pokemonItem = $("<li></li>");
    let button = $("<button></button>");
    let pokemonList = $(".list-group");
    pokemonItem.addClass("group-list-item");
    button.text(pokemon.name);
    button.attr("type", "button");
    button.addClass("btn btn-dark");
    button.attr("data-bs-toggle", "modal");
    button.attr("data-bs-target", "#pokemonModal");
    pokemonItem.append(button);
    pokemonList.append(pokemonItem);
  }

  //getAll function to return all of the items in the pokemonList array
  function getAll() {
    return pokemonList;
  }

  //loadList function gets the pokemon list from the pokeAPI
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        //forEach loop to get the name and detail URL from the pokeAPI response
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          //calls the add function to add the "items"/pokemon to the pokemonList array
          add(pokemon);
        });
        //if error log to the console
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //loads the details of the pokemon from the detailsUrl call
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
        //from the "url": "pokemon/1/ etc" endpoint from the pokeAPI list get the image, height, and types associated with each pokemon
      })
      .then(function (details) {
        item.imageURL = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.log(e);
      });
  }

  //function to show a modal of the pokemon details (title, height/details to come, and the image)

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      let pokemonModal = document.getElementById('pokemonModal');
      pokemonModal.addEventListener('show.bs.modal', function (event) {
      var button = event.relatedTarget;
      var title = button.innerText;
      let modalTitle = $(".modal-header");
      let pokemonName = $("<h5></h5>");
      let body = $(".modal-body");
      let height = $("<p></p>");
      let image = $("<img>");
      pokemonName.addClass("modal-title fs-5");
      pokemonName.text(title);
      height.text(pokemon.name + "'s height is: " + pokemon.height);
      image.attr("src", pokemon.imageURL);
      image.attr("alt", "PokemonImage");
      modalTitle.append(pokemonName);
      body.append(height);
      body.append(image);
    });
  });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  //go to the pokemonRepository variable which should return the pokemon list via .gitAll*key is it's a funciton needs () and perform a forEach loop through each parameter of the pokemonRepo
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    pokemonRepository.showDetails(pokemon);
  });
});
