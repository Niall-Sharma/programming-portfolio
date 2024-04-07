import Image from "next/image";
import Niall from "../../public/dummy_1080x720_000000_a3b7e2.png"
export default function Home() {
  return (
    <main className="scrollbar-hide">
      <div className="flex items-center align-middle justify-center text-8xl font-bold bg-center bg-cover to-black h-screen bg-gradient-radial from-purple-950 bg-fixed">
        <h1 className="text-center text-white uppercase">Niall <br />Sharma</h1>

      </div>
      <div className="p-20 bg-stone-900 flex flex-wrap">
          <div className="w-full md:w-1/2">
            <p className="text-white text-xl">Quis aliquip amet sit fugiat duis dolor. Eiusmod laboris est laborum aliquip velit eiusmod. Qui nostrud reprehenderit consectetur sunt velit deserunt nisi et esse nulla ipsum. Quis labore esse occaecat nulla mollit in proident. Do sunt mollit nulla Lorem irure incididunt non in. Do est exercitation ea cupidatat sunt ullamco. Minim ut do irure labore irure aute consectetur esse sit eiusmod ex sunt sunt amet.</p>
          </div>
            <Image 
            src={Niall} 
            width={1920} 
            height={1080} 
            alt="Picture of Niall Sharma"
            className="w-full md:w-1/2"/>
      </div>   
    </main>
  );
}
