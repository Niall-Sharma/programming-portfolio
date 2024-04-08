import Image from "next/image";
import Link from "next/link";
export default function FeaturedProject( {pageLink, projectName, imageLink, projectDescription}:any ) {
    return(
        <>
                <Link href={pageLink} className="group relative bg-slate-900 drop-shadow-xl">
                    <Image 
                    src={imageLink} 
                    alt="project image" 
                    height={900}
                    width={600}
                    className="group-hover:brightness-50 group-hover:ease-in transition-all rounded-md"
                    />
                    <div className=" bg-stone-800 justify-center items-center flex ">  
                        <div className="p-10">                  
                            <p className="text-4xl text-center uppercase font-bold text-white">
                                {projectName}
                            </p>
                            <p className="text-center opacity-0 group-hover:opacity-100 group-hover:ease-in transition-opacity py-4">{projectDescription}</p>
                        </div>
                    </div>
                </Link>
        </>
    );
}
