import Image from "next/image";
import Niall from "../../public/dummy_1080x720_000000_a3b7e2.png"
import FeaturedProject from "./components/featuredProject";
import Link from "next/link";
export default function Home() {
  return (
    <main className="scrollbar-hide">
      <div className="flex items-center align-middle justify-center font-bold bg-center bg-cover to-black min-h-screen bg-gradient-radial from-purple-950 bg-fixed">
        <h1 className="text-white uppercase text-8xl"><span className="text-2xl">Hi! my name is </span><br /> Niall <br />Sharma </h1>
      </div>
      <div className=" py-52 bg-stone-900 flex flex-wrap space-x-20 items-center justify-center">
          <div className="w-full md:w-1/3">
            <p className="text-white text-lg">Quis aliquip amet sit fugiat duis dolor. Eiusmod laboris est laborum aliquip velit eiusmod. Qui nostrud reprehenderit consectetur sunt velit deserunt nisi et esse nulla ipsum. Quis labore esse occaecat nulla mollit in proident. Do sunt mollit nulla Lorem irure incididunt non in. Do est exercitation ea cupidatat sunt ullamco. Minim ut do irure labore irure aute consectetur esse sit eiusmod ex sunt sunt amet.</p>
          </div>
            <Image 
            src={Niall} 
            width={1920} 
            height={1080} 
            alt="Picture of Niall Sharma"
            className="w-full md:w-1/3"/>
      </div>  
      <h1 className="min-h-full bg-stone-900 text-center text-6xl pb-12">Featured Projects</h1>
      <div
      className="flex flex-col lg:flex-row bg-stone-900 lg:px-32 lg:space-x-10">

        <FeaturedProject pageLink="/" projectName="test 1" imageLink={Niall} projectDescription="Officia et excepteur pariatur enim ullamco anim sint sunt sit ad minim aliquip sit." />
        <FeaturedProject pageLink="/" projectName="test 2" imageLink={Niall} projectDescription="Officia et excepteur pariatur enim ullamco anim sint sunt sit ad minim aliquip sit."  />
        <FeaturedProject pageLink="/" projectName="test 3" imageLink={Niall} projectDescription="Officia et excepteur pariatur enim ullamco anim sint sunt sit ad minim aliquip sit." />

      </div> 
      <div className="flex min-h-full bg-stone-900 py-10 justify-center">
        <Link href={"/projects"} className="flex text-center px-5 py-3 rounded-md text-purple-500 border-solid border-purple-500 border hover:bg-purple-500 hover:text-white hover:ease-in transition-all">See More</Link>
      </div>
    </main>
  );
}
