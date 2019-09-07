import { IRecipe } from './Recipe/Recipe';

export interface IState {
  recipes: IRecipe[];
}

export interface IAction {
  type: string;
  payload: any;
}

export const initialState: IState = {
  recipes: []
};

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'loadRecipes':
      return { ...state, recipes: [...state.recipes, ...action.payload] };

    default:
      return state;
  }
};
