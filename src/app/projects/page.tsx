import ProjectCard from "../components/projectcard";
import dummyImage from "../../../public/dummy_1080x720_000000_a3b7e2.png"
export default function Projects() {
    return (
      <main className=" min-h-screen items-center justify-between p-24 bg-stone-900">
        <div className="grid-cols-2 lg:grid-cols-3 gap-4 grid">
          <ProjectCard pageLink="/" imageLink={dummyImage} projectName="Test 1" />
          <ProjectCard pageLink="/" imageLink={dummyImage} projectName="Test 2" />
          <ProjectCard pageLink="/" imageLink={dummyImage} projectName="Test 3" />
          <ProjectCard pageLink="/" imageLink={dummyImage} projectName="Test 4" />

        </div>
      </main>
    );
  }
  