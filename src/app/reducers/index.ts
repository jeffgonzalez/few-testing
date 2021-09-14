import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as fromStores from './stores.reducer';
import * as fromShoppingList from './shopping-list.reducer';
import { ShoppingListItemModel } from "../models";

export interface AppState {
  stores: fromStores.StoreState,
  shoppingList: fromShoppingList.ShoppingState
}

export const reducers: ActionReducerMap<AppState> = {
  stores: fromStores.reducer,
  shoppingList: fromShoppingList.reducer
}

// Selector function per branch
export const _selectStoresBranch = (state: AppState) => state.stores;
export const _selectShoppingListBranch = (state: AppState) => state.shoppingList;

export const { selectAll: _selectShoppListItemArray } = fromShoppingList.adapter.getSelectors(_selectShoppingListBranch);
export const { selectEntities: _selectStoresEntities } = fromStores.adapter.getSelectors(_selectStoresBranch);



// TODO: Need a selector that returns an array of ShoppingListItemModel[]
export const selectShoppingListItemModel = createSelector(
  _selectShoppListItemArray,
  _selectStoresEntities,
  (items, stores) => {
    return items.map(item => ({
      ...item,
      store: item.store ? stores[item.store]?.name : 'Unknown'
    } as ShoppingListItemModel))
  }
)
