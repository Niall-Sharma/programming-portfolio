import ProjectCard from "../components/projectcard";
import dummyImage from "../../../public/dummy_1080x720_000000_a3b7e2.png"
import PlantGameImage from "../../../public/PlantGame.png"
export default function Projects() {
    return (
      <main className="flex min-h-screen items-center justify-center md:p-24 bg-stone-900 flex-wrap">
        <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 grid items-start justify-items-center align-middle">
          <ProjectCard projecttype="Web App" githubLink="https://github.com/Niall-Sharma/PlantGame/" target="_BLANK" pageLink="/" imageLink={PlantGameImage} projectName="Test 1" projectDescription="Incididunt dolor reprehenderit in nisi aliquip adipisicing incididunt Lorem officia. Irure ea cillum deserunt magna do consequat amet minim Lorem ex magna nisi sint officia. " />
          <ProjectCard projecttype="Web App" githubLink="/" pageLink="/" imageLink={dummyImage} projectName="Test 2" projectDescription="Aute veniam duis ex eiusmod laborum." />
          <ProjectCard projecttype="Web App" githubLink="/" pageLink="/" imageLink={dummyImage} projectName="Test 3" projectDescription="Velit non incididunt amet enim incididunt consectetur sit non irure irure velit ex. Tempor veniam officia excepteur commodo sint. Eiusmod cillum sunt nulla sit aliqua. Exercitation duis enim in veniam esse quis pariatur proident elit reprehenderit veniam deserunt cillum. Ea exercitation et officia do enim irure." />
          <ProjectCard projecttype="Web App" githubLink="/" pageLink="/" imageLink={dummyImage} projectName="Test 4" projectDescription="Eiusmod ex esse dolore aute ut consectetur incididunt." />
        </div>
      </main>
    );
  }
  