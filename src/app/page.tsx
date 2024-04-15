import Image from "next/image";
import Niall from "../../public/dummy_1080x720_000000_a3b7e2.png"
import Link from "next/link";
import ProjectCard from "./components/projectcard";
import SkillCard from "./components/skillCard";
export default function Home() {
  return (
    <main className="scrollbar-hide flex justify-center flex-wrap">
      <header className="flex w-full items-center flex-wrap align-middle justify-center font-bold bg-center bg-cover to-black min-h-screen bg-gradient-radial from-purple-950 bg-fixed">
        <div className="animate-fade-up animate-once animate-ease-out">
          <h1><span className="text-3xl">Hi! My name is </span></h1>
          <h1 className="text-white uppercase text-6xl sm:text-8xl text-wrap"> Niall <br />Sharma <br /></h1>
          <h1 className="text-xl leading-loose">I&apos;m A Full Stack Developer</h1>
          <svg className="invert w-10 h-10 mt-10 animate-bounce ml-auto mr-auto" width="128" height="128" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z"/></svg>
        </div>
      </header>
      <section className=" py-20 bg-stone-900 flex flex-wrap lg:space-x-20 items-center justify-center">
          <div className="w-full md:w-1/3 bg-stone-800 p-10 drop-shadow-xl">
            <h2 className="text-center font-bold text-4xl pb-10 text-white">About Me</h2>
            <p className="text-white text-lg">Quis aliquip amet sit fugiat duis dolor. Eiusmod laboris est laborum aliquip velit eiusmod. Qui nostrud reprehenderit consectetur sunt velit deserunt nisi et esse nulla ipsum. Quis labore esse occaecat nulla mollit in proident. Do sunt mollit nulla Lorem irure incididunt non in. Do est exercitation ea cupidatat sunt ullamco. Minim ut do irure labore irure aute consectetur esse sit eiusmod ex sunt sunt amet.</p>
          </div>
            <Image 
            src={Niall} 
            width={1080} 
            height={1980} 
            alt="Picture of Niall Sharma"
            className="w-1/2 md:w-1/3 bg-stone-900 lg:rounded-full lg:aspect-square lg:p-20  aspect-auto rounded-none"/>
      </section>  
      <section className="bg-stone-900 w-full justify-center flex flex-wrap">
        <h1 className="text-4xl font-bold text-white">Skills</h1>
        <div className="w-full py-5"></div>
          <div className="drop-shadow-lg bg-stone-800 rounded-sm p-10 flex flex-wrap">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <SkillCard skillName="React" imageLink={Niall} />
            </div>
          </div>
      </section>


      <h1 className="min-h-full bg-stone-900 text-center text-4xl pb-12 text-white font-bold w-full py-40">Featured Projects</h1>  
      <section className="bg-stone-900 flex w-full justify-center">
        <div className="bg-stone-900 flex flex-wrap">
          <div className="gap-10 grid grid-cols-1 lg:grid-cols-3 bg-stone-900 lg:px-32 justify-center align-middle items-start w-full justify-items-center">
            <ProjectCard projecttype="Web App" githubLink="/" pageLink="/" projectName="test 1" imageLink={Niall} projectDescription="Officia et excepteur pariatur enim ullamco anim sint sunt sit ad minim aliquip sit." />
            <ProjectCard projecttype="Web App" githubLink="/" pageLink="/" projectName="test 2" imageLink={Niall} projectDescription="Officia et excepteur pariatur enim ullamco anim sint sunt sit ad minim aliquip sit. "  />
            <ProjectCard projecttype="Web App" githubLink="/" pageLink="/" projectName="test 3" imageLink={Niall} projectDescription="Ex velit ut occaecat amet aute esse sint consectetur velit aute tempor enim in. Proident nisi mollit deserunt duis amet eu. Cillum aliqua esse pariatur ipsum ut ut." />
          </div> 
        </div>
      </section>
      <div className="flex min-h-full bg-stone-900 py-10 justify-center w-full">
        <Link href={"/projects"} className="flex text-center px-5 py-3 rounded-md text-purple-500 border-solid border-purple-500 border hover:bg-purple-500 hover:text-white hover:ease-in transition-all">View All</Link>
      </div>

      <h1 className="min-h-full bg-stone-900 text-center text-4xl pb-12 text-white font-bold w-full py-40">Contact Me!</h1>  
      <section className="bg-stone-900 flex w-full justify-center">
        <div className="w-full sm:w-2/3 bg-stone-800 p-20 flex flex-wrap justify-center">
          <p className="text-center text-2xl pb-10">I'm looking for any job oppurtunities so please send me a message!</p>
          <div className="w-full" />
          <Link href={"/contact"} className="flex text-center px-5 py-3 text-2xl rounded-md text-purple-500 border-solid border-purple-500 border hover:bg-purple-500 hover:text-white hover:ease-in transition-all">Contact</Link>

        </div>
      </section>
    </main>
  );
}
