import { useEffect, useRef, useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import * as THREE from "three";
import NET from "vanta/vanta.net.min.js";

const VantaBg: FunctionComponent = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<typeof NET | undefined>(
    undefined,
  );
  useEffect(() => {
    vantaEffect || setVantaEffect(NET({
      el: divRef.current,
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      color: 0x8f7fe,
      backgroundColor: 0x171717,
      THREE: THREE,
    }));

    return () => vantaEffect && vantaEffect.destroy();
  });

  return <div ref={divRef} class="w-screen h-screen"></div>;
};

export default VantaBg;
