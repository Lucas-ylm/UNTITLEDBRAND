export function srcToSrcset(src: string, widths: number[], fileExtention?: string): string {
  const splited = src.split(".");
  const fileName = splited.pop();
  const pathName = splited.join(".");

  return widths.map((width) => `${pathName}-${width}w.${fileExtention ?? fileName} ${width}w`).join(", ");
}
