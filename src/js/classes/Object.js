class Object {
    constructor (self) {
        this.self = self;

    }
    
    add() {

        const geometry1 = new THREE.BoxGeometry( 1, 1, 1 );
        const material1 = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
        const cube1 = new THREE.Mesh( geometry1, material1 );
        this.self.scene.add( cube1 );
    }
}

export { Object }