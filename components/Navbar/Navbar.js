import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from "next/link"
import { useRouter } from 'next/router'
function Navbar() {
    const router = useRouter()
    console.log(router.pathname)

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="/logo.png" width="180" height="70" alt="logo"></Image>
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
    )
}

export default Navbar
