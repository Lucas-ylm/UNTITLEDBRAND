import AnimateReveal from "@/components/animations/AnimateReveal";
import MorphEffect from "@/components/three/MorphEffect";
import RevealEffect from "@/components/three/RevealEffect";
import Link from "next/link";

export const metadata = {
  title: " ",
  description:
    " ",
  openGraph: {
    images: " ",
  },
};

export default function vol1() {
  return (
    <div className="color-montana">
      <MorphEffect />
      <RevealEffect />
      <AnimateReveal />
      <div className="w-full flex flex-wrap items-center">
          <Link href="/image/product1">
            <img src="/assets/images/product1.jpg" alt="Image 1" />
          </Link>
          <Link href="/image/product1">
            <img src="/assets/images/product1.jpg" alt="Image 1" />
          </Link>
      </div>
      <p>hgeyyyyy</p>
    </div>
  );
}
