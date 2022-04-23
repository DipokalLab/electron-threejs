class Scene {
    constructor (self) {
        this.self = self;

    }
    
    init() {

        this.self.scene = new THREE.Scene();
        this.self.scene.background = new THREE.Color( 0xa0a0a0 );
        this.self.scene.fog = new THREE.Fog( 0xa0a0a0, 10, 50 );


    }

    animate() {
        requestAnimationFrame( this.animate.bind(this) );
 
        const mixerUpdateDelta = this.self.clock.getDelta();


        this.self.renderer.render( this.self.scene, this.self.camera );
    }
}

export { Scene }