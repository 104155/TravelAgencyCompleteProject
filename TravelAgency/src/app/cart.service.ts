import { Injectable } from '@angular/core';
import { Travel } from "../app/Travel";
import { IndividualTravel } from "../app/IndividualTravel";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Array<IndividualTravel> = [];
  private total: number;
  private discountTxt: string;

  constructor() {
    this.calcTotal();
    this.total = 0;
    this.discountTxt = "";
  }

  calcTravelPrice(travel: Travel, numberofStays: number): number {
    let initialPrice = travel.getInitialPrice();
    let endPrice = initialPrice * numberofStays;
    return endPrice;
  }

  addToCart(product: IndividualTravel) {
    this.cartItems.push(product);
  }

  removeFromCart(product: IndividualTravel): void {
    let itemDeleted: boolean = false;
    let newShoppingCart: IndividualTravel[] = []
    for (let item of this.cartItems) {
      if (item.getTitle == product.getTitle && !itemDeleted) {
        itemDeleted = true; //items with same name should not be deleted twice 
        continue; //item is deleted by not adding it to the new array
      } else {
        newShoppingCart.push(item);
      }
    }
    this.cartItems = newShoppingCart;
  }

  getItems(): Array<IndividualTravel> {
    return this.cartItems;
  }

  itemsLength(): number {
    return this.cartItems.length;
  }

  clearCart(): Array<IndividualTravel> {
    this.cartItems = [];
    this.discountTxt = "";
    return this.cartItems;
  }

  calcTotal(): void {
    let sum: number = 0;
    let discount10: number = 0.9;
    let discount20: number = 0.8;

    //reset display discount and total
    this.total = 0;
    this.discountTxt = "";

    //no calculation if item length is zero
    if (this.cartItems.length == 0) {
      return;
    }
    //sum items
    for (let individualTravel of this.cartItems) {
      sum += individualTravel.getCalcPrice();
    }
    //add discount
    if (sum > 500) {
      sum *= discount20;
      this.discountTxt = "-20%";
    } else if (sum > 200) {
      sum *= discount10;
      this.discountTxt = "-10%";
    }
    this.total = sum;
  }

  getTotal(): number {
    return this.total;
  }

  getDiscountTxt(): string {
    return this.discountTxt;
  }
}
