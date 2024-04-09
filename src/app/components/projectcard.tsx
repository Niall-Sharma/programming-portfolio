import Image from "next/image";
import Link from "next/link";
export default function ProjectCard( {pageLink, projectName, imageLink, projectDescription, githubLink}:any ) {
    return(
        <div className="group relative bg-stone-800 drop-shadow-xl  max-w-sm break-all">
                <Link href={pageLink} >
                        <Image 
                        src={imageLink} 
                        alt="project image" 
                        height={900}
                        width={600}
                        className="hover:brightness-50 hover:ease-in transition-all rounded-md w-full"
                        />
                </Link>
                <div>
                        <div className= "bg-stone-800 justify-center flex flex-grow">  
                            <div className="p-10"> 
                                <div className="flex flex-row-reverse">   
                                    <Link href={githubLink}>
                                        <svg className="flex right-0  hover:fill-purple-500 hover:ease-in-out transition-all rounded-full fill-transparent stroke-purple-500" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    </Link>
                                    <p className="text-4xl uppercase font-bold text-white break-normal left-0 mr-auto">
                                        {projectName}
                                    </p>
                                 </div>
                                    <p className="group-hover:opacity-100 group-hover:ease-in py-4 text-white mb-7">{projectDescription}</p>
                                <Link href={pageLink} className="absolute left-0 bottom-0 ml-3 mb-5 outline outline-purple-500 rounded-sm p-2 text-purple-500 hover:bg-purple-500 hover:text-white hover:ease-in transition-all">
                                    Read More
                                </Link>
                            </div>
                        </div>
                </div>       
        </div>
    );
}
