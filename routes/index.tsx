import { Head } from "$fresh/runtime.ts";
import { asset } from "$fresh/runtime.ts";
import NavBar from "../components/navbar.tsx";
import Hero from "../components/hero.tsx";
import Welcome from "../components/welcome.tsx";
import Skills from "../components/skills.tsx";
import Projects from "../components/projects.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rupansh</title>
        <link rel="stylesheet" href={asset("/fonts.css")} />
      </Head>
      <div class="bg-neutral-900 flex flex-col">
        <NavBar></NavBar>
        <Hero></Hero>
        <Welcome></Welcome>
        <Skills></Skills>
        <Projects></Projects>
      </div>
    </>
  );
}
