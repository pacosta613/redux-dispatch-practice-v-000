export let state;


export function managePets(state, action){

  switch (action.type) {
    case "ADD_PET":
      return { pets: [...state.pets, action.pets] };
    default:
      return state;
  }

}

export function dispatch(){
}

export function render(){

}
