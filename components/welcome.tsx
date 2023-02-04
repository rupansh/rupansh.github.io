import RandomText from "../islands/random-text.tsx";

export default function Welcome() {
  return (
    <div class="py-52 flex justify-center">
      <div class="text-5xl">
        <RandomText text="Welcome to my site!"></RandomText>
      </div>
    </div>
  );
}
