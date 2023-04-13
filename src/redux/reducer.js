import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharactersFav: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        allCharactersFav: [...state.allCharactersFav, action.payload],
        myFavorites: [...state.allCharactersFav, action.payload]
      }
    case REMOVE_FAV:
      const newFavorites = state.myFavorites.filter(character => character.id !== action.payload);
      return {
        ...state,
        myFavorites: newFavorites,
        allCharactersFav: newFavorites
      }
    case FILTER:
      const filteredCharactersFav = state.allCharactersFav.filter(
        character => action.payload !== 'All' ? character.gender === action.payload : true);
      return {
        ...state,
        myFavorites: filteredCharactersFav
      }
    case ORDER:
      const sortCharactersFav = [...state.allCharactersFav]
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