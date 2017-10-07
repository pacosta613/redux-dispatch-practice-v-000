export let state;


export function managePets(state, action){

  switch (action.type) {
    case "ADD_PET":
      return { pets: state.pets.filter( pet => pet.id !== action.id) }
    default:

  }

}

export function dispatch(){
}

export function render(){

}
