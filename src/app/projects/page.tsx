import ProjectCard from "../components/projectcard";
import dummyImage from "../../../public/dummy_1080x720_000000_a3b7e2.png"
import PlantGameImage from "../../../public/PlantGame.png"
import SpaceShotImage from "../../../public/SpaceShotImage.png"
export default function Projects() {
    return (
      <main className="flex min-h-screen items-center justify-center md:p-24 bg-stone-900 flex-wrap">
        <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 grid items-start justify-items-center align-middle">
          <ProjectCard projecttype="Video Game" githubLink="https://github.com/Niall-Sharma/PlantGame/" pageLink="https://sirtago.itch.io/plant-frenzy" imageLink={PlantGameImage} projectName="Plant Frenzy" projectDescription="A cozy game about a plant enthusiant growing plants in their own home. Made in Godot using the C# language." />
          <ProjectCard projecttype="Video Game" githubLink="https://github.com/Niall-Sharma/EndlessMobileGame" pageLink="https://sirtago.itch.io/spaceshot" imageLink={SpaceShotImage} projectName="Space Shot" projectDescription="An endless game where you are trying to hit as many planets as you can. Can you beat my high score of 38? Made in Godot using GDScript." />
          {/* <ProjectCard projecttype="Research App" githubLink="https://github.com/Niall-Sharma/GMResearchGame/" pageLink="/" imageLink={dummyImage} projectName="Emotion Collection GeoGame" projectDescription="Done as part of a research project in the Game Design Major at Iowa State University. This project is a game that is meant to collect the emotional value of a place from users." /> */}
          {/*<ProjectCard projecttype="Web App" githubLink="/" pageLink="/" imageLink={dummyImage} projectName="Test 4" projectDescription="Eiusmod ex esse dolore aute ut consectetur incididunt." /> */}
        </div>
      </main>
    );
  }
  