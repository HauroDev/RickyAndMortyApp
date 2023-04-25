import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types"
import axios from "axios"

export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav'
  return async (dispatch) => {
    const response = await axios.post(endpoint, character)
    const { data } = response
    return dispatch({
      type: ADD_FAV,
      payload: data
    })
  }
}

export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id
  return async (dispatch) => {
    const response = await axios.delete(endpoint)
    const { data } = response
    return dispatch({
      type: REMOVE_FAV,
      payload: data,
    })
  }
}

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender
  }
}

export const orderCards = (orderType) => {
  return {
    type: ORDER,
    payload: orderType
  }
}

