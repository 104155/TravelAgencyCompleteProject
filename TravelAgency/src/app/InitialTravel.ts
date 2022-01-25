export class InitialTravel {
    private title: string;
    private destination: string;
    private price: number;
    private image: string;
    private description: string;

    constructor(title: string, destination: string, price: number, image: string, description: string) {
        this.title = title;
        this.destination = destination;
        this.price = price;
        this.image = image;
        this.description = description;
    }

    getTitle(): string {
        return this.title;
    }

    getDestination(): string {
        return this.destination;
    }

    getPrice(): number {
        return this.price;
    }

    getImage(): string {
        return this.image;
    }

    getDescription(): string {
        return this.description;
    }
}