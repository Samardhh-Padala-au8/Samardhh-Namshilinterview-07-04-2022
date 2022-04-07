import { SET_ITEMS, DELETE_ITEMS } from '../actionName'

const astate = {
  items: null,
}

export const articleReducer = (state = astate, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_ITEMS:
      return { ...state, items: payload }
    default:
      return state
  }
}
