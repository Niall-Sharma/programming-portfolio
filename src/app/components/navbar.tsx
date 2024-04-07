import NavButton from "./navbutton";

export default function Navbar() {
    return(
        <>
            <nav className="sticky top-0 drop-shadow-xl flex flex-wrap bg-black flex-start justify-between">
                <div>
                    <ul className="flex flex-col lg:flex-row">
                        <NavButton pageLink="/" pageName="Home" />
                        <NavButton pageLink="/projects" pageName="Projects" />

                    </ul>
                </div>

            </nav>
        
        
        
        </>
    );
}
