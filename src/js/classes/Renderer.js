class Renderer {
    constructor (self) {
        this.self = self;

    }
    
    init() {
        this.self.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.self.renderer.setPixelRatio( window.devicePixelRatio );
        this.self.renderer.setSize( window.innerWidth, window.innerHeight );
        this.self.renderer.outputEncoding = THREE.sRGBEncoding;
        this.self.renderer.shadowMap.enabled = true;

        this.self.container.appendChild( this.self.renderer.domElement );
    }
}

export { Renderer }