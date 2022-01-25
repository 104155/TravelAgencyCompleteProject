import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";

@Component({
  selector: 'myHeader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartItems: number;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.itemsLength();
   }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.cartItems = this.cartService.itemsLength();
    this.toggleCartButton();
  }

  toggleCartButton(): void {
    let itemsInCart: number = this.cartService.itemsLength();
    let btnElement: any = document.querySelector(".cartContainer"); //any because it might be null

    if(itemsInCart != 0) {
      btnElement.style.display = "block";
    } else {
      btnElement.style.display = "none";
    }
  }
}
