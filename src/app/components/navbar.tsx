import NavButton from "./navbutton";

export default function Navbar() {
    return(
        <>
            <nav>
                <div>
                    <ul>
                        <NavButton pageLink="/" pageName="Home" />
                        <NavButton pageLink="/projects" pageName="Projects" />

                    </ul>
                </div>

            </nav>
        
        
        
        </>
    );
}
