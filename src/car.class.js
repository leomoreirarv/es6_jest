jest.mock("./vehicle.class");

import Vehicle from "./vehicle.class";

export default class Car extends Vehicle {
    constructor(){
        super();
    }

    move(){
        super.move();
    }
}