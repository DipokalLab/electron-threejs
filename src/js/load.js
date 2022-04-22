import { Camera } from "./classes/Camera.js"
import { Scene } from "./classes/Scene.js"
import { Clock } from "./classes/Clock.js"
import { Light } from "./classes/Light.js"
import { Renderer } from "./classes/Renderer.js"

class App {
    constructor () {
        this.scene = new Scene(this);
        this.camera = new Camera(this);
        this.clock = new Clock(this);
        this.light = new Light(this);

        this.renderer = new Renderer(this);
        this.stats;
        this.loader;

        this.container = document.getElementById( 'app' );

    }

    init() {
        this.scene.init()
        this.camera.init()
        this.clock.init()
        this.light.init()
        this.renderer.init()

        console.log('loaded')
    }
}

export { App }