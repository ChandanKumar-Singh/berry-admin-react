// project imports
import config from 'config';

// action - state management
import * as actionTypes from './actions';
import { minAppBarHeight } from './constant';

export const initialState = {
  isOpen: [], // for active default menu
  defaultId: '/',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true,
  appBarHeight: minAppBarHeight,
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action) => {
  let id;
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id]
      };
    case actionTypes.SET_APPBAR_HIEGHT:
      return {
        ...state,
        appBarHeight: action.appBarHeight
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened
      };
    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily
      };
    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius
      };
    default:
      return state;
  }
};

export default customizationReducer;
