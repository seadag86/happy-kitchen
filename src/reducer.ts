import { IRecipe } from './Recipe/Recipe';

export interface IState {
  recipeStore: {
    loading: boolean;
    loaded: boolean;
    recipes: IRecipe[];
  };
}

export interface IAction {
  type: string;
  payload: any;
}

export const initialState: IState = {
  recipeStore: {
    loading: false,
    loaded: false,
    recipes: []
  }
};

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'loadRecipe':
      return {};
    case 'createRecipe':
      return {};
    case 'updateRecipe':
      return {};
    case 'removeRecipe':
      return {};

    default:
      return state;
  }
};
