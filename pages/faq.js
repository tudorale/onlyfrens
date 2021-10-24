import React from 'react'
import styles from "../styles/Faq.module.css"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

function faq() {

    let statusOne = false;
    let statusTwo = false;
    let statusThree = false;
    let statusFour = false;
    let statusFive = false;
    let statusSix = false;
    let statusSeven = false;
    let statusEight = false;

    const handleFaq = (className, lineO, lineT, status) => { /* must added parameters */
        
        let s;

        if(status == "statusOne"){/* future dev note: a really hard coded script to check which one to open/close */
            s = !statusOne;
            statusOne = !statusOne;
        }else if(status == "statusTwo"){
            s = !statusTwo;
            statusTwo = !statusTwo;
        }else if(status == "statusThree"){
            s = !statusThree;
            statusThree = !statusThree;
        }else if(status == "statusFour"){
            s = !statusFour;
            statusFour = !statusFour;
        }else if(status == "statusFive"){
            s = !statusFive;
            statusFive = !statusFive;
        }else if(status == "statusSix"){
            s = !statusSix;
            statusSix = !statusSix;
        }else if(status == "statusSeven"){
            s = !statusSeven;
            statusSeven = !statusSeven;
        }else if(status == "statusEight"){
            s = !statusEight;
            statusEight = !statusEight;
        }
        

        let content = document.querySelector(`.${className}`);
        let lineOne = document.querySelector(`.${lineO}`);
        let lineTwo = document.querySelector(`.${lineT}`);

        if(s){
            content.style.display = "block"
            lineOne.style.transform = "rotate(135deg)"
            lineTwo.style.transform = "rotate(-135deg)"

        }else{
            content.style.display = "none";
            lineOne.style.transform = "rotate(0deg)"
            lineTwo.style.transform = "rotate(90deg)"
        } 
    }

    return (
        <div className={styles.faq}>
            <Navbar/>

            <div className={styles.faqContent}>
                <h1>FAQ</h1>

                <div className={styles.faqWrapper}>
                    <div className={styles.question}>
                        <div className={styles.upper} onClick={() => handleFaq("faqOne", "lOneOne", "lOneTwo", "statusOne")}>
                            <h2>How do I become OG?</h2>
                            <div className={styles.lines}>
                                <div className={styles.lineOne + " " + "lOneOne"}></div>
                                <div className={styles.lineTwo + " " + "lOneTwo"}></div>
                            </div>
                        </div>

                        <div className={styles.content + " " + "faqOne"}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>

                    <div className={styles.question}>
                        <div className={styles.upper} onClick={() => handleFaq("faqTwo", "lTwoOne", "lTwoTwo", "statusTwo")}>
                            <h2>What is the total supply of Frens?</h2>
                            <div className={styles.lines}>
                                <div className={styles.lineOne + " " + "lTwoOne"}></div>
                                <div className={styles.lineTwo + " " + "lTwoTwo"}></div>
                            </div>
                        </div>

                        <div className={styles.content + " " + "faqTwo"}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>

                    <div className={styles.question}>
                        <div className={styles.upper} onClick={() => handleFaq("faqThree", "lThreeOne", "lThreeTwo", "statusThree")}>
                            <h2>How much is it to mint a Fren?</h2>
                            <div className={styles.lines}>
                                <div className={styles.lineOne + " " + "lThreeOne"}></div>
                                <div className={styles.lineTwo + " " + "lThreeTwo"}></div>
                            </div>
                        </div>

                        <div className={styles.content + " " + "faqThree"}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>

                    <div className={styles.question}>
                        <div className={styles.upper} onClick={() => handleFaq("faqFour", "lFourOne", "lFourTwo", "statusFour")}>
                            <h2>Can anyone mint a Fren?</h2>
                            <div className={styles.lines}>
                                <div className={styles.lineOne + " " + "lFourOne"}></div>
                                <div className={styles.lineTwo + " " + "lFourTwo"}></div>
                            </div>
                        </div>

                        <div className={styles.content + " " + "faqFour"}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>

                    <div className={styles.question}>
                        <div className={styles.upper} onClick={() => handleFaq("faqFive", "lFiveOne", "lFiveTwo", "statusFive")}>
                            <h2>When can I mint Frens?</h2>
                            <div className={styles.lines}>
                                <div className={styles.lineOne + " " + "lFiveOne"}></div>
                                <div className={styles.lineTwo + " " + "lFiveTwo"}></div>
                            </div>
                        </div>

                        <div className={styles.content + " " + "faqFive"}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>

                    <div className={styles.question}>
                        <div className={styles.upper} onClick={() => handleFaq("faqSix", "lSixOne", "lSixTwo", "statusSix")}>
                            <h2>What can I do once I have Frens?</h2>
                            <div className={styles.lines}>
                                <div className={styles.lineOne + " " + "lSixOne"}></div>
                                <div className={styles.lineTwo + " " + "lSixTwo"}></div>
                            </div>
                        </div>

                        <div className={styles.content + " " + "faqSix"}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>

                    <div className={styles.question}>
                        <div className={styles.upper} onClick={() => handleFaq("faqSeven", "lSevenOne", "lSevenTwo", "statusSeven")}>
                            <h2>What is the FrenDAO?</h2>
                            <div className={styles.lines}>
                                <div className={styles.lineOne + " " + "lSevenOne"}></div>
                                <div className={styles.lineTwo + " " + "lSevenTwo"}></div>
                            </div>
                        </div>

                        <div className={styles.content + " " + "faqSeven"}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>

                    <div className={styles.question}>
                        <div className={styles.upper} onClick={() => handleFaq("faqEight", "lEightOne", "lEightTwo", "statusEight")}>
                            <h2>Why mint a Fren?</h2>
                            <div className={styles.lines}>
                                <div className={styles.lineOne + " " + "lEightOne"}></div>
                                <div className={styles.lineTwo + " " + "lEightTwo"}></div>
                            </div>
                        </div>

                        <div className={styles.content + " " + "faqEight"}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>

                </div>
            </div>
            
            <div style={{marginTop: "150px"}}><Footer/></div>
        </div>
    )
}

export default faq
