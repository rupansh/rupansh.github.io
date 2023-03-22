import Skill from "./skill.tsx";

export default function Skills() {
  return (
    <div id="skills" class="text-pallete-red px-32 w-screen flex flex-col">
      <h4 class="text-3xl">fn skill(language: &str) {"{"}</h4>
      <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-20 content-center justify-items-center px-12 py-16">
        <Skill name="Python" percentage={90}></Skill>
        <Skill name="Kotlin" percentage={75}></Skill>
        <Skill name="C/C++" percentage={65}></Skill>
        <Skill name="Rust" percentage={85}></Skill>
        {/*Nice*/}
        <Skill name="Nim" percentage={69}></Skill>
        <Skill name="AOSP" percentage={72}></Skill>
        <Skill name="Linux" percentage={75}></Skill>
        <Skill name="Web_Dev" percentage={65}></Skill>
      </div>
      <h4 class="text-3xl">{"}"}</h4>
    </div>
  );
}
