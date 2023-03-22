import { FunctionComponent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { animation, keyframes } from "@twind/core";

const translateAnimation = animation(
  "0.5s linear",
  keyframes({
    "0%": { transform: "translateX(100vw)" },
    "100%": { transform: "translateX(0)" },
  }),
);

const reverseTranslateAnimation = animation(
  "0.5s linear",
  keyframes({
    "0%": { width: "0px" },
    "100%": { width: "100vw" },
  }),
);

const TransitionOverlay: FunctionComponent<
  { reverse?: boolean; onTransitionOver: () => void }
> = (props) => {
  const colorCombo = [
    "bg-pallete-red",
    "bg-pallete-yellow",
    "bg-pallete-blue",
    "bg-neutral-900",
  ];
  if (props.reverse) {
    // We dont want to show neutral
    colorCombo.pop();
    colorCombo.reverse();
  }

  const [colorIdx, setColorIdx] = useState(0);
  const overRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    props.onTransitionStart && props.onTransitionStart();
    let cindx = 0;
    const timer = setInterval(() => {
      cindx += 1;
      setColorIdx(cindx);

      const anim = overRef.current!.getAnimations()[0];
      if (anim) {
        anim.cancel();
        anim.play();
      }

      if (cindx != colorCombo.length - 1) {
        return;
      }

      clearInterval(timer);
      overRef.current!.onanimationend = () => props.onTransitionOver();
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div
        class={`fixed top-0 left-0 ${
          colorIdx > 0 ? colorCombo[colorIdx - 1] : "bg-transparent"
        } z-40 w-screen h-screen`}
      >
      </div>
      <div
        ref={overRef}
        class={`fixed ${
          props.reverse ? reverseTranslateAnimation : translateAnimation
        } top-0 left-0 ${colorCombo[colorIdx]} w-screen h-screen z-50`}
      />
    </>
  );
};

export default TransitionOverlay;
