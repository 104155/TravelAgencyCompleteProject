import { Component, OnInit } from '@angular/core';
import { Travel } from "../Travel";
import { IndividualTravel } from "../IndividualTravel";
import { TravelsService } from "../travels.service";
import { CartService } from "../cart.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {
  travelList: Array<Travel>;
  formData: FormGroup;
  individualTravelList: Array<IndividualTravel> = [];

  constructor(private travelService: TravelsService, private cartService: CartService, private form: FormBuilder) {
    this.travelList = this.travelService.getTravelList();
    this.formData = this.form.group({
      startDate: ['', [Validators.required, Validators.minLength(8)]],
      endDate: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

  calcPrices(): void {
    // console.log("calcPrices says hi");
    if (this.formData.valid) {
      // console.log("formdata valid");
      this.individualTravelList = this.travelService.deleteTravelList();

      this.travelService.populateIndividualTravelList(this.formData);
      this.individualTravelList = this.travelService.getIndividualTravelList();
      this.formData.reset();
    } else {
      window.alert("Please enter start and end dates!");
    }
  }

  addToCart(individualTravel: IndividualTravel): void {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(individualTravel);
  }

  wrongTravel(): void {
    window.alert('Please enter your travel dates!');
  }
}
