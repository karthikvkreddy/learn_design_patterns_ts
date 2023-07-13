// The Factory Concept

// 2. Product Interface
interface IProduct {
    name: string
}

// 4. Concrete Product
class ConcreteProduct implements IProduct {
    name = ''
}

class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductA'
    }
}

class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductB'
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductC'
    }
}

// 3. Creator
class Creator {
    static createObject(someProperty: string): IProduct {
        if (someProperty === 'a') {
            return new ConcreteProductA()
        } else if (someProperty === 'b') {
            return new ConcreteProductB()
        } else {
            return new ConcreteProductC()
        }
    }
}

// The Client 
// 1. Concrete Creator
const PRODUCT = Creator.createObject('b')
const PRODUCT2 = Creator.createObject('c')
console.log(PRODUCT.name)
console.log(PRODUCT2.name)