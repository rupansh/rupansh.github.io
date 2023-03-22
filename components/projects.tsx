import Project from "./project.tsx";

const projects = [
  {
    title: "android_kernel_xiaomi_msm8937-4.9",
    desc: "A crude attempt to boot Linux Kenel 4.9 on Xiaomi Redmi 3s(land).",
    lang: "c",
    license: "GPLv2",
    url: "https://github.com/rupansh/android_kernel_xiaomi_msm8937-4.9",
  },
  {
    title: "nim-tg-manager",
    desc: "A management bot for telegram, written in nim!",
    lang: "nim",
    license: "RPL-1.b",
    url: "https://github.com/rupansh/nim-tg-manager",
  },
  {
    title: "generic-ota-app",
    desc: "A generic OTA app for custom roms that doesn't require sys-priv",
    lang: "kotlin",
    license: "Apache-2.0",
    url: "https://github.com/rupansh/generic-ota-app",
  },
  {
    title: "csgo-external-rust",
    desc: "A PoC external cheat for CounterStrike Global Offensive",
    lang: "rust",
    license: "GPLv3",
    url: "https://github.com/rupansh/csgo-external-rust",
  },
  {
    title: "JABB",
    desc: "Just Another telegram BuildBot for building ROMS on-the-go!",
    lang: "python",
    license: "GPLv3",
    url: "https://github.com/rupansh/JABB",
  },
  {
    title: "Chimera Kernel Project",
    desc: "A custom kernel for Redmi 3s, prioritizing performance",
    lang: "c",
    license: "Various",
    url: "https://github.com/ChimeraKernelProject",
  },
];

export default function Projects() {
  return (
    <>
      <h1 id="projects" class="text-pallete-yellow text-center text-4xl py-52">
        // Enter Projects
      </h1>
      <div class="flex flex-col text-pallete-green text-3xl px-44">
        <h4>def projects(username="rupansh", project: str):</h4>
        {projects.map((project, i) => (
          <Project
            key={i}
            url={project.url}
            name={project.title}
            description={project.desc}
            lang={project.lang}
            license={project.license}
          >
          </Project>
        ))}
        <h4 class="ml-8">
          return f"https://github.com/{"{username}"}/{"{project}"}"
        </h4>
      </div>
    </>
  );
}
