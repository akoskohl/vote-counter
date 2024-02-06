import Link from "next/link";
import React from "react";

const NavBar = () => {
    return (
        <nav className="h-20 w-full border-b-2 flex items-center justify-between p-4">
            <ul className="flex ml-2 ">
                <li className="p2 cursor-pointer">
                    <Link href="/">🗳️Home</Link>
                </li>
                <li className="p2 cursor-pointer ml-4">
                    <Link href="/profile">Profile</Link>
                </li>
                <li className="p2 cursor-pointer ml-4">
                    <Link href="/about">About</Link>
                </li>
            </ul>
            <ul className="flex">
                <li className="p2 cursor-pointer mr-4">
                    <Link href="/about">Login</Link>
                </li>
                <li className="p2 cursor-pointer">
                    <Link href="/about">Sign up</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;