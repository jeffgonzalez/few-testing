import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ShoppingEntity } from "../reducers/shopping-list.reducer";
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";

@Injectable()
export class ShoppingListDataService {

  readonly baseUrl = environment.apiUrl;

  constructor(private client: HttpClient) { }

  markItemAsPurchased(item: ShoppingEntity) {
    return this.client.post(this.baseUrl + '/shopping-items/purchased', item);
  }

  getShoppingList(): Observable<ShoppingEntity[]> {
    return this.client.get<GetShoppingResponse>(this.baseUrl + '/shopping-items')
      .pipe(
        map(response => response.data)
      )
  }
}

interface GetShoppingResponse {
  data: ShoppingEntity[],

}
