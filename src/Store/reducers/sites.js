import { SET_SITE, SET_SITES, SET_CURRENT_PAGE } from '../actionTypes';

const initialState = {
  sites: [],
  site: null,
  currentPage: 0,
};

const sitesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SITES:
      return {
        ...state,
        sites: action.sites
      }
    case SET_SITE:
      return {
        ...state,
        site: action.site
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    default:
      return state
  }
}

export default sitesReducer;
