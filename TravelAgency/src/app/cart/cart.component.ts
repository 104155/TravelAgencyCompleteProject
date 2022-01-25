import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IndividualTravel } from "../IndividualTravel";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: Array<IndividualTravel> = [];
  checkoutForm;
  total: number;
  discountTxt: string;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['',[Validators.required, Validators.email]]
    });
    this.total = 0;
    this.discountTxt = "";
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.cartService.calcTotal();
    this.total = this.cartService.getTotal();
    this.discountTxt = this.cartService.getDiscountTxt();
  }

  //clear display after checkout
  clearPriceDiscount(): void {
    this.total = 0;
    this.discountTxt = "";
  }

  // Process checkout data here
  checkOut(formData: FormGroup) {
    //abort if cart is empty
    if (this.cartService.itemsLength() == 0) {
      window.alert("Your cart is empty, please check our offers.");
      return;
    } else if (this.checkoutForm.invalid) {
      window.alert("Please enter your name and email.");
      return;
    } else {
      window.alert('Your order has been submitted');
      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();
      this.clearPriceDiscount();
    }
  }

  removeFromCart(travel: IndividualTravel): void {
    this.cartService.removeFromCart(travel);
    this.items = this.cartService.getItems();
    this.cartService.calcTotal(); //recalculate total
    this.total = this.cartService.getTotal(); //update total
    this.discountTxt = this.cartService.getDiscountTxt(); //update discount
  }
}