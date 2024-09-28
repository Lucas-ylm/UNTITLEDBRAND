import { env } from "@/lib/env";
import { srcToSrcset } from "@/lib/src-to-srcset";

type ExportedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  loading?: "eager" | "lazy";
  widths: number[];
  className?: string;
};

export default function ExportedImage({
  src,
  alt,
  width,
  height,
  loading = "lazy",
  widths,
  className,
}: ExportedImageProps) {
  const path = env.BASE_PATH + src;
  if (env.DEV) {
    return (
      <img
        src={path}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        className={className}
      />
    );
  }

  return (
    <img
      src={path}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      srcSet={srcToSrcset(path, widths, "webp")}
      className={className}
    />
  );
}
