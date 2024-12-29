export function srcToSrcset(src: string, widths: number[] = [768, 1024, 1440], fileExtention?: string): string {
  const splited = src.split(".");
  const fileName = splited.pop();
  const pathName = splited.join(".");

  return widths.map((width) => `${pathName}-${width}w.${fileExtention ?? fileName} ${width}w`).join(", ");
}
