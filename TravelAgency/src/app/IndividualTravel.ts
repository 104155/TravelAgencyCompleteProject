import { Travel } from "../app/Travel";

export class IndividualTravel extends Travel {

    private calcPrice: number;
    private startDate: Date;
    private endDate: Date;
    private duration: number;

    constructor(title: string, destination: string, initialPrice: number, image: string, description: string, calcPrice: number, startDate: Date, endDate: Date, duration: number) {
       super(title, destination, initialPrice, image, description);
       
        this.calcPrice = calcPrice;
        this.startDate = startDate;
        this.endDate = endDate;
        this.duration = duration;
    }

    public getCalcPrice(): number {
        return this.calcPrice;
    }

    public setCalcPrice(calcPrice: number): void {
        this.calcPrice = calcPrice;
    }

    public getStartDate(): Date {
        return this.startDate;
    }

    public setStartDate(startDate: Date): void {
        this.startDate = startDate;
    }

    public getEndDate(): Date {
        return this.endDate;
    }

    public setEndDate(endDate: Date): void {
        this.endDate = endDate;
    }

    public getDuration(): number {
        return this.duration;
    }

    public setDuration(duration: number): void {
        this.duration = duration;
    }
}