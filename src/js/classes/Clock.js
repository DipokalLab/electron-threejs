class Clock {
    constructor (self) {
        this.self = self;

    }
    
    init() {


        this.self.clock = new THREE.Clock();

    }
}

export { Clock }