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
    let pokemonList = document.querySelector(".list-group");
    let pokemonItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("group-list-item");
    button.setAttribute("type", "button");
    button.classList.add("btn");
    button.classList.add("btn-dark");
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#pokemonModal");
    button.addEventListener("click", (Event) => showDetails(pokemon));
    pokemonItem.appendChild(button);
    pokemonList.appendChild(pokemonItem);
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
  function showModal(title, text, img) {
    let modalTitle = document.querySelector(".modal-title");
    modalTitle.innerText = title;
    let contentElement = document.querySelector("p");
    contentElement.innerText = text;
    let imageElement = document.querySelector("img");
    imageElement.setAttribute("src", img);
    imageElement.setAttribute("alt", "Pokemon image");
    imageElement.setAttribute("width", 150);
    imageElement.setAttribute("height", 150);
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(
        pokemon.name,
        pokemon.name + "'s height is: " + pokemon.height,
        pokemon.imageURL
      );
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
  });
});
