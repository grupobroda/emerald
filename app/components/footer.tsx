import Link from "next/link";
import React from "react";

export default function Footer() {
    return(
        <footer className="wrapperCorporativo flex flex-col p-10">
            <Link href="/">
                <img src="https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/rqi6r1rzbopesgpc957q" className="w-60 object-contain" alt="Emerald Capital Logo" />
            </Link>
        </footer>
    )
}