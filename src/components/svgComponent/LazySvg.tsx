type Props = {
  name: string;
} & React.ComponentProps<"svg">;

export default function LazySvg({ name, ...props }: Props) {
  const Svg = require(`./svg/${name}.svg`).default;
  // Or without using `dynamic`:
  // const Svg = dynamic(() => import(`./svg/${name}.svg`));
  // We use `default` here because `@svgr/webpack` converts all other *.svg imports to React components, this might be different for other loaders.
  // const Svg = (await import(`@/assets/${name}.svg`)).default;

  return <Svg {...props} />;
}
