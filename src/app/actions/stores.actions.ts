import { createAction, props } from "@ngrx/store";
import { StoreEntity } from "../reducers/stores.reducer";

// Command - "Do This Thing"
export const loadStores = createAction(
  '[stores] load stores'
);

export const loadStoresSucceeded = createAction(
  '[stores] loading the stores succeeded',
  props<{ payload: StoreEntity[] }>()
);

export const loadStoresFailed = createAction(
  '[stores] loading the stores failed',
  props<{ payload: string }>()
);
