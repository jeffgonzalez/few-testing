import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectShoppingListItemModel } from 'src/app/reducers';
import { ShoppingListItemModel } from '../../models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items$!: Observable<ShoppingListItemModel[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.items$ = this.store.select(selectShoppingListItemModel);
  }



}
