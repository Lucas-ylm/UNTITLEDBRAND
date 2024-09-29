import MorphEffect from "@/components/three/MorphEffect";
import RevealEffect from "@/components/three/RevealEffect";
import Link from "next/link";

export const metadata = {
  title: "Montana",
  description:
    "L’État du Montana est aussi connu sous le nom de “Big Sky Country”. Paysages époustouflants, nature sauvage lovée dans des parcs nationaux parmi les plus spectaculaires…",
  openGraph: {
    images: "/social-montana-min.jpg",
  },
};

export default function MontanaPage() {
  return (
    <div className="color-montana">
      <MorphEffect />
      <RevealEffect />
      <div className="grid-image">
        <div>
          <Link href="/image/product1">
            <img src="/assets/images/product1.jpg" alt="Image 1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
