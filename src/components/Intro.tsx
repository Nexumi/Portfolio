import { createSignal, For } from "solid-js";

export default function Intro() {
  const [skills, setSkills] = createSignal([
    // Programming/Scripting Languages
    "Python",
    "Java",
    "C++",
    "C",
    "Go",
    "SQL",

    // Web Application
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "SolidJS",
    "Tailwind CSS",

    // Technological Skills
    "Linux Server",
    "REST API",
    "Docker",

    // Soft Skills
    "analytical",
    "flexible",
    "goal driven",
    "teamwork",
    "communication",
    "meticulous",
    "positive",
    "problem solver",
    "reliable",
    "organized",
    "critical thinker",
  ]);

  return (
    <div class="py-64 space-y-16">
      <div class="text-8xl text-center">Jimmy Pan</div>
      <div class="flex flex-wrap gap-4 justify-center w-1/2 mx-auto">
        <For each={skills()}>{(skill) => <Skill name={skill} />}</For>
      </div>
    </div>
  );
}

function Skill(props: { name: string }) {
  return <div class="text-xl border-2 p-2">{props.name}</div>;
}
