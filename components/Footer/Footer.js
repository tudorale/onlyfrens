import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

function Footer() {
    return (
        <div className={styles.footer}>
            <div>
                <Image src="/logo-black.png" width="210" height="90" alt="logo"></Image> 
                <p className={styles.footerCopyright}>@2021 all right reserved</p>
            </div>
            <div className={styles.footerLinks}>
                <a href="#" target="_blank">TWITTER</a>
                <a href="#" target="_blank">DISCORD</a>
            </div>
        </div>
    )
}

export default Footer
