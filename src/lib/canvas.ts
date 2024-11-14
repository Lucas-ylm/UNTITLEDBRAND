/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import * as THREE from 'three';
// @ts-expect-error filepath is correct but for some reason there is an error
import { type Dimensions, type Size } from '../types/types';
import Media from './media';
import type Scroll from './scroll';

export default class Canvas {
  element: HTMLCanvasElement;
  scene: THREE.Scene | undefined;
  camera: THREE.PerspectiveCamera | undefined;
  renderer: THREE.WebGLRenderer | undefined;
  sizes: Size;
  dimensions: Dimensions;
  time: number;
  clock: THREE.Clock | undefined;
  medias: Media[];
  scroll: Scroll;

  constructor(scroll: Scroll) {
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

    this.scroll = scroll;
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
    if (this.scene) {
      this.scene.add(this.camera);
    }
    this.camera.position.z = 10;
  }

  createRenderer() {
    this.dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
      pixelRatio: Math.min(2, window.devicePixelRatio),
    };

    this.renderer = new THREE.WebGLRenderer({ canvas: this.element, alpha: true, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(this.dimensions.width, this.dimensions.height);
    if (this.renderer) {
      if (this.renderer) {
        if (this.renderer) {
          if (this.renderer) {
            this.renderer.setPixelRatio(this.dimensions.pixelRatio);
          }
        }
      }
    }
  }

  setSizes() {
    if (!this.camera) return;

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

    if (this.camera) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    }
    this.setSizes();
    // @ts-expect-error undefined because it's not initialized
    this.renderer.setPixelRatio(this.dimensions.pixelRatio);
    // @ts-expect-error undefined because it's not initialized
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
        if (this.scene) {
          const media = new Media({
            element: image,
            scene: this.scene,
            sizes: this.sizes,
          });
          media.updateScroll(window.scrollY);
          this.medias.push(media);
        }
      });
    });

    Promise.all(promises).then(() => {
      // All media initialized
    });
  }

  animate() {
    const animateLoop = () => {
      this.render(this.scroll.getScroll());
      requestAnimationFrame(animateLoop);
    };
    animateLoop();
  }

  render(scroll: number) {
    if (this.clock) {
      this.time = this.clock.getElapsedTime();
    }
    this.medias.forEach((media) => {
      media.updateScroll(scroll);
    });
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
}