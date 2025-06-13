import NavbarLogo from "./components/navbarLogo";
import NavbarLogin from "./components/navbarSignUp";
import NavItems from "./components/navbarItem";

const Navbar=()=>{
    return (
        <>
            <nav className="navbar">
                <NavbarLogo />
                <NavItems />
                <NavbarLogin />
            </nav>
        </>
    )
}

export default Navbar;