import DefaultHead from "../components/default-head.tsx";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import NavItem from "../islands/nav-item.tsx";
import NavBar from "../components/navbar.tsx";
import { animation, keyframes } from "@twind/core";
import TransitionOverlay from "../islands/transition-overlay.tsx";

const fadeIn = animation(
  "0.5s",
  keyframes({
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  }),
);

export default function Nav() {
  return (
    <>
      <DefaultHead></DefaultHead>
      <div className="bg-neutral-900 h-screen overflow-hidden">
        <NavBar iconHref="/" icon={faTimes} reverseTransition={true}></NavBar>
        <div>
          {hideOver ? <div /> : (
            <TransitionOverlay
              onTransitionOver={() => window.location.assign(nav)}
            />
          )}
        </div>
        <div class={`grid grid-rows-2 pl-36 pr-4 pt-48 ${fadeIn}`}>
          <div class="flex flex-col text-white text-8xl">
            <NavItem href="/" text="HOME"></NavItem>
            <NavItem href="/" text="SKILLS"></NavItem>
            <NavItem href="/" text="PROJECTS"></NavItem>
            <NavItem href="/" text="SOCIAL"></NavItem>
          </div>
        </div>
      </div>
    </>
  );
}
