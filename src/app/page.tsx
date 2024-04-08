import Image from "next/image";
import Niall from "../../public/dummy_1080x720_000000_a3b7e2.png"
export default function Home() {
  return (
    <main className="scrollbar-hide">
      <div className="flex items-center align-middle justify-center font-bold bg-center bg-cover to-black min-h-screen bg-gradient-radial from-purple-950 bg-fixed">
        <h1 className="text-white uppercase text-8xl"><span className="text-2xl">Hi! my name is </span><br /> Niall <br />Sharma </h1>
      </div>
      <div className="min-h-screen bg-stone-900 flex flex-wrap space-x-20 items-center justify-center">
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
    </main>
  );
}
