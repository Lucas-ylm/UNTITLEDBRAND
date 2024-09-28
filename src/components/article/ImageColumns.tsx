import AnimateParallax from "../animations/AnimateParallax";

type ImageColumnsProps = {
  imageColumns: JSX.Element[];
};

export default function ImageColumns({ imageColumns }: ImageColumnsProps) {
  return (
    <section className="relative -mx-7 my-7 flex max-w-screen-2xl flex-wrap gap-2 md:mx-auto md:my-14 md:gap-4">
      {imageColumns.map((image, index) => {
        const intensity = index % 3 === 1 ? -7.5 : 10;
        return (
          <div className="w-[calc(50%-0.25rem)] md:w-[calc(33.33%-0.75rem)]" key={index}>
            <AnimateParallax intensity={intensity}>{image}</AnimateParallax>
          </div>
        );
      })}
    </section>
  );
}
