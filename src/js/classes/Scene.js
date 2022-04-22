class Scene {
    constructor (self) {
        this.self = self;

    }
    
    init() {

        this.self.scene = new THREE.Scene();
        this.self.scene.background = new THREE.Color( 0xa0a0a0 );
        this.self.scene.fog = new THREE.Fog( 0xa0a0a0, 10, 50 );


    }
}

export { Scene }