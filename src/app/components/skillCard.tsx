import Image from "next/image";
export default function SkillCard( {skillName, imageLink}:any ) {
    return(
        <div className="group relative bg-stone-800 drop-shadow-xl  max-w-sm break-all hover:scale-105 hover:ease-in-out transition-transform duration-500">
                    <Image 
                    src={imageLink} 
                    alt="project image" 
                    height={1920}
                    width={1080}
                    className="hover:ease-in transition-all rounded-md w-full h-full hover:brightness-50"
                    />
                    <div className="flex justify-center items-center w-full align-middle absolute text-center bottom-1/2 opacity-0 group-hover:opacity-100">   
                        <p className="absolute text-4xl uppercase font-bold text-white">
                            {skillName}
                        </p>
                    </div>
        </div>
    );
}
