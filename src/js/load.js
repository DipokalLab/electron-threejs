import { Camera } from "./classes/Camera.js"
import { Scene } from "./classes/Scene.js"
import { Clock } from "./classes/Clock.js"
import { Light } from "./classes/Light.js"
import { Renderer } from "./classes/Renderer.js"
import { Object } from "./classes/Object.js"

class App {
    constructor () {
        this.class = {
            scene: new Scene(this),
            camera: new Camera(this),
            clock: new Clock(this),
            light: new Light(this),
    
            renderer: new Renderer(this),
            object: new Object(this)
        }

        this.scene;
        this.camera;
        this.clock;
        this.light;

        this.renderer;
        this.object;
        this.stats;
        this.loader;
        this.controls = {};


        this.container = document.getElementById( 'app' );

    }

    init() {
        this.class.clock.init()

        this.class.scene.init()
        this.class.light.init()
        this.class.renderer.init()


        this.class.object.add()

        this.class.camera.init()

        this.class.camera.controls(true)

        this.class.scene.animate()


        console.log('loaded', this)
    }
}

export { App }