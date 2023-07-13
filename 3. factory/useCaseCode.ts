// The Factory Concept

type dimension = {
    height: number;
    width: number;
    length: number;
}

// 2. Product Interface
interface IChair {
    height: number;
    width: number;
    length: number;
    getDimensions(): dimension;
}

// 4. Concrete Product
class Chair implements IChair {
    height=0;
    width=0;
    length=0;
    getDimensions(): dimension {
        return {
            height: this.height,
            width: this.width,
            length: this.length
        }
    }
}

class smallChair extends Chair {
    constructor() {
        super()
        this.height = 10;
        this.width = 10;
        this.length = 10;
    }
}

class midChair extends Chair {
    constructor() {
        super()
        this.height = 20;
        this.width = 20;
        this.length = 20;
    }
}

class bigChair extends Chair {
    constructor() {
        super()
        this.height = 30;
        this.width = 30;
        this.length = 30;
    }
}


// 3. Creator
class chairFactory {
    static getChair(chair: string): IChair {
        if (chair === 'bigChair') {
            return new bigChair()
        } else if (chair === 'smallChair') {
            return new smallChair()
        } else {
            return new midChair()
        }
    }
}

// The Client 
// 1. Concrete Creator
const chair = chairFactory.getChair('bigChair');
console.log(chair.getDimensions())