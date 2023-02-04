import { useMemo } from "preact/hooks";
import { FunctionalComponent } from "preact";

function WaveShape() {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="400px"
      height="400px"
      viewBox="0 0 300 300"
    >
      <path
        class="fill-pallete-green animation-wave"
        d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
        c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
        c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
      />
    </svg>
  );
}

const Skill: FunctionalComponent<{ name: string; percentage: number }> = (
  props,
) => {
  const pix = useMemo(() => 2 * (100 - props.percentage), [props.percentage]);

  return (
    <div
      class={`border-solid rounded-full border-2 border-pallete-red h-48 w-48 overflow-hidden translate-y-0 translate-x-0 backface-hidden`}
    >
      <div>
        <div class={`translate-x-0 translate-y-[${pix}px] h-0`}>
          <WaveShape></WaveShape>
        </div>
        <p class="absolute font-mono font-normal text-2xl text-pallete-red top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          {props.name}
        </p>
      </div>
    </div>
  );
};

export default Skill;
