import { asset } from "$fresh/runtime.ts";
import { useEffect, useRef, useState } from "preact/hooks";
import RadialArray from "../components/radial-array.tsx";
import SocialIcon from "../components/social-icon.tsx";
import {
  faFacebook,
  faGithub,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialPic() {
  const proPic = useRef<HTMLImageElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [proHeight, setProHeight] = useState(0);
  const [divDim, setDivDim] = useState({ height: 0, width: 0 });
  const [disabled, setDisabled] = useState(false);

  const siconHover = [
    () => setDisabled(true),
    () => setDisabled(false),
  ] as [() => void, () => void];

  useEffect(() => {
    const rect = proPic.current!.getBoundingClientRect();

    setProHeight(rect.height);
    setDivDim({
      height: divRef.current!.offsetHeight,
      width: divRef.current!.offsetWidth,
    });
  }, []);

  return (
    <div
      ref={divRef}
      class="flex relative items-center justify-center mb-32 h-96"
    >
      <div hidden disabled={disabled} class="peer~sicon"></div>
      <RadialArray
        radius={0.7 * proHeight}
        width={divDim.width}
        height={divDim.height}
      >
        <SocialIcon
          class={`text-black bg-white`}
          icon={faGithub}
          onHover={siconHover}
        >
        </SocialIcon>
        <SocialIcon
          class={`text-white bg-blue-500`}
          icon={faTelegram}
          onHover={siconHover}
        >
        </SocialIcon>
        <SocialIcon
          class={`text-white bg-blue-900`}
          icon={faFacebook}
          onHover={siconHover}
        >
        </SocialIcon>
        <SocialIcon
          class={`text-white bg-blue-400`}
          icon={faTwitter}
          onHover={siconHover}
        >
        </SocialIcon>
      </RadialArray>
      <img
        ref={proPic}
        id="pro-pic"
        class="rounded-full w-2/12 transition-transform duration-500 peer~sicon[disabled]:scale-50"
        src={asset("/img/pro.png")}
        alt="profile-pic"
      >
      </img>
    </div>
  );
}
