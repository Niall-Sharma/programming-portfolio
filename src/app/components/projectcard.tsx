import Image from "next/image";
import Link from "next/link";
export default function ProjectCard( {pageLink, projectName, imageLink}:any ) {
    return(
        <>
                <Link href={pageLink} className="leading-snug  group relative">
                    <Image 
                    src={imageLink} 
                    alt="project image" 
                    height={600}
                    width={600}
                    className="group-hover:brightness-50"
                    />
                    <div className="opacity-0 group-hover:opacity-100 absolute inset-0 justify-center items-center flex">                    
                        <p className="text-4xl text-center uppercase font-bold text-white">
                            {projectName}
                        </p>
                    </div>
                </Link>
        </>
    );
}
