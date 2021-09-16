
import * as selectors from '.';
import { ShoppingListItemModel } from '../models';


describe('The Selector Functions', () => {
  const initialState: selectors.AppState = {
    stores: {
      ids: ['1'],
      entities: { 1: { id: '1', name: 'WalMart' } }
    },
    shoppingList: {
      ids: ['1'],
      entities: { 1: { id: '1', description: 'bread', purchased: true, store: '1' } }
    },
    app: {
      hasError: false
    }
  };
  describe('Selectors Per Branch', () => {

    it('can select the stores', () => {
      const stores = selectors._selectStoresBranch(initialState);
      expect(stores).toEqual(initialState.stores);
    });
    it('can select the shoppingList', () => {
      const shoppingList = selectors._selectShoppingListBranch(initialState);
      expect(shoppingList).toEqual(initialState.shoppingList);
    });

  });

  it('can select a shopping list array', () => {

    const shoppingListArray = selectors._selectShoppListItemArray(initialState);
    expect(shoppingListArray).toEqual([{ id: '1', description: 'bread', purchased: true, store: '1' }]);
  });
  it('can select the store entities', () => {
    const storeEntities = selectors._selectStoresEntities(initialState);
    expect(storeEntities).toEqual({ 1: { id: '1', name: 'WalMart' } });
  });

  it('can give us our shoppingListModel', () => {


    const otherInitialState: selectors.AppState = {
      stores: {
        ids: ['1'],
        entities: { 1: { id: '1', name: 'WalMart' } }
      },
      shoppingList: {
        ids: ['1', '2'],
        entities: {
          1: { id: '1', description: 'bread', purchased: true, store: '1' },
          2: { id: '2', description: 'beer', purchased: false }
        }
      },
      app: {
        hasError: false
      }
    };
    const expected: ShoppingListItemModel[] = [
      { id: '1', description: 'bread', purchased: true, store: 'WalMart' },
      { id: '2', description: 'beer', purchased: false, store: 'Unknown' }
    ];

    const result = selectors.selectShoppingListItemModel(otherInitialState);

    expect(result).toEqual(expected);
  });
});


