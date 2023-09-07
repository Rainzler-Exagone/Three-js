import * as THREE from 'three';


//Scene
const scene = new THREE.Scene()

//Create Our Sphere
const geometry = new THREE.SphereGeometry(3, 64, 64)
const material = new THREE.MeshStandardMaterial({
    color:"#00ff83",
})
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)


//Camera
const camera = new THREE.PerspectiveCamera(45, 800/600)
camera.position.z = 20

scene.add(camera)

//Light
const light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set( 0, 10, 10 );

scene.add(light)

//Renderer
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(800, 600)
renderer.render(scene, camera)