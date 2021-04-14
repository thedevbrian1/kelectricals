import NavBar from "./Nav";
import Footer from "./Footer";
export default function Layout({ children }) {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}