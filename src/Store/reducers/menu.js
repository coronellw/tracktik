import { TOGGLE_MENU } from '../actionTypes';

const initialState = {
  isOpen: false
}

const menu = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { isOpen: !state.isOpen };
    default:
      return state;
  }
}

export default menu;
