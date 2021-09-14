import { ActionReducerMap } from "@ngrx/store";
import * as fromStores from './stores.reducer';
import * as fromShoppingList from './shopping-list.reducer';

export interface AppState {
  stores: fromStores.StoreState,
  shoppingList: fromShoppingList.ShoppingState
}

export const reducers: ActionReducerMap<AppState> = {
  stores: fromStores.reducer,
  shoppingList: fromShoppingList.reducer
}
