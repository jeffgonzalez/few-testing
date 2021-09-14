import { Component, OnInit } from '@angular/core';
import { ShoppingListItemModel } from '../../models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  items: ShoppingListItemModel[] = [
    { id: '1', description: 'Bread', purchased: false },
    { id: '2', description: 'Eggs', purchased: true },
    { id: '3', description: 'Beer', store: 'Target', purchased: false }
  ];
  constructor() { }



}
