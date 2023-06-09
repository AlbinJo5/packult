import Image from "next/image";
import Link from "next/link";
import Contact from "../../components/contact";
import Layout from "../../components/layout";
import WorkNumbers from "../../components/workNumbers";
import styles from "../../styles/about.module.scss";

export default function index() {
    return (
        <Layout>
            <main className={styles.about} >
                <section className={styles.section1} >
                    <div>
                        <h4>About Us</h4>
                        <h1> <span> <div className={styles.background}></div> Unique</span> Business Ideas for your Digital Business</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum a dicta corrupti iure accusamus nemo eaque doloremque earum, possimus quas iste deserunt veritatis omnis nisi velit adipisci quia totam impedit.</p>
                        <button>View our work</button>
                    </div>
                    <div>
                        <Image src={"/assets/images/about/about (1).png"} alt="coffe" width={1000} height={1000} />
                    </div>
                </section>
                <section className={styles.section2} >
                    <div className={styles.img_holder} >
                        <Image src={"/assets/images/about/about (2).png"} alt="coffe" width={1000} height={1000} />
                        <Image src={"/assets/images/about/about (3).png"} alt="coffe" width={1000} height={1000} />
                    </div>
                    <div>
                        <h4>Why Us</h4>
                        <h1> <span>Unique</span> Business Ideas for your Digital Business</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum a dicta corrupti iure accusamus nemo eaque doloremque earum, possimus quas iste deserunt veritatis omnis nisi velit adipisci quia totam impedit.</p>
                    </div>

                </section>
                <section className={styles.section3}>
                    <h4>Stake Holders and Top Management</h4>
                    <h1> Meet our <span>stakeholders</span> and Top Management</h1>
                    <div className={styles.content} >
                        <div className={styles.LinkedinImage} >
                            <Image src={"/assets/images/about/about (4).png"} alt="coffe" width={1000} height={1000} />
                            <div className={styles.NameLink} >
                                <h3>Ulrich Reifenhäuser</h3>
                                <Link href={"linkedin.com"} >Linkedin <span><Image src={"/assets/images/about/about (9).png"} width={1000} height={1000} alt="arrow" /></span> </Link>

                            </div>
                        </div>
                        <div className={styles.LinkedinImage} >
                            <Image src={"/assets/images/about/about (8).png"} alt="coffe" width={1000} height={1000} />
                            <div className={styles.NameLink} >
                                <h3>Manish Mehta</h3>
                                <Link href={"linkedin.com"} >Linkedin <span><Image src={"/assets/images/about/about (9).png"} width={1000} height={1000} alt="arrow" /></span> </Link>

                            </div>
                        </div>
                        <div className={styles.LinkedinImage} >
                            <Image src={"/assets/images/about/about (5).png"} alt="coffe" width={1000} height={1000} />
                            <div className={styles.NameLink} >
                                <h3>Amitav Ray</h3>
                                <Link href={"linkedin.com"} >Linkedin <span><Image src={"/assets/images/about/about (9).png"} width={1000} height={1000} alt="arrow" /></span> </Link>

                            </div>
                        </div>
                        <div className={styles.LinkedinImage} >
                            <Image src={"/assets/images/about/about (6).png"} alt="coffe" width={1000} height={1000} />
                            <div className={styles.NameLink} >
                                <h3>Nippon Paper Industries</h3>
                                <Link href={"linkedin.com"} >Linkedin <span><Image src={"/assets/images/about/about (9).png"} width={1000} height={1000} alt="arrow" /></span> </Link>

                            </div>
                        </div>
                        <div className={styles.LinkedinImage} >
                            <Image src={"/assets/images/about/about (7).png"} alt="coffe" width={1000} height={1000} />
                            <div className={styles.NameLink} >
                                <h3>Esq. Suresh Gupta</h3>
                                <Link href={"linkedin.com"} >Linkedin <span><Image src={"/assets/images/about/about (9).png"} width={1000} height={1000} alt="arrow" /></span> </Link>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <WorkNumbers />
            <Contact />
        </Layout>
    )
}
