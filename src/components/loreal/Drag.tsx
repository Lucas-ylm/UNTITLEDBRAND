import LazySvg from "../svgComponent/LazySvg";

type Props = { className?: string };

export default function Drag({ className }: Props) {
  return (
    <div className={`${className} flex h-[44px] w-[115px] items-center justify-evenly rounded-full bg-white`}>
      <LazySvg name="prevDrag" />
      <p className="font-roboto text-lg font-bold">SWIPE</p>
      <LazySvg name="nextDrag" />
    </div>
  );
}
