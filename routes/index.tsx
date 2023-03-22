import DefaultHead from "../components/default-head.tsx";
import NavBar from "../components/navbar.tsx";
import Hero from "../components/hero.tsx";
import Welcome from "../components/welcome.tsx";
import Skills from "../components/skills.tsx";
import Projects from "../components/projects.tsx";
import Social from "../components/social.tsx";

import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <DefaultHead></DefaultHead>
      <div class="bg-neutral-900 flex flex-col min-h-screen">
        <NavBar iconHref="/nav" icon={faBars}></NavBar>
        <Hero></Hero>
        <Welcome></Welcome>
        <Skills></Skills>
        <Projects></Projects>
        <Social></Social>
      </div>
    </>
  );
}
