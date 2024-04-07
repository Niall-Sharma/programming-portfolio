import NavButton from "./navbutton";

export default function Navbar() {
    return(
        <>
            <nav className="sticky top-0 drop-shadow-xl flex flex-wrap justify-between py-3 bg-stone-900">
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
