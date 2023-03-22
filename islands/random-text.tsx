import { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

function sampleRand<T>(arr: ArrayLike<T>, len: number) {
  return Array.from(
    { length: len },
    () => arr[Math.floor(Math.random() * arr.length)],
  );
}

function randAlphaNums(len: number) {
  const alphaNums =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return sampleRand(alphaNums, len);
}

function randColor() {
  const colorCombo = [
    "pallete-blue",
    "pallete-green",
    "pallete-red",
    "slate-50",
  ];
  return colorCombo[Math.floor(Math.random() * colorCombo.length)];
}

const CharRender: FunctionalComponent<{ char: string; color: string }> = (
  props,
) => {
  return <span class={`text-${props.color}`}>{props.char}</span>;
};

const RandomText: FunctionalComponent<{ text: string }> = (props) => {
  const [curText, setCurText] = useState(randAlphaNums(props.text.length));
  const [start, setStart] = useState(0);

  useEffect(() => {
    let cindx = 0;
    const timer = setInterval(() => {
      setCurText((ctext) => {
        const cpy = [...ctext];
        cpy[cindx] = props.text[cindx];
        return cpy;
      });
      cindx += 1;
      setStart(cindx);

      if (cindx == props.text.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {curText.map((c, i) => (
        <CharRender
          char={c}
          color={start >= i ? "pallete-yellow" : randColor()}
          key={i}
        >
        </CharRender>
      ))}
    </>
  );
};

export default RandomText;
