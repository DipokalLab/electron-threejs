
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';

class Camera {
    constructor (self) {
        this.self = self;

    }
    
    init() {

        this.self.camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 100 );
        this.self.camera.position.set( 400, 200, 0 );




    }

    controls(is_allow) {
        this.self.controls.movement = is_allow

        if (is_allow == true) {
            this.self.controls = new OrbitControls( this.self.camera, this.self.renderer.domElement );


            this.self.controls.enableDamping = true;
            this.self.controls.dampingFactor = 0.05;
    
            this.self.controls.screenSpacePanning = false;
    
            this.self.controls.minDistance = 100;
            this.self.controls.maxDistance = 500;
    
            this.self.controls.maxPolarAngle = Math.PI / 2;
        }


    }
}

export { Camera }