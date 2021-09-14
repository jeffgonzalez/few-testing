import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';

export interface StoreEntity {
  id: string;
  name: string;
}

export interface StoreState extends EntityState<StoreEntity> {

}

export const adapter = createEntityAdapter<StoreEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: StoreState = initialState, action: Action): StoreState {
  return reducerFunction(state, action);
}



