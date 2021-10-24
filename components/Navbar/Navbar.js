import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from "next/link"
import { useRouter } from 'next/router'

function Navbar() { 

    const router = useRouter()

    let status = false;


    const handleMobile = () => {
        status = !status;

        let mobile = document.querySelector(".mobile");
        let line1 = document.querySelector(".lineOne");
        let line2 = document.querySelector(".lineTwo");
        let line3 = document.querySelector(".lineThree");
        let desktop = document.querySelector(".desktop");
        let whiteLogo = document.querySelector(".whiteLogo");
        let blackLogo = document.querySelector(".blackLogo");

        if(status){
            mobile.style.height = "550px";
            desktop.style.background = "var(--blue)";
            desktop.style.borderColor = "rgba(255, 255, 255, 0.26)";
            whiteLogo.style.opacity = "0";
            blackLogo.style.opacity = "1";
            
            line1.style.background = "white";
            line2.style.background = "white";
            line3.style.background = "white";

            line2.style.transition = "all 300ms linear";
            line1.style.transition = "all 300ms linear";
            line3.style.transition = "all 300ms linear";

            line2.style.left = "-50px";
            line2.style.opacity = "0";
            line3.style.top = "-6px";
            line1.style.top = "10px";
            line1.style.transform = "rotate(45deg)";
            line3.style.transform = "rotate(-45deg)";
        }else {
            mobile.style.height = "0px";
            desktop.style.background = "transparent";
            desktop.style.borderColor = "#33333338";
            whiteLogo.style.opacity = "1";
            blackLogo.style.opacity = "0";

            line1.style.background = "var(--blue)";
            line2.style.background = "var(--blue)";
            line3.style.background = "var(--blue)";

            line2.style.left = "0px";
            line2.style.opacity = "1";
            line3.style.top = "0px";
            line1.style.top = "0px";
            line1.style.transform = "rotate(0deg)";
            line3.style.transform = "rotate(0deg)";
        }
    }

    return (
        <>
            <div className={styles.container + " " + "desktop"}>
                <Link passHref href="/">
                    <div className={styles.whiteLogo + " " + "whiteLogo"}>
                        <Image src="/logo.png" width="180" height="70" alt="logo"></Image>
                    </div>
                </Link>

               <Link passHref href="/">
                <div className={styles.blackLogo + " " + "blackLogo"}>
                        <Image src="/logo-black.png" width="165" height="69" alt="logo"></Image>
                    </div>
               </Link>
                
                <div className={styles.hamburger} onClick={() => handleMobile()}>
                    <div className={styles.line + " " + "lineOne"}></div>
                    <div className={styles.line + " " + "lineTwo"}></div>
                    <div className={styles.line + " " + "lineThree"}></div>
                </div>

                <div className={styles.links}>
                    <ul>
                        <Link passHref href="/">
                            <li className={router.pathname === "/" ? styles.active : ""}>
                                Home
                                <svg width="50" height="7" viewBox="0 0 58 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2.50001C28.5 1.49999 31.5 8.00002 56.5 2.50002" stroke="#09ADEE" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </li>
                        </Link>
                        <Link passHref href="/roadmap">
                            <li className={router.pathname === "/roadmap" ? styles.active : ""}>
                                Roadmap
                                <svg width="80" height="7" viewBox="0 0 88 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2.50001C43.0872 1.49999 47.7385 8.00002 86.5 2.50002" stroke="#09ADEE" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </li>
                            </Link>
                        <Link passHref href="/faq">
                            <li className={router.pathname === "/faq" ? styles.active : ""}>
                                FAQ
                                <svg width="33" height="7" viewBox="0 0 28 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2.50001C13.9128 1.49999 15.2615 8.00002 26.5 2.50002" stroke="#09ADEE" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </li>
                        </Link>
                        <Link passHref href="/connect"><li className={styles.button}>CONNECT A WALLET</li></Link>
                    </ul>
                </div>
            </div>

            <div className={styles.mobileContainer + " " + "mobile"}>
                <ul>
                    <Link passHref href="/"><li>Home</li></Link>
                    <Link passHref href="/roadmap"><li>Roadmap</li></Link>
                    <Link passHref href="/faq"><li>FAQ</li></Link>
                </ul>
                <div className={styles.connectBanner}>
                    <Link passHref href="/connect"><p>Connect a wallet</p></Link>
                </div>

                <div className={styles.imageWrapper}>
                    <img className={styles.navImage} src="/nav-image.png" alt="image"/>
                </div>
            </div>
        </>
    )
}

export default Navbar
