import * as types from '../actionTypes';

export const toggleMenu = () =>   ({ type: types.TOGGLE_MENU });

export const setSite = site => ({type: types.SET_SITE, site });

export const setSites = sites => ({type: types.SET_SITES, sites});

export const setCurrentPage = currentPage => ({type: types.SET_CURRENT_PAGE, currentPage})