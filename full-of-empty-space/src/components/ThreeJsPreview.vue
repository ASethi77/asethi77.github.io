<template>
    <div>
        <canvas id="canvas-container" :width="canvasWidth" :height="canvasHeight"></canvas>
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import * as THREE from 'three';

export default {
    data() {
        return {}
    },
    props: {
        canvasWidth: Number,
        canvasHeight: Number
    },
    methods: {
        toggleTheme() {
            this.darkTheme = !this.darkTheme

            // This is using a script that is added in index.html
            window.__setPreferredTheme(
                this.darkTheme ? 'dark' : 'light'
            )
        }
    },
    mounted() {
        let canvasElement = this.$el.querySelector("#canvas-container");
        // console.log(this.$el);
        // console.log(canvasElement);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvasElement.width / canvasElement.height, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasElement
        });
        renderer.setSize(canvasElement.width, canvasElement.height);
        // document.body.appendChild(renderer.domElement);
        // canvasElement.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();
    }
}
</script>

<style>
#canvas-container {
    width: 800px;
    height: 800px;
}
</style>
