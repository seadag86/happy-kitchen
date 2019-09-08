import { IRecipe } from './Recipe/Recipe';

export interface IState {
  recipes: IRecipe[];
  recipesLoading: boolean;
  recipesLoaded: boolean;
  overlayActive: boolean;
}

export interface IAction {
  type: string;
  payload: any;
}

export const initialState: IState = {
  recipes: [],
  recipesLoading: false,
  recipesLoaded: false,
  overlayActive: false
};

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'loadRecipes':
      return { ...state, recipes: [...state.recipes, ...action.payload] };
    case 'toggleOverlay':
      return { ...state, overlayActive: !state.overlayActive };

    default:
      return state;
  }
};
