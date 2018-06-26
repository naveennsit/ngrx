import {ADD_NAME, DELETE_NAME, EDIT_NAME, ListManagement} from './home-list.actions';

export interface HomeListInterface {
  names: Array<string>;
}

const initialValue: HomeListInterface = {
  names: ['test1']
};


export function homeListReducer(state = initialValue, action: ListManagement) {
  switch (action.type) {
    case ADD_NAME :
      const outArray = [...state.names, action.payload];
      return {
        ...state,
        names: outArray
      };

    case DELETE_NAME :
      const copyArray = [...state.names];
      copyArray.splice(action.payload,1);
      return {
        ...state,
        names: copyArray
      };

    case EDIT_NAME :
      const newArray = [...state.names];
      newArray[action.payload.index] = action.payload.name;
      return {
        ...state,
        names: newArray
      };

    default :
      return state;
  }
}
