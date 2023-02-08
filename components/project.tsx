import { FunctionComponent } from "preact";

const Project: FunctionComponent<
  {
    url: string;
    name: string;
    description: string;
    lang: string;
    license: string;
  }
> = (props) => {
  return (
    <div class="py-8 pl-28 w-10/12">
      <a href={props.url} class="hover:no-underline">
        <div class="border-2 border-pallete-green text-neutral-50 px-12 py-8 hover:bg-neutral-800">
          <div>
            <h5 class="text-2xl">{props.name}</h5>
            <p class="text-lg mx-3 my-1">{props.description}</p>
            <p class="text-sm text-right">
              lang: {props.lang} &nbsp;license: {props.license}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Project;
