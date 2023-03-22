import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import TransitionOverlay from "./transition-overlay.tsx";

const NavItem: FunctionalComponent<{
  href: string;
  text: string;
}> = (props) => {
  const [hideOver, setHideOver] = useState(true);

  return (
    <div class="w-0 bg-pallete-green transition-[width] transition-linear duration-1000 hover:(bg-pallete-blue w-7/12)">
      {hideOver ? <div /> : (
        <TransitionOverlay
          onTransitionOver={() => window.location.assign(props.href)}
        />
      )}
      <button onClick={() => setHideOver(false)}>{props.text}</button>
    </div>
  );
};

export default NavItem;
