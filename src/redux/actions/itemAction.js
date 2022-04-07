import { SET_ITEMS, DELETE_ITEMS } from '../actionName'
import config from '../../config'
import axios from 'axios'

export const setarticleitems =
  () =>
  async (dispatch) => {
    const { data } = await axios(
      `https://fakestoreapi.com/products`
    )
      dispatch({ type: SET_ITEMS, payload: data })
    
  }
export const deleteitem = (content) => (dispatch) => {
  dispatch({ type: DELETE_ITEMS, payload: content })
}
