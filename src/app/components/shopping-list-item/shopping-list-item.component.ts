import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListItemModel } from 'src/app/models';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent {

  @Input() item!: ShoppingListItemModel;
  constructor() { }


}
