export class Travel {
    protected title: string;
    protected destination: string;
    protected initialPrice: number;
    protected image: string;
    protected description: string;

    constructor(title: string, destination: string, initialPrice: number, image: string, description: string) {
        this.title = title;
        this.destination = destination;
        this.initialPrice = initialPrice;
        this.image = image;
        this.description = description;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDestination(): string {
        return this.destination;
    }

    public getInitialPrice(): number {
        return this.initialPrice;
    }

    public getImage(): string {
        return this.image;
    }

    public getDescription(): string {
        return this.description;
    }
}