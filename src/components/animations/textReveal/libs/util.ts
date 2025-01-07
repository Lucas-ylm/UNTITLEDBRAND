import device from 'current-device';

export class Util {
  private constructor() {}

  // Check if code is running in browser
  private static isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  public static random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  public static randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public static hit(range: number = 0): boolean {
    if (range < 2) range = 2;
    return this.randomInt(0, range - 1) == 0;
  }

  public static randomArr(arr: Array<any>): any {
    return arr[this.randomInt(0, arr.length - 1)];
  }

  public static range(val: number): number {
    return this.random(-val, val);
  }

  public static clamp(val: number, min: number, max: number): number {
    return Math.min(max, Math.max(val, min));
  }

  public static map(num: number, toMin: number, toMax: number, fromMin: number, fromMax: number): number {
    if (num <= fromMin) return toMin;
    if (num >= fromMax) return toMax;
    const p = (toMax - toMin) / (fromMax - fromMin);
    return (num - fromMin) * p + toMin;
  }

  public static isTouchDevice(): boolean {
    if (!this.isBrowser()) return false;
    return !!('ontouchstart' in window || (navigator != undefined && navigator.maxTouchPoints > 0));
  }

  public static isPc(): boolean {
    if (!this.isBrowser()) return false;
    return device.mobile() == false;
  }

  public static isSp(): boolean {
    if (!this.isBrowser()) return false;
    return device.mobile();
  }

  public static isAod(): boolean {
    if (!this.isBrowser()) return false;
    return device.android();
  }

  public static isIPhone(): boolean {
    if (!this.isBrowser()) return false;
    return device.iphone();
  }

  public static isIPad(): boolean {
    if (!this.isBrowser()) return false;
    return device.tablet();
  }

  public static isWin(): boolean {
    if (!this.isBrowser()) return false;
    return window.navigator.platform.indexOf('Win') != -1;
  }

  public static isFF(): boolean {
    if (!this.isBrowser()) return false;
    return window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1;
  }

  public static isSafari(): boolean {
    if (!this.isBrowser()) return false;
    return window.navigator.userAgent.toLowerCase().indexOf('safari') != -1 && !this.isChrome();
  }

  public static isChrome(): boolean {
    if (!this.isBrowser()) return false;
    return window.navigator.userAgent.toLowerCase().indexOf('chrome') != -1;
  }
}