import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import styles from '../styles/Roadmap.module.css'
import Image from 'next/image'
import Footer from '../components/Footer/Footer';

function roadmap() {
    return (
        <div className={styles.roadmap}>
            <Navbar/>

            <div className={styles.extraWrapper}>
                <h1>General<br/>Roadmap</h1>
                <div className={styles.roadmapGrid}>
                    <div className={styles.image}>
                        <Image quality="100" alt="roadmap illustration" src="/roadmap.png" width="572" height="1050"></Image>
                    </div>
                    <div className={styles.roadmapText}>
                        <svg width="34" height="1172" viewBox="0 0 34 1172" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="17" y="33" width="1" height="1137" fill="#09ADEE"/>
                            <circle cx="17" cy="17" r="15" stroke="#09ADEE" strokeWidth="4"/>
                            <circle cx="17" cy="443" r="12" fill="#09ADEE"/>
                            <circle cx="17" cy="766" r="12" fill="#09ADEE"/>
                            <circle cx="17" cy="909" r="12" fill="#09ADEE"/>
                            <circle cx="17" cy="1160" r="12" fill="#09ADEE"/>
                        </svg>

                        <div className={styles.path}>
                            <div className={styles.pathOne}>
                                <h1>Q4 2021</h1>
                                <ul>
                                    <li>Social Media Campaign</li>
                                    <li>Twitter, YouTube, Discord, Instagram, Reddit, Telegram, Facebook</li>
                                    <li>Rarity Index</li>
                                    <li>Mint Frens</li>
                                    <li>Secondary marketplace listings</li>
                                    <li>MemeMarketplace, Solanart.io, Alpha.art, Solsea</li>
                                    <li>HowRare.Is Integration</li>
                                </ul>
                            </div>
                            <div className={styles.pathTwo}>
                                <h1>Q1 2022</h1>
                                <ul>
                                    <li>Airdrops for Frens</li>
                                    <li>Community building powered through partnership with MemeMarketplace</li>
                                    <li>FrenDAO</li>
                                    <li>Mint Frens</li>
                                    <li>Expand development team</li>
                                    <li>Continue development of OnlyFrens social network</li>
                                </ul>
                            </div>
                            <div className={styles.pathThree}>
                                <h1>Q2 2022</h1>
                                <ul>
                                    <li>Launch OnlyFrens social network</li>
                                </ul>
                            </div>
                            <div className={styles.pathFour}>
                                <h1>Q3 2022</h1>
                                <ul>
                                    <li>Partnerships and collaborations with other projects and influencers</li>
                                    <li>Celebrity and influencer community involvement</li>
                                    <li>Continue OnlyFrens marketing campaign </li>
                                </ul>
                            </div>
                            <div className={styles.pathFive}>
                                <h1>Q4 2022 and Beyond</h1>
                                <ul>
                                    <li>Eternal Gains</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{marginTop: "100px"}}>
                <Footer />
            </div>
        </div>
    )
}

export default roadmap
