import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ShoppingListDataService } from "../services/shopping-list-data.service";
import * as actions from '../actions/shopping-list.actions';
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { applicationError } from "../actions/app.actions";

@Injectable()
export class ShoppingItemsEffects {

  markItemAsPurchased = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.markPurchased),
      map(a => a.payload), // action -> payload ShoppingEntity
      tap(a => console.log(` about to mark ${a.id} purchased`)), // ShoppingEntity -> ShoppingEntity
      mergeMap((payload) => this.service.markItemAsPurchased(payload))
    )
    , { dispatch: false }
  );

  loadShoppingItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadShoppingList),
      mergeMap(() => this.service.getShoppingList()
        .pipe(
          map(payload => actions.loadShoppingListSucceeded({ payload })),
          catchError(err => of(applicationError({ source: 'Shopping', message: 'The API Seems Like It Down. Bummer!' })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: ShoppingListDataService) { }
}
