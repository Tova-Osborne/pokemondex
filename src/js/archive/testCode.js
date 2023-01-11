//filter pokemon by name and return the pokemon details (this is for the bonus )
/*function filterName(arr, query) {
  return pokemonRepository.getAll().filter((pokemon) => pokemon.name.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterName(pokemonRepository.getAll(),"blubasaur"));*/

  /*function add(pokemon) {
    if (typeof pokemon === "object" && 
    Object.keys(pokemon).includes("name") && 
    Object.keys(pokemon).includes("height") && 
    Object.keys(pokemon).includes("types")) {
      pokemonList.push(pokemon);
     } else {
      alert("Please fill in all fields to add a Pokemon");
    }
  }*/


   /*//function to show a modal of the pokemon details (title, height/details to come, and the image)
   function showModal(title, text, img) {
    //clear the title and text of the modal
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.innerHTML = "";

    //create new div with class = 'modal"
    let modal = document.createElement("div");
    modal.classList.add("modal");

    //create button element with class = "modal-close" with Close text and calls hideModal function to close upon click, esc, or click outside of modal
    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener("click", hideModal);

    //H1 for the title in the modal
    let titleElement = document.createElement("h1");
    titleElement.innerText = title;
    //paragraph for the body of the modeal
    let contentElement = document.createElement("p");
    contentElement.innerText = text;
    //image element for the pokemon image
    let imageElement = document.createElement("img");
    imageElement.setAttribute("src", img);
    imageElement.setAttribute("alt", "Pokemon image");

    //create all of the modal elements defined above
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageElement);
    modalContainer.appendChild(modal);

    //make the modal visible on click
    modalContainer.classList.add("is-visible");

    modalContainer.addEventListener("click", (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  }

  //hide modal function (by removing is-visible class)
  function hideModal() {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("is-visible");
  }
  window.addEventListener("keydown", (e) => {
    let modalContainer = document.querySelector("#modal-container");
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });*/

  /*button.click(function () {
    var title = $(this.button).val();
    $('h1').text(title);
  });*/


  $('button').on('show.bs.modal', e => {
    var title = $(e.relatedTarget);
    $('#pokemonModalLabel').val(title);
  });


  $('#pokemonModal').modal(function showModalDetail(pokemon) {
    loadDetails(pokemon).then(function () {
      let modalBody = $(".modal-body");
      let content = $("<p></p>");
      let image = $("<img></img>");
      content.text(pokemon.name + "'s height is: " + pokemon.height);
      image.attr("src", pokemon.imageURL);
      modalBody.append(content);
      modalBody.append(image);
    });
  });

  function addModalContent(pokemon) {
    var modalHeader = $('.modal-header');
    var modalTitle = $('<h1></h1>');
    var modalBody = $('.modal-body'); 
    var modalContent = $('<p></p>');
    var modalImg = $('<img></img>');
    modalTitle.addClass("modal-title fs-5");
    modalTitle.text(pokemon.name);
    modalContent.text(pokemon.height);
    modalImg.attr("src", pokemon.detailsUrl);
    modalHeader.append(modalTitle);
    modalBody.append(modalContent); 
    modalBody.append(modalImg);
  }

  function showModalDetail(pokemon) {
    loadDetails(pokemon).then(function () {
      
      let modalBody = $(".modal-body");
      let content = $("<p></p>");
      let image = $("<img></img>");
      content.text(pokemon.name + "'s height is: " + pokemon.height);
      image.attr("src", pokemon.imageURL);
      modalBody.append(content);
      modalBody.append(image);
    });
  }


  function addListItem(pokemon) {
    let pokemonList = $(".list-group");
    let pokemonItem = $("<li></li>");
    let button = $("<button></button>");
    let modalTitle = $(".modal-header");
    let pokemonName = $("<h5></h5>");
    let body = $(".modal-body");
    let height = $("<p></p>");
    let image = $("<img>")
    pokemonItem.addClass("group-list-item");
    pokemonName.addClass("modal-title fs-5")
    button.text(pokemon.name);
    button.attr("type", "button");
    button.addClass("btn btn-dark");
    button.attr("data-bs-toggle", "modal");
    button.attr("data-bs-target", "#pokemonModal");
    height.text(pokemon.height);
    pokemonName.text(pokemon.name);
    image.attr("src", pokemon.imageUrl);
    pokemonItem.append(button);
    pokemonList.append(pokemonItem);
    modalTitle.append(pokemonName);
    body.append(height);
    body.append(image);
  }
