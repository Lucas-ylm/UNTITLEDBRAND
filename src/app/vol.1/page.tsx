import dynamic from 'next/dynamic';
import MorphEffect from "@/components/three/MorphEffect";
import RevealEffect from "@/components/three/RevealEffect";
import Link from "next/link";
import LoadingScreen from '@/components/layout/LoadingScreen';

const AnimateReveal = dynamic(() => import('@/components/animations/AnimateReveal'), {
  ssr: false
});

export const metadata = {
  title: " ",
  description: " ",
  openGraph: {
    images: " ",
  },
};

export default function vol1() {
  return (
    <div className="color-montana">
      <LoadingScreen />
      <MorphEffect />
      <RevealEffect />
      <AnimateReveal />
      <div className="w-full object-contain flex flex-wrap gap-[30px] justify-center">
        <Link href="/image/product1">
          <img className="" src="/assets/images/product1.jpg" alt="Image" />
          <p>PRODUCT</p>
        </Link>
        <Link href="/image/product1">
          <img src="/assets/images/product1.jpg" alt="Image" />
          <p>PRODUCT</p>
        </Link>
      </div>
    </div>
  );
}