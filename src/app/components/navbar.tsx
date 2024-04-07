import NavButton from "./navbutton";

export default function Navbar() {
    return(
        <>
            <nav className="sticky top-0 drop-shadow-xl flex flex-wrap  py-3 bg-stone-900 items-right align-right justify-center">
                <div>
                    <ul className="flex flex-col lg:flex-row">
                        <NavButton pageLink="/" pageName="Home" />
                        <NavButton pageLink="/projects" pageName="Projects" />
                        <NavButton pageLink="/contact" pageName="Contact" />

                    </ul>
                </div>

            </nav>
        
        
        
        </>
    );
}
