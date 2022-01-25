import { Injectable } from '@angular/core';
import data from '../assets/json/travelOffers.json';
import { Travel } from "../app/Travel";
import { IndividualTravel } from "../app/IndividualTravel";
import { FormGroup } from "@angular/forms";
import { CartService } from "../app/cart.service";

@Injectable({
  providedIn: 'root'
})
export class TravelsService {
  travelList: Array<Travel>;
  individualTravelList: Array<IndividualTravel> = [];

  constructor(private cartService: CartService) {
    this.travelList = this.setTravelList();
  }

  //convert json obj to array of initial travel objs
  setTravelList(): Array<Travel> {
    let arr: Array<Travel> = [];
    for (let obj of data) {
      arr.push(new Travel(obj.title, obj.destination, obj.price, obj.image, obj.description));
    }
    return arr;
  }

  //set dates in travel objs
  populateIndividualTravelList(formInput: FormGroup): void {
    console.log("populateIndividualTravelList says hi");

    let startDateArr: string[] = formInput.value.startDate.split(".");
    let endDateArr: string[] = formInput.value.endDate.split(".");

    let newStartDate: string = [startDateArr[1], startDateArr[0], startDateArr[2]].join("/");
    let newEndDate: string = [endDateArr[1], endDateArr[0], endDateArr[2]].join("/");

    let startDate: Date = new Date(newStartDate);
    let endDate: Date = new Date(newEndDate);
    let duration: number;

    // To calculate the time difference of two dates
    let timeDiff = endDate.getTime() - startDate.getTime();
    // To calculate the no. of days between two dates
    duration = timeDiff / (1000 * 3600 * 24);

    console.log("dateCalculation says hi");

    for (let travelCard of this.travelList) {
      // console.log("forloop says hi");
      // console.log(formInput);
      // console.log("cartservice calctravelprice: " + this.cartService.calcTravelPrice(travelCard, duration));

      this.individualTravelList.push(new IndividualTravel(travelCard.getTitle(), travelCard.getDestination(),
        travelCard.getInitialPrice(), travelCard.getImage(), travelCard.getDescription(),
        this.cartService.calcTravelPrice(travelCard, duration),
        startDate, endDate, duration));
    }
  }

  deleteTravelList(): Array<IndividualTravel> {
    this.individualTravelList = [];
    return this.individualTravelList;
  }

  getTravelList(): Array<Travel> {
    return this.travelList;
  }

  getIndividualTravelList(): Array<IndividualTravel> {
    console.log("individual travel list: " + this.individualTravelList);
    return this.individualTravelList;
  }

  // setIndividualTravelListPrices(): void {
  //   for (let index in this.travelList) {
  //     let initialTravel = this.travelList[index];
  //     let travel = this.travelList[index];
  //     travel.setPrice(this.cartService.calcTravelPrice(initialTravel, travel));
  //   }
  // }
}




