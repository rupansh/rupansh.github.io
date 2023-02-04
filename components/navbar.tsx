import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <div class="fixed pt-5 px-7 z-50 grid grid-cols-2 w-screen items-baseline place-content-between">
      <a href="#" class="font-logo text-4xl">
        <h1 class="w-max font-semibold text-pallete-yellow hover:text-pallete-red">
          RUPANSH
        </h1>
      </a>
      <div class="justify-self-end w-8 h-8 text-pallete-yellow hover:text-pallete-red">
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </div>
    </div>
  );
}
