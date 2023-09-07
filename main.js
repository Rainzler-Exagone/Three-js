import * as THREE from 'three';
import './style.css';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"


//Scene
const scene = new THREE.Scene()

//Create Our Sphere
const geometry = new THREE.SphereGeometry(3, 64, 64)
const material = new THREE.MeshStandardMaterial({
    color:"#00ff83",
})
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

//Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}


//Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 100)
camera.position.z = 20

scene.add(camera)

//Light
const light = new THREE.DirectionalLight(0xffffff, 1, 100)
light.position.set( 0, 10, 10 );

scene.add(light)

//Renderer
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

//Controls (spin using cursor)
const controls = new OrbitControls(camera, canvas)
controls.enableDamping= true
controls.enablePan= false
controls.enableZoom= false

//Resize
window.addEventListener('resize',()=>{
    //Update sizes
    sizes.width= window.innerWidth
    sizes.height=window.innerHeight
    //Update Camera
    
    camera.aspect = sizes.width/sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
})



const loop = () => {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(loop)
}
loop()