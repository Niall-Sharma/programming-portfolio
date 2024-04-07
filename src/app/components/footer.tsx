import Link from "next/link";
var currentTime = new Date()

var year = currentTime.getFullYear()

export default function Footer() {
    return(
        <>
        <footer className="p-20">
            <div className="flex justify-between items-center">
                <ul className="flex flex-col lg:flex-row">
                    

                </ul>
            </div>
            <hr />
            <h1 className="text-center text-6xl mt-5">© {year}</h1>
        </footer>
        </>
    );
}
