import Image from "next/image";
import Link from "next/link";
import Contact from "../../components/contact";
import Layout from "../../components/layout";
import Particles from "../../components/particles";
import WorkNumbers from "../../components/workNumbers";
import styles from "../../styles/about.module.scss";
import { ROUTES } from "../../common/routes";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Index() {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Packult - Ideate | create | Deliver Packaging Services </title>
        <meta
          name="description"
          content="Learn more about Packult and our commitment to creating custom packaging solutions that help businesses succeed. Our innovative designs and sustainable solutions are changing the industry."
        />
        <link rel="canonical" href="https://packult.com/about-us" />
        <link
          rel="alternate"
          href="https://packult.com/about-us"
          hreflang="en"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://packult.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About Us",
                  item: "https://packult.com/about",
                },
              ],
            }),
          }}
        />
      </Head>

      <div className={styles.lap_particles}>
        <Particles
          color={"rgba(241, 198, 68, 0.6)"}
          height="50vw"
          width="150vw"
          top="10vw"
          left="90vw"
          blur="10vw"
        />
        <Particles
          color={"#A3DCFF"}
          height="50vw"
          width="150vw"
          top="110vw"
          left="-140vw"
          blur="10vw"
        />
        <Particles
          color={"rgba(187, 128, 255, 0.6)"}
          height="50vw"
          width="150vw"
          top="200vw"
          left="-130vw"
          blur="5vw"
        />
      </div>
      <div className={styles.tablet_particles}>
        <Particles
          color={"rgba(241, 198, 68, 0.6)"}
          height="50vw"
          width="150vw"
          top="10vw"
          left="90vw"
          blur="10vw"
        />
        <Particles
          color={"#A3DCFF"}
          height="50vw"
          width="150vw"
          top="110vw"
          left="-140vw"
          blur="10vw"
        />
        <Particles
          color={"rgba(187, 128, 255, 0.6)"}
          height="50vw"
          width="150vw"
          top="200vw"
          left="90vw"
          blur="5vw"
        />
      </div>
      <div className={styles.mobile_particles}>
        <Particles
          color={"rgba(241, 198, 68, 0.6)"}
          height="50vw"
          width="150vw"
          top="10vw"
          left="90vw"
          blur="10vw"
        />
        <Particles
          color={"#A3DCFF"}
          height="50vw"
          width="150vw"
          top="150vw"
          left="-140vw"
          blur="10vw"
        />
        <Particles
          color={"rgba(187, 128, 255, 0.6)"}
          height="50vw"
          width="150vw"
          top="240vw"
          left="90vw"
          blur="5vw"
        />
      </div>

      <main className={styles.about}>
        <section className={styles.section1}>
          <div>
            <h4>About Us</h4>
            <h1>
              {" "}
              <span>
                {" "}
                <div className={styles.background}></div> Your trusted partner
              </span>{" "}
              in the evolution towards world-class packaging solutions
            </h1>
            <p>
              Our team has strong end to end capabilities across Creatives,
              Artworks & Graphics, Packaging Development, Value improvement,
              Sourcing Excellence & Operational excellence, which makes it
              easier for us to address our clients diverse demands. Starting
              from ideation, product research, development, design, feasibility,
              supply chain management and execution, our team assist our clients
              at every step.
            </p>
            <button
              onClick={() => {
                router.push(ROUTES.GALLERY);
              }}
            >
              View our work
            </button>
          </div>
          <div>
            <Image
              src={"/assets/images/about/about (1).png"}
              alt="coffe"
              width={1000}
              height={1000}
            />
          </div>
        </section>
        <section className={styles.section2}>
          <div className={styles.img_holder}>
            <Image
              src={"/assets/images/about/about (2).png"}
              alt="coffe"
              width={1000}
              height={1000}
            />
            <Image
              src={"/assets/images/about/about (3).png"}
              alt="coffe"
              width={1000}
              height={1000}
            />
          </div>
          <div>
            <h4>Why Us</h4>
            <h1>
              {" "}
              <span>Unmatched breadth</span> of offerings encompassing every
              aspect of Packaging
            </h1>
            <p>
              With innovation and expertise at heart and equipped with the best
              of capabilities, we make sure that our clients are offered the
              best of the best. Our unique approach in spheres of creation,
              development and execution makes us the best at what we do.
            </p>
          </div>
        </section>
        <section className={styles.section3}>
          <h4>Stake Holders</h4>
          <h1>
            {" "}
            Meet our <span>stakeholders</span>
          </h1>
          <div className={styles.content}>
            <div className={styles.LinkedinImage}>
              <Image
                src={"/assets/images/about/about (4).png"}
                alt="coffe"
                width={1000}
                height={1000}
              />
              <div className={styles.NameLink}>
                <h3>Ulrich Reifenhäuser</h3>
                <Link
                  href={
                    "https://www.linkedin.com/in/ulrich-reifenhauser-plastics-expert-extrusion/?trk=public-profile-join-page"
                  }
                >
                  Linkedin{" "}
                  <span>
                    <Image
                      src={"/assets/images/about/about (9).png"}
                      width={1000}
                      height={1000}
                      alt="arrow"
                    />
                  </span>{" "}
                </Link>
              </div>
            </div>
            <div className={styles.LinkedinImage}>
              <Image
                src={"/assets/images/about/about (5).png"}
                alt="coffe"
                width={1000}
                height={1000}
              />
              <div className={styles.NameLink}>
                <h3>Manish Mehta</h3>
                <Link
                  href={
                    "https://www.linkedin.com/in/manish-mehta-886b557/?originalSubdomain=in"
                  }
                >
                  Linkedin{" "}
                  <span>
                    <Image
                      src={"/assets/images/about/about (9).png"}
                      width={1000}
                      height={1000}
                      alt="arrow"
                    />
                  </span>{" "}
                </Link>
              </div>
            </div>
            <div className={styles.LinkedinImage}>
              <Image
                src={"/assets/images/about/about (6).png"}
                alt="coffe"
                width={1000}
                height={1000}
              />
              <div className={styles.NameLink}>
                <h3>Amitav Ray</h3>
                <Link
                  href={
                    "https://www.linkedin.com/company/packult-studio-private-limited/"
                  }
                >
                  Linkedin{" "}
                  <span>
                    <Image
                      src={"/assets/images/about/about (9).png"}
                      width={1000}
                      height={1000}
                      alt="arrow"
                    />
                  </span>{" "}
                </Link>
              </div>
            </div>
            <div className={styles.LinkedinImage}>
              <Image
                src={"/assets/images/about/about (7).png"}
                alt="coffe"
                width={1000}
                height={1000}
              />
              <div className={styles.NameLink}>
                <h3>Dr. Brend Kunze</h3>
                <Link
                  href={
                    "https://www.linkedin.com/company/packult-studio-private-limited/"
                  }
                >
                  Linkedin{" "}
                  <span>
                    <Image
                      src={"/assets/images/about/about (9).png"}
                      width={1000}
                      height={1000}
                      alt="arrow"
                    />
                  </span>{" "}
                </Link>
              </div>
            </div>
            <div className={styles.LinkedinImage}>
              <Image
                src={"/assets/images/about/about (8).png"}
                alt="coffe"
                width={1000}
                height={1000}
              />
              <div className={styles.NameLink}>
                <h3>Esq. Suresh Gupta</h3>
                <Link
                  href={
                    "https://www.linkedin.com/company/packult-studio-private-limited/"
                  }
                >
                  Linkedin{" "}
                  <span>
                    <Image
                      src={"/assets/images/about/about (9).png"}
                      width={1000}
                      height={1000}
                      alt="arrow"
                    />
                  </span>{" "}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WorkNumbers />
      <Contact />
    </Layout>
  );
}
