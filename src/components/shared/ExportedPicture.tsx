import { env } from "@/lib/env";
import { srcToSrcset } from "@/lib/src-to-srcset";

type ExportedPictureProps = {
  src: string;
  sources?: {
    src: string;
    widths: number[];
    media: string;
  }[];
  alt: string;
  loading?: "eager" | "lazy";
  width?: number;
  height?: number;
  className?: string;
};

export default function ExportedPicture({
  src,
  alt,
  width,
  height,
  loading = "lazy",
  sources,
  className,
}: ExportedPictureProps) {
  if (env.DEV) {
    return (
      <picture>
        <img src={env.BASE_PATH + src} alt={alt} width={width} height={height} loading="lazy" className={className} />
      </picture>
    );
  }

  return (
    <picture>
      {sources?.map((source) => (
        <source
          key={source.src}
          srcSet={srcToSrcset(env.BASE_PATH + source.src, source.widths, "webp")}
          media={source.media}
        />
      ))}
      <img src={env.BASE_PATH + src} alt={alt} width={width} height={height} className={className} loading={loading} />;
    </picture>
  );
}
