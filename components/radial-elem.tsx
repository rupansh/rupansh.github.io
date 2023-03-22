import { useEffect, useRef, useState } from "preact/hooks";
import { FunctionalComponent } from "preact";

const RadialElem: FunctionalComponent<{
  children: JSX.Element;
  x: number;
  y: number;
}> = (props) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [off, setOff] = useState(0);

  useEffect(() => {
    setOff(divRef.current!.getBoundingClientRect().width / 2);
  }, [divRef]);

  return (
    <div
      ref={divRef}
      class={`absolute top-[${props.y - off}px] left-[${props.x - off}px]`}
    >
      {props.children}
    </div>
  );
};

export default RadialElem;
