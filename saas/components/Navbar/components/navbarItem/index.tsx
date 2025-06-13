"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {For} from "@yookue/react-condition";

interface  INavItems{
    label:string;
    href:string;
}

const navItems:INavItems[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Companions",
        href: "/companions",
    },
    {
        label: "My Journey",
        href: "/my-journey",
    },
];

const NavItems=()=>{
    const pathName=usePathname();
    return (
        <>
            <nav className="flex items-center gap-4">
                <For of={navItems} render={(item:INavItems,index:number)=>{
                    const {label,href}=item;
                    return (
                            <Link href={href} key={label}
                                  className={cn(pathName===href && `text-primary font-semibold`)}>
                                {label}
                            </Link>
                    )
                }}/>
            </nav>
        </>
    )
}

export default NavItems;