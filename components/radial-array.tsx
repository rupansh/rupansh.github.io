import { FunctionalComponent, VNode } from "preact";
import { useMemo } from "preact/hooks";
import RadialElem from "./radial-elem.tsx";

const RadialArray: FunctionalComponent<{
  width: number;
  height: number;
  radius: number;
  children: VNode<unknown>[];
}> = (props) => {
  const angle = useMemo(() => (2 * Math.PI) / props.children.length, [
    props.children,
  ]);

  return (
    <>
      {props.children.map((child, index) => {
        const x = props.width / 2 + props.radius * Math.cos(angle * index);
        const y = props.height / 2 + props.radius * Math.sin(angle * index);

        return <RadialElem x={x} y={y} key={index}>{child}</RadialElem>;
      })}
    </>
  );
};

export default RadialArray;
