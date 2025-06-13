import Link from "next/link";
import Image from "next/image";

const NavbarLogo=()=>{
    return (
        <>
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image src="/images/logo.svg" alt='logo' width={46} height={44}/>
                </div>
            </Link>
        </>
    )
}
export default NavbarLogo;