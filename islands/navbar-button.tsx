import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionalComponent } from "preact";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useState } from "preact/hooks";
import TransitionOverlay from "./transition-overlay.tsx";

const NavBarButton: FunctionalComponent<
  { icon: IconDefinition; href: string; reverseTransition?: boolean }
> = (props) => {
  const [hideOver, setHideOver] = useState(true);
  return (
    <>
      <div>
        {hideOver ? <div /> : (
          <TransitionOverlay
            reverse={props.reverseTransition}
            onTransitionOver={() => window.location.assign(props.href)}
          />
        )}
      </div>
      <button onClick={() => setHideOver(false)}>
        <FontAwesomeIcon icon={props.icon} fontSize="2rem" className="h-10">
        </FontAwesomeIcon>
      </button>
    </>
  );
};

export default NavBarButton;
