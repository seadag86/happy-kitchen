import { IRecipe } from "./Recipe/Recipe";
import { filters, IFilter } from "./data";

export interface IAction {
  type: string;
  payload: any;
}

export interface IState {
  recipes: IRecipe[];
  recipesLoading: boolean;
  recipesLoaded: boolean;
  overlayActive: boolean;
  searchActive: boolean;
  searchQuery: string;
  filterActive: boolean;
  filterChoices: IFilter[];
}

export const initialState: IState = {
  recipes: [],
  recipesLoading: false,
  recipesLoaded: false,
  overlayActive: false,
  searchActive: false,
  searchQuery: "",
  filterActive: false,
  filterChoices: filters,
};

export const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "loadRecipes":
      return { ...state, recipes: action.payload };
    case "toggleOverlay":
      return { ...state, overlayActive: action.payload };
    case "toggleSearch":
      return { ...state, searchActive: action.payload };
    case "submitSearch":
      return { ...state, searchQuery: action.payload };
    case "toggleFilter":
      return { ...state, filterActive: action.payload };
    case "submitFilters":
      return { ...state, filterChoices: state.filterChoices };

    default:
      return state;
  }
};
