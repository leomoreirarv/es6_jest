import Car from "./car.class";
import Vehicle from './vehicle.class';

describe('Car testing', () => {
    let car;

    beforeEach(() => {
        car = new Car();
    });

    test("Object car must be truthy", () => {
        expect(car).toBeTruthy();
    });

    test("Car is a instance of Vehicle", () => {
        expect(car instanceof Vehicle).toBeTruthy();
    });

    test("Car is a instance of Vehicle", () => {
        const vehicleMove = jest.spyOn(Vehicle.prototype, "move");
        car.move();
        expect(vehicleMove).toHaveBeenCalled();
    });
});