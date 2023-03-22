import { FunctionalComponent } from "preact";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import NavBarButton from "../islands/navbar-button.tsx";

const NavBar: FunctionalComponent<
  { icon: IconDefinition; iconHref: string; reverseTransition?: boolean }
> = (props) => {
  return (
    <div class="fixed pt-5 px-7 z-30 grid grid-cols-2 w-screen items-baseline place-content-between">
      <a href="/" class="font-logo text-4xl">
        <h1 class="w-max font-semibold text-pallete-yellow hover:text-pallete-red">
          RUPANSH
        </h1>
      </a>
      <div class="justify-self-end text-pallete-yellow hover:text-pallete-red h-10">
        <NavBarButton
          icon={props.icon}
          href={props.iconHref}
          reverseTransition={props.reverseTransition}
        />
      </div>
    </div>
  );
};

export default NavBar;
