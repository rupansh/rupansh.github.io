import { FunctionalComponent } from "preact";
import { animation, keyframes } from "@twind/core";

const waveAnimtion = animation(
  "0.5s linear infinite",
  keyframes({
    "0%": { transform: "translate(-150px, 0)" },
    "100%": { transform: "translate(0, 0)" },
  }),
);

const fillAnimation = (perc: number) =>
  animation(
    `${(2 / 75) * perc}s cubic-bezier(.2, .6, .8, .4) 1`,
    keyframes({
      "0%": { transform: "translate(0, 200px)" },
      "100%": { transform: `translate(0, ${2 * (100 - perc)})` },
    }),
  );

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
        class={`fill-pallete-green ${waveAnimtion}`}
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
  return (
    <div
      class={`border-solid rounded-full border-2 border-pallete-red h-48 w-48 overflow-hidden translate-y-0 translate-x-0`}
      style={{ "backfaceVisibility": "hidden" }}
    >
      <div>
        <div
          class={`translate-x-0 translate-y-[${
            2 * (100 - props.percentage)
          }px] h-0 ${fillAnimation(props.percentage)}`}
        >
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
