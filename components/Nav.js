import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import Typography from "./Typography";

function MobileNav() {
    return (
        <div className="bg-brand-pink h-16 flex justify-between items-center">
            <img 
                src="./menu.svg" 
                alt="Hamburger menu icon" 
                height="40" 
                width="40" 
                className="pl-4"
            />
            {/* <Logo width={150} height={80} /> */}
            <div className="justify-self-center">
                <img 
                    src="./logo.svg" 
                    alt="Kihara Electricals logo"
                    height="80"
                    width="80"
                    className="pt-5"
                />
            </div>
            
        </div>
    )
}
export default function NavBar() {
    const navLinks = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Contacts",
            path: "/contacts",
        },
        {
            name: "Services",
            path: "/services",
        },
        {
            name: "Portfolio",
            path: "/portfolio"
        },
    ];

    return (
        <MobileNav />
        // <div className="bg-brand-pink h-16 p-4 flex justify-between items-center">
        //     <div className="flex items-center">
        //         <img src="./logo.svg" alt="Kihara Electricals logo" width="80" height="80" className="pt-5" />
        //     </div>
        //     <div className="flex">
        //         {navLinks.map((item, index) => (
        //             <div className="h-16 w-auto mx-1 p-1  flex items-center justify-center" key={index}>
        //                 <Link href={item.path}>
        //                     <a
                            
        //                     className="text-black mr-3 hover:text-red-500"
        //                     >{item.name}
        //                     </a>
        //                 </Link>
        //             </div>
                    
        //         ))}
        //     </div>
        // </div>
    )
}