import Image from "next/image";
export default function SkillCard( {skillName, imageLink}:any ) {
    return(
        <div className="group relative bg-stone-800 drop-shadow-xl  max-w-sm break-all hover:scale-105 hover:ease-in-out transition-transform duration-500">
                    <Image 
                    src={imageLink} 
                    alt="project image" 
                    height={900}
                    width={600}
                    className="hover:brightness-50 hover:ease-in transition-all rounded-md w-full"
                    />
                    <div className="flex flex-row-reverse justify-center items-center align-middle w-full">   
                        <p className="absolute text-4xl uppercase font-bold text-white break-normal">
                            {skillName}
                        </p>
                    </div>
        </div>
    );
}
