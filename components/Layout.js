import { useEffect, useState } from "react";
import NavBar from "./Nav";
import Footer from "./Footer";
import Drawer from "./Drawer";
export default function Layout({ children }) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ?setIsMobile(true)
                :setIsMobile(false);
        };
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness());
    }, []);
    return (
        <>
            <header>
                <NavBar mobileView={isMobile} />
            </header>
            
           <main>
                {children}
           </main>
            
            <footer>
                <Footer />
            </footer>
            
        </>
    )
}