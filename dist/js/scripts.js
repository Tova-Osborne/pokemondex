let pokemonRepository = (function () {
  let t = [];
  function e(e) {
    t.push(e);
  }
  function n() {
    return t;
  }
  function i(t) {
    return fetch(t.detailsUrl)
      .then(function (t) {
        return t.json();
      })
      .then(function (e) {
        (t.imageURL = e.sprites.front_default),
          (t.height = e.height),
          (t.types = e.types);
      })
      .catch(function (t) {
        console.log(t);
      });
  }
  function o(t) {
    i(t).then(function () {
      var e, n, i;
      let o;
      (e = t.name),
        (n = t.name + "'s height is: " + t.height),
        (i = t.imageURL),
        (document.querySelector(".modal-title").innerText = e),
        (document.querySelector("p").innerText = n),
        (o = document.querySelector("img")).setAttribute("src", i),
        o.setAttribute("alt", "Pokemon image"),
        o.setAttribute("width", 150),
        o.setAttribute("height", 150);
    });
  }
  return {
    add: e,
    getAll: n,
    addListItem: function t(e) {
      let n = document.querySelector(".list-group"),
        i = document.createElement("li"),
        r = document.createElement("button");
      (r.innerText = e.name),
        r.classList.add("group-list-item"),
        r.setAttribute("type", "button"),
        r.classList.add("btn"),
        r.classList.add("btn-dark"),
        r.setAttribute("data-bs-toggle", "modal"),
        r.setAttribute("data-bs-target", "#pokemonModal"),
        r.addEventListener("click", (t) => o(e)),
        i.appendChild(r),
        n.appendChild(i);
    },
    loadList: function t() {
      return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
        .then(function (t) {
          return t.json();
        })
        .then(function (t) {
          t.results.forEach(function (t) {
            e({ name: t.name, detailsUrl: t.url });
          });
        })
        .catch(function (t) {
          console.error(t);
        });
    },
    loadDetails: i,
    showDetails: o,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (t) {
    pokemonRepository.addListItem(t);
  });
});
