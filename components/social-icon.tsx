import { FunctionalComponent } from "preact";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcon: FunctionalComponent<{
  icon: IconDefinition;
  class?: string;
  onHover?: [() => void, () => void];
}> = (props) => {
  return (
    <div
      className={`rounded-full p-4 transition-transform duration-500 hover:scale-150 ${props.class}`}
      onMouseOver={(props.onHover || [])[0]}
      onMouseLeave={(props.onHover || [])[1]}
    >
      <FontAwesomeIcon icon={props.icon} fontSize="3.5rem"></FontAwesomeIcon>
    </div>
  );
};

export default SocialIcon;
