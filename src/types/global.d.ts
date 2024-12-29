import { ScrollTrigger } from "gsap/ScrollTrigger";

declare global {
  interface Window {
    ScrollTrigger: typeof ScrollTrigger;
  }
}
