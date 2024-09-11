import * as THREE from 'three';
import { Dimensions, Size } from '../types/types';
import Media from './media';

export default class Canvas {
  element: HTMLCanvasElement;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  sizes: Size;
  dimensions: Dimensions;
  time: number;
  clock: THREE.Clock;
  medias: Media[];

  constructor() {
    this.element = document.getElementById('webgl') as HTMLCanvasElement;
    this.time = 0;
    this.medias = [];
    this.createClock();
    this.createScene();
    this.createCamera();
    this.createRenderer();
    this.setSizes();
    this.addEventListeners();
    this.createMedias();
    this.animate();
  }

  createClock() {
    this.clock = new THREE.Clock();
  }

  createScene() {
    this.scene = new THREE.Scene();
  }

  createCamera() {
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    this.scene.add(this.camera);
    this.camera.position.z = 10;
  }

  createRenderer() {
    this.dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
      pixelRatio: Math.min(2, window.devicePixelRatio),
    };

    this.renderer = new THREE.WebGLRenderer({ canvas: this.element, alpha: true });
    this.renderer.setSize(this.dimensions.width, this.dimensions.height);
    this.renderer.setPixelRatio(this.dimensions.pixelRatio);
  }

  setSizes() {
    let fov = this.camera.fov * (Math.PI / 180);
    let height = this.camera.position.z * Math.tan(fov / 2) * 2;
    let width = height * this.camera.aspect;

    this.sizes = {
      width: width,
      height: height,
    };
  }

  addEventListeners() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize() {
    this.dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
      pixelRatio: Math.min(2, window.devicePixelRatio),
    };

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.setSizes();

    this.renderer.setPixelRatio(this.dimensions.pixelRatio);
    this.renderer.setSize(this.dimensions.width, this.dimensions.height);

    this.medias.forEach((media) => {
      media.onResize(this.sizes);
    });
  }

  createMedias() {
    const images = document.querySelectorAll('img');
    const promises = Array.from(images).map((image: HTMLImageElement) => {
      return new Promise<void>((resolve) => {
        if (image.complete) {
          resolve();
        } else {
          image.addEventListener('load', () => resolve());
          image.addEventListener('error', () => resolve());
        }
      }).then(() => {
        const media = new Media({
          element: image,
          scene: this.scene,
          sizes: this.sizes,
        });
        media.updateScroll(window.scrollY);
        this.medias.push(media);
      });
    });

    Promise.all(promises).then(() => {
      // All media initialized
    });
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.render(window.scrollY);
  }

  render(scroll: number) {
    this.time = this.clock.getElapsedTime();

    this.medias.forEach((media) => {
      media.updateScroll(scroll);
    });

    this.renderer.render(this.scene, this.camera);
  }
}