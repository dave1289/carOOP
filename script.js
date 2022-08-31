class Vehicle{
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }
    honk(){
        console.log('beep beep')
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
    super(make, model, year)
    this.numWheels = 4
}
}

class Motorcyle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year)
        this.numWheels = 2
    }
    revEngine(){
        return 'VROOOOM'
    }
}

class Garage{
    constructor(capacity){
        this.vehicles = []
        this.capacity = capacity
    }
    add(vehicle){
        if (!(vehicle instanceof Vehicle)){
            throw new Error('Only vehicles allowed here!')
        }
        if (this.vehicles.lenght >= this.capacity){
            return 'Sorry, all full!'
        }
        this.vehicles.push(vehicle);
    }
}