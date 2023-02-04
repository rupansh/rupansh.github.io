import VantaBg from "../islands/vanta-bg.tsx";

export default function Hero() {
  return (
    <>
      <VantaBg>
      </VantaBg>
      <div class="absolute flex flex-col md:justify-items-start sm:justify-items-center lg:text-left sm:text-center lg:items-start sm:items-center sm:justify-center lg:px-96 lg:pt-56 h-screen w-screen lg:text-7xl sm:text-6xl text-white font-medium">
        <p class="lg:py-4">I am Rupansh.</p>
        <p>
          I code <em>stuff</em>
        </p>
      </div>
    </>
  );
}
