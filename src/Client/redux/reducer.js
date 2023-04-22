import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharactersFav: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
    case REMOVE_FAV:
      return { ...state, allCharactersFav: action.payload, myFavorites: action.payload }
    case FILTER:
      const filteredCharactersFav = state.allCharactersFav.filter(
        character => action.payload !== 'All' ? character.gender === action.payload : true);
      return {
        ...state,
        myFavorites: filteredCharactersFav
      }
    case ORDER:
      const sortCharactersFav = [...state.myFavorites]
        .sort((a, b) => {
          switch (action.payload.toUpperCase()) {
            case 'A': return a.id - b.id;
            case 'D': return b.id - a.id;
            default: return 0;
          }
        })
      return {
        ...state,
        myFavorites: sortCharactersFav
      }
    default:
      return { ...state };
  }
};

export default reducer;