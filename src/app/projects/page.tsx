import ProjectCard from "../components/projectcard";
import React from "react";
import PlantGameImage from "../../../public/PlantGame.png";
import SpaceShotImage from "../../../public/SpaceShotImage.png";
import TodoLogo from "../../../public/todo-logo.jpg";
import MarkdownLogo from "../../../public/Markdown-Logo.jpg";
import RustLogo from "../../../public/Rust-Logo.jpg";

export default function Projects() {
  return (
    <main className="flex min-h-screen items-center justify-center md:p-24 bg-stone-900 flex-wrap">
      <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 grid items-start justify-items-center align-middle">
        <ProjectCard
          projecttype="Video Game"
          githubLink="https://github.com/Niall-Sharma/PlantGame/"
          pageLink="https://sirtago.itch.io/plant-frenzy"
          imageLink={PlantGameImage}
          projectName="Plant Frenzy"
          projectDescription="A cozy game about a plant enthusiant growing plants in their own home. Made in Godot using the C# language."
        />
        <ProjectCard
          projecttype="Video Game"
          githubLink="https://github.com/Niall-Sharma/EndlessMobileGame"
          pageLink="https://sirtago.itch.io/spaceshot"
          imageLink={SpaceShotImage}
          projectName="Space Shot"
          projectDescription="An endless game where you are trying to hit as many planets as you can. Can you beat my high score of 38? Made in Godot using GDScript."
        />
        <ProjectCard
          projecttype="App"
          githubLink="https://github.com/Niall-Sharma/RustCliTodo"
          pageLink=""
          imageLink={TodoLogo}
          projectName="CLI To-Do List in Rust"
          projectDescription="A simple command-line to-do list application written in Rust. Manage your tasks directly from your terminal—add, list, complete, and remove them with ease!"
        />
        <ProjectCard
          projecttype="App"
          githubLink="https://github.com/Niall-Sharma/mkweb"
          pageLink="https://github.com/Niall-Sharma/mkweb"
          imageLink={MarkdownLogo}
          projectName="Mkweb"
          projectDescription="A Markdown to HTML converter and server written entirely in Rust. Meant to be used with Obsidian Vaults."
        />
        <ProjectCard
          projecttype="App"
          githubLink="https://github.com/Niall-Sharma/emu"
          pageLink="https://github.com/Niall-Sharma/emu"
          imageLink={RustLogo}
          projectName="Emu"
          projectDescription="Stack-based programming language interpreter. Written in Rust."
        />
        {/*<ProjectCard projecttype="Web App" githubLink="/" pageLink="/" imageLink={dummyImage} projectName="Test 4" projectDescription="Eiusmod ex esse dolore aute ut consectetur incididunt." /> */}
      </div>
    </main>
  );
}

