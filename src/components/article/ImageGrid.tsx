import AnimateParallax from "../animations/AnimateParallax";

type ImageGridProps = {
  imageGrid: JSX.Element[][];
};

export default function ImageGrid({ imageGrid }: ImageGridProps) {
  return (
    <section className="relative flex flex-col gap-2 md:gap-4 lg:flex-row">
      {imageGrid.map((images, lineIndex) => {
        return (
          <div
            className={`flex gap-3 md:gap-6 lg:flex-col ${lineIndex % 2 === 0 ? "lg:w-[38%]" : "lg:w-[24%]"} ${lineIndex === 2 ? "lg:flex-col-reverse lg:self-start" : ""}`}
            key={lineIndex}>
            {images.map((image, imageIndex) => {
              // const width = pair ? (imageIndex === 0 ? "w-[45%]" : "w-[55%]") : imageIndex === 0 ? "w-2/3" : "w-1/3";
              const margin =
                lineIndex === 0
                  ? imageIndex === 0
                    ? "self-end lg:mt-7 lg:pr-7 lg:pb-7 xl:mt-14 xl:pr-14 xl:pb-14"
                    : "mb-2 md:mb-4"
                  : lineIndex === 1
                    ? imageIndex === 0
                      ? "lg:mb-7 xl:mb-14"
                      : ""
                    : lineIndex === 2
                      ? imageIndex === 0
                        ? "lg:pl-7 lg:pt-7 xl:pl-14 xl:pt-14"
                        : "mt-2 md:mt-4 lg:mt-7 xl:mt-14"
                      : "";

              const intensity = [
                [2.5, 10],
                [-2.5, -5],
                [7.5, 5],
              ];

              return (
                <div className={`${margin}`} key={imageIndex}>
                  <AnimateParallax intensity={intensity.at(lineIndex)?.at(imageIndex)}>{image}</AnimateParallax>
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
}
