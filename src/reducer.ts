import { IRecipe } from "./Recipe/Recipe";

export interface IState {
  recipes: IRecipe[];
  recipesLoading: boolean;
  recipesLoaded: boolean;
  overlayActive: boolean;
  searchQuery: string;
  filterChoices: string[];
}

export interface IAction {
  type: string;
  payload: any;
}

export const initialState: IState = {
  recipes: [],
  recipesLoading: false,
  recipesLoaded: false,
  overlayActive: false,
  searchQuery: "",
  filterChoices: []
};

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "loadRecipes":
      return { ...state, recipes: action.payload };
    case "toggleOverlay":
      return { ...state, overlayActive: !state.overlayActive };
    case "submitSearch":
      console.log(action.payload);
      return { ...state, searchQuery: action.payload };
    case "submitFilters":
      return { ...state, filterChoices: state.filterChoices };

    default:
      return state;
  }
};
