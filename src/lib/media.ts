/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// @ts-expect-error filepath is correct but for some reason there is an error
import { type Position, type Size } from '../types/types';
import * as THREE from 'three';
import gsap from 'gsap';
// @ts-expect-error undefined because it's not initialized
import vertexShader from '@/shaders/imageReveal/vertex.glsl';
// @ts-expect-error undefined because it's not initialized
import fragmentShader from '@/shaders/imageReveal/fragment.glsl';

interface Props {
  element: HTMLImageElement;
  scene: THREE.Scene;
  sizes: Size;
}

export default class Media {
  element: HTMLImageElement;
  scene: THREE.Scene;
  sizes: Size;
  material: THREE.ShaderMaterial | undefined;
  geometry: THREE.PlaneGeometry | undefined;
  mesh: THREE.Mesh | undefined;
  nodeDimensions: Size;
  meshDimensions: Size;
  meshPosition: Position;
  elementBounds: DOMRect = new DOMRect();
  currentScroll: number;
  lastScroll: number;
  scrollSpeed: number;
  observer: IntersectionObserver | null = null;

  constructor({ element, scene, sizes }: Props) {
    this.element = element;
    this.scene = scene;
    this.sizes = sizes;
    this.currentScroll = 0;
    this.lastScroll = 0;
    this.scrollSpeed = 0;

    this.createGeometry();
    this.createMaterial();
    this.createMesh();
    this.setNodeBounds();
    this.setMeshDimensions();
    this.setMeshPosition();
    this.setTexture();

    if (this.mesh) {
      this.scene.add(this.mesh);
    }
  }

  createGeometry() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
  }

  createMaterial() {
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTexture: new THREE.Uniform(new THREE.Texture()),
        uResolution: new THREE.Uniform(new THREE.Vector2(0, 0)),
        uProgress: new THREE.Uniform(0),
        uColor: new THREE.Uniform(new THREE.Color('#242424')),
      },
    });
  }

  createMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  setNodeBounds() {
    this.elementBounds = this.element.getBoundingClientRect();

    this.nodeDimensions = {
      width: this.elementBounds.width,
      height: this.elementBounds.height,
    };
  }

  setMeshDimensions() {
    this.meshDimensions = {
      width: (this.nodeDimensions.width * this.sizes.width) / window.innerWidth,
      height: (this.nodeDimensions.height * this.sizes.height) / window.innerHeight,
    };

    if (this.mesh) {
      this.mesh.scale.set(this.meshDimensions.width, this.meshDimensions.height, 1);
    }
  }

  setMeshPosition() {
    this.setNodeBounds();

    this.meshPosition = {
      x: (this.elementBounds.left * this.sizes.width) / window.innerWidth - this.sizes.width / 2 + this.meshDimensions.width / 2,
      y: (-this.elementBounds.top * this.sizes.height) / window.innerHeight + this.sizes.height / 2 - this.meshDimensions.height / 2,
    };

    if (this.mesh) {
      this.mesh.position.set(this.meshPosition.x, this.meshPosition.y, 0);
    }
  }

  setTexture() {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(this.element.src, (texture: THREE.Texture) => {
      if (this.material?.uniforms?.uTexture && this.material?.uniforms?.uResolution?.value) {
        this.material.uniforms.uTexture.value = texture;
        const { naturalWidth, naturalHeight } = texture.image;
        this.material.uniforms.uResolution.value.set(naturalWidth, naturalHeight);
      }
      this.observe();
    });
}

  updateScroll(scrollY: number) {
    this.currentScroll = (-scrollY * this.sizes.height) / window.innerHeight;

    const deltaScroll = this.currentScroll - this.lastScroll;
    this.lastScroll = this.currentScroll;

    this.updateY(deltaScroll);
    this.setMeshPosition();
  }

  updateY(deltaScroll: number) {
    this.meshPosition.y -= deltaScroll;
    if (this.mesh) {
      this.mesh.position.y = this.meshPosition.y;
    }
  }

  onVisible() {
    if (this.material && this.material.uniforms.uProgress) {
      gsap.to(this.material.uniforms.uProgress, {
        value: 1,
        duration: 1.6,
        ease: 'linear',
      });
    }
  }

  onInvisible() {
    if (this.material && this.material.uniforms.uProgress) {
      gsap.set(this.material.uniforms.uProgress, {
        value: 0,
      });
    }
  }

  observe() {
    this.observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0]?.isIntersecting ?? false;
        if (isVisible) {
          this.onVisible();
        } else {
          this.onInvisible();
        }
      },
      { threshold: 0 }
    );

    this.observer.observe(this.element);
  }

  onResize(sizes: Size) {
    this.sizes = sizes;

    this.setNodeBounds();
    this.setMeshDimensions();
    this.setMeshPosition();
    this.updateScroll(window.scrollY);
  }
}