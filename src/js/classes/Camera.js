class Camera {
    constructor (self) {
        this.self = self;

    }
    
    init() {

        this.self.camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 100 );

    }
}

export { Camera }