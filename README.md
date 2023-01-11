# Pokemon List Application

## Overview

The Pokemon List app is a javascript app utilizing the bootstrap framework and the [pokeAPI](https://pokeapi.co). The application calls the pokeAPI to display pokemon names in a list and upon selection will display the pokemon's height and image details in a modal. 

## APIs 

1. [pokeAPI](https://pokeapi.co)
    * The `loadList` and `loadDetials` functions call the pokeAPI to get the pokemon information. The app relies on the [bootstrap fade modal](https://getbootstrap.com/docs/5.3/components/modal/#live-demo) to display the pokemon details.

## Dependencies 

### Polyfills 
* [Promise](https://raw.githubusercontent.com/taylorhakes/promise-polyfill/master/dist/polyfill.min.js)
* [Fetch](https://github.com/github/fetch)

### Frameworks 
* [Bootstrap 5](https://getbootstrap.com/docs/5.3/getting-started/introduction/)



