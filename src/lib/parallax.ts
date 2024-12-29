export type ParallaxScroll = {
  top: number;
  topRaw: number;
  offset: number;
  percent: number;
  percentRaw: number;
  windowHeight: number;
  pageHeight: number;
};

export type ParallaxRelative = { top: number; bottom: number; position: number; positionRaw: number };

export type ParallaxScrollEvent = (scroll: ParallaxScroll) => void;
export type ParallaxRelativeEvent = (position: ParallaxRelative, scroll: ParallaxScroll) => void;

const speed = 7;
const epsilon = 0.1;

export function lerp(t: number, from: number, to: number) {
  return (1 - t) * from + to * t;
}

export function invlerp(v: number, from: number, to: number) {
  return (v - from) / (to - from);
}

export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(n, max));
}

export const parallax = (function () {
  let scrollTopRaw = typeof window !== 'undefined' ? window.scrollY : 0;
  let scrollTop = scrollTopRaw;
  let animationId: number | null = null;
  let lastTime: number = Date.now();

  const globalCallbacks: {
    elem: HTMLElement;
    fn: ParallaxScrollEvent;
  }[] = [];

  const relativeCallbacks: {
    elem: HTMLElement;
    fn: ParallaxRelativeEvent;
  }[] = [];

  function scrollSmooth() {
    const now = Date.now();
    const dt = (now - lastTime) * 0.001;
    lastTime = now;

    if (typeof window !== 'undefined') {
      scrollTopRaw = window.scrollY;
      scrollTop = Math.abs(scrollTop - scrollTopRaw) < epsilon ? scrollTopRaw : lerp(clamp(dt * speed, 0, 1), scrollTop, scrollTopRaw);
    }

    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

    const scroll = {
      top: scrollTop,
      topRaw: scrollTopRaw,
      offset: scrollTopRaw - scrollTop,
      percent: clamp(scrollTop / (pageHeight - windowHeight), 0, 1),
      percentRaw: clamp(scrollTopRaw / (pageHeight - windowHeight), 0, 1),
      windowHeight,
      pageHeight,
    };

    for (const global of globalCallbacks) {
      global.fn.call(global.elem, scroll);
    }

    for (const relative of relativeCallbacks) {
      const rect = relative.elem.getBoundingClientRect();
      const top = rect.top + scrollTopRaw - windowHeight;
      const bottom = Math.max(top + 1, rect.bottom + scrollTopRaw);

      relative.fn.call(
        relative.elem,
        {
          top,
          bottom,
          position: clamp(invlerp(scrollTop, top, bottom), 0, 1),
          positionRaw: clamp(invlerp(scrollTopRaw, top, bottom), 0, 1),
        },
        scroll
      );
    }

    animationId = scrollTopRaw === scrollTop ? null : window.requestAnimationFrame(scrollSmooth);
  }

  function onScroll() {
    if (animationId === null) {
      lastTime = Date.now();
      animationId = window.requestAnimationFrame(scrollSmooth);
    }

    if (typeof window !== 'undefined') {
      scrollTopRaw = window.scrollY;
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener("scroll", onScroll);
    setTimeout(onScroll, 0);
  }

  return {
    onScroll: (elem: HTMLElement, fn: ParallaxScrollEvent) => {
      globalCallbacks.push({
        elem,
        fn,
      });
    },
    onRelative: (elem: HTMLElement, fn: ParallaxRelativeEvent) => {
      relativeCallbacks.push({
        elem,
        fn,
      });
    },
  };
})();