/* eslint-disable react/no-unescaped-entities */
import Layout from '../components/layout'
import styles from "../styles/home.module.scss"
import Image from 'next/image'
import Heading from '../components/heading'
import Link from 'next/link'
import { ROUTES } from '../common/routes'
import Carousel from 'nuka-carousel'
import WorkNumbers from '../components/workNumbers'
import Contact from '../components/contact'
import BlogCarousel from '../components/blogCarousel'
import Particles from '../components/particles'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import CountUp from 'react-countup';

export default function Home() {

  const [data, setdata] = useState([])
  const router = useRouter()

  useEffect(() => {
    //   fetch blog data using api
    fetch('/api/our-work/get')
      .then(res => res.json())
      .then(data => {
        // reverse the array to get latest blog first
        data.reverse()
        setdata(data)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <Layout >
      <div className={styles.lap_particles}>
        <Particles color="#C2D950" height="50vw" width="150vw" top="150vh" left="90vw" blur='10vw' />
        <Particles color="#FFD7EA" height="30vw" width="150vw" top="290vh" left="-135vw" blur='5vw' />
        <Particles color="rgba(241, 198, 68,0.7)" height="50vw" width="150vw" top="440vh" left="90vw" blur='10vw' />
        <Particles color="#FFD7EA" height="30vw" width="150vw" top="620vh" left="-135vw" blur='5vw' />
      </div>
      <div className={styles.mobile_particles}>
        <Particles color="#C2D950" height="50vw" width="150vw" top="90vh" left="90vw" blur='10vw' />
        <Particles color="#FFD7EA" height="50vw" width="150vw" top="130vh" left="-135vw" blur='5vw' />
        <Particles color="rgba(241, 198, 68,0.7)" height="50vw" width="150vw" top="180vh" left="90vw" blur='10vw' />
        <Particles color="#FFD7EA" height="30vw" width="150vw" top="240vh" left="-135vw" blur='5vw' />
      </div>

      <div className={styles.langingPage} >
        <div className={styles.scroll_down}>
          <Image src="/assets/images/home/mouse.png" width={1000} height={1000} alt="scroll_down" />
          <p>SCROLL DOWN</p>
        </div>
      </div>
      <div className={styles.intro} >
        <div className={styles.bgRectangle}></div>
        <div className={styles.content} >
          <div className={styles.brand} data-aos="fade-up" >
            <Image src="/assets/images/home/brandOwners.png" width={1000} height={1000} alt="Brand Owners" />
            <div className={styles.brandCard} data-aos="fade-up" data-aos-duration="1000">
              <Link href={ROUTES.BRAND_OWNERS} >
                <h3>Brand Owners<span className={styles.arrow} > <Image src="/assets/icons/arrow45.svg" height={10} width={10} alt="arrow45" /> </span></h3>
              </Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quia vero qui, hic molestias accusamus blanditiis dolores praesentium repudiandae. Quis, enim voluptatum excepturi itaque distinctio porro tempora aspernatur eum aliquam!</p>
            </div>
          </div>
          <div className={styles.brand} data-aos="fade-up" >
            <Image src="/assets/images/home/packagingConverters.png" width={1000} height={1000} alt="Packaging Converters" />
            <div className={styles.brandCard} data-aos="fade-up" data-aos-duration="1000">
              <Link href={ROUTES.PACKAGING_CONVERTERS} >
                <h3>Packaging Converters<span className={styles.arrow} > <Image src="/assets/icons/arrow45.svg" height={10} width={10} alt="arrow45" /> </span></h3>
              </Link>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore ut amet qui reprehenderit velit corrupti magnam fugit, perferendis, quia sapiente a libero ullam, architecto perspiciatis dolor consequatur quas voluptatum? Aliquid.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.vision_mission} >
        <Heading heading="Vision and Mission" line={true} />
        <div className={styles.content} >
          <Image data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" src="/assets/images/home/vision.png" alt='vision' height={1000} width={1000} />
          <h2>OUR VISION</h2>
          <ul data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <li>To Provide a platform for sustanable and Innovative packaging solution.</li>
            <li>Always try to make sustanble solutions.</li>
            <li>Disruptive and value for money packaging solution.</li>
          </ul>
        </div>
        <div className={styles.content} >
          <Image data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" src="/assets/images/home/mission.png" alt='vision' height={1000} width={1000} />
          <h2>OUR MISSION</h2>
          <ul data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <li>Close contact with brand owners, converters, and raw material suppliers.</li>
            <li>Using the appropriate chemistry, process expertise with the right machine technology for cost-optimal solutions.</li>
            <li>To ensure end users get the best experience and expertise at an affordable cost.</li>
          </ul>
        </div>
      </div>
      <div className={styles.gallery} >
        <Heading heading="Gallery" line={true} />
        <div className={styles.content} >
          <h3>Some more of our work, social posts many more things...</h3>

          <div className={styles.scroll}>
            {
              data.map((item, index) => {
                return (
                  <Image data-aos="fade-up" onClick={() => { router.push(ROUTES.OUR_WORKS + item.id) }} key={index} src={item.image2} alt={item.title} width={1000} height={1000} />
                )
              })
            }

          </div>
          <div className={styles.all_services_button} >
            <hr></hr>
            <Link href={ROUTES.GALLERY}>View all Images</Link>
            <hr></hr>
          </div>
        </div>
      </div>
      <div className={styles.services} >
        <Heading heading="Services" line={true} />
        <div className={styles.component} >
          <div className={styles.content} >
            <div>
              <h2>Packaging Innovation<span className={styles.arrow} > <Image src="/assets/icons/arrow2.png" height={1000} width={1000} alt="arrow2" /> </span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ea eligendi! Iste beatae perspiciatis laborum suscipit accusamus animi facilis magni, rem amet dolor, officiis ipsam unde molestiae ea enim, itaque corporis ratione. Quaerat itaque facere fugit ipsam magnam debitis quos! Ab ipsam qui labore culpa? Eos quis aut quaerat autem.</p>
              <ul>
                <li> <Link href={"/"}> Graphic Design</Link></li>
                <li><Link href={"/"}>Structural Engineering</Link></li>
              </ul>
            </div>
            <Image data-aos="fade-left" src="/assets/images/home/service.png" width={1000} height={1000} alt="Service" />
          </div>
          <hr />
        </div>
        <div className={styles.component} >
          <div className={styles.content} >
            <div>
              <h2 onClick={() => {
                router.push(ROUTES.PACKAGING_SOLUTIONS)
              }} >Sustainable Solution<span className={styles.arrow} > <Image src="/assets/icons/arrow green.png" height={1000} width={1000} alt="arrow green" /> </span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ea eligendi! Iste beatae perspiciatis laborum suscipit accusamus animi facilis magni, rem amet dolor, officiis ipsam unde molestiae ea enim, itaque corporis ratione. Quaerat itaque facere fugit ipsam magnam debitis quos! Ab ipsam qui labore culpa? Eos quis aut quaerat autem.</p>
              <ul>
                <li><Link href={"/"}>Graphic Design</Link></li>
                <li><Link href={"/"}>Structural Engineering</Link></li>
              </ul>
            </div>
            <Image data-aos="fade-right" src="/assets/images/home/service.png" width={1000} height={1000} alt="Service" />
          </div>
          <hr />
        </div>
        <div className={styles.component} >
          <div className={styles.content} >
            <div>
              <h2 onClick={() => {
                router.push(ROUTES.VALUE_IMPROVEMENT)
              }}>Value Improvement<span className={styles.arrow} > <Image src="/assets/icons/arrow2.png" height={1000} width={1000} alt="arrow2" /> </span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ea eligendi! Iste beatae perspiciatis laborum suscipit accusamus animi facilis magni, rem amet dolor, officiis ipsam unde molestiae ea enim, itaque corporis ratione. Quaerat itaque facere fugit ipsam magnam debitis quos! Ab ipsam qui labore culpa? Eos quis aut quaerat autem.</p>
              <ul>
                <li><Link href={"/"}>Graphic Design</Link></li>
                <li><Link href={"/"}>Structural Engineering</Link></li>
              </ul>
            </div>
            <Image data-aos="fade-left" src="/assets/images/home/service.png" width={1000} height={1000} alt="Service" />
          </div>
          <div className={styles.all_services}>
            <Link data-aos="fade-up" data-aos-duration="1000" href={ROUTES.OPERATIONAL_EXCELLENCE}>
              <h2>Operational Excellence<span className={styles.arrow} >
                <Image src="/assets/icons/arrow2.png" height={1000} width={1000} alt="arrow2" />
              </span>
              </h2>
            </Link>
            <Link data-aos="fade-up" data-aos-duration="1000" href={ROUTES.SOURCING_EXCELLENCE}>
              <h2>Sourcing Excellence<span className={styles.arrow} >
                <Image src="/assets/icons/arrow2.png" height={1000} width={1000} alt="arrow2" />
              </span>
              </h2>
            </Link>
            <Link data-aos="fade-up" data-aos-duration="1000" href={ROUTES.RESOURCING}>
              <h2>Resourcing<span className={styles.arrow} >
                <Image src="/assets/icons/arrow2.png" height={1000} width={1000} alt="arrow2" />
              </span>
              </h2>
            </Link>
            <Link data-aos="fade-up" data-aos-duration="1000" href={ROUTES.APP_and_Business}>
              <h2>Application & Business Dev.<span className={styles.arrow} >
                <Image src="/assets/icons/arrow2.png" height={1000} width={1000} alt="arrow2" />
              </span>
              </h2>
            </Link>

          </div>
          <div className={styles.all_services_button} >
            <hr></hr>
            <Link href={ROUTES.SERVICES}>View all Services</Link>
            <hr></hr>
          </div>
        </div>

      </div>
      <div className={styles.customers} >
        <div className={styles.content}>
          <div className={styles.left}>
            <h2>Here's what our customers experinced after implementing Prospectss Tools</h2>
            <hr></hr>
            <Image data-aos="zoom-in" data-aos-duration="1500" src={'/assets/images/home/stars.png'} alt="stars" height={1000} width={1000} />
            <p>Packult helped our business to generate more sales and saved money on product packaging</p>
            <h4> <span> Azim Premji</span> Founder Chairman of Wipro</h4>
          </div>
          <hr></hr>
          <div className={styles.right}>
            <h1>Trusted by over</h1><br />

            {/* counter */}
            <div className={styles.counter} >
              <h1><CountUp
                start={0}
                end={233784}
                duration={3}
                separator=""
                decimals={0}
                decimal=","
                enableScrollSpy={true}
              /> </h1>
              <h2>+ Customers</h2>
            </div>
          </div>
        </div>

      </div>
      <div className={styles.cutomers_gallery} >
        <Carousel
        >
          <div className={styles.carousel} >
            <Image src="/assets/images/home/customers (1).png" alt='customers1' width={1000} height={1000} />
            <Image src="/assets/images/home/customers (2).png" alt='customers2' width={1000} height={1000} />
            <Image src="/assets/images/home/customers (3).png" alt='customers3' width={1000} height={1000} />
            <Image src="/assets/images/home/customers (4).png" alt='customers4' width={1000} height={1000} />
            <Image src="/assets/images/home/customers (5).png" alt='customers5' width={1000} height={1000} />
          </div>
          <div className={styles.carousel} >
            <Image src="/assets/images/home/customers (1).png" alt='customers1' width={1000} height={1000} />
            <Image src="/assets/images/home/customers (2).png" alt='customers2' width={1000} height={1000} />
            <Image src="/assets/images/home/customers (3).png" alt='customers3' width={1000} height={1000} />
            <Image src="/assets/images/home/customers (4).png" alt='customers4' width={1000} height={1000} />
            <Image src="/assets/images/home/customers (5).png" alt='customers5' width={1000} height={1000} />
          </div>

        </Carousel>
      </div>
      <BlogCarousel heading={"Blog"} isBlogPage={false} />
      <div className={styles.awards}>
        <div className={styles.bg_plane}>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div data-aos="fade-right" data-aos-duration="2000" className={styles.award_box}>
              {/* <h4> <span> INDIASTAR</span> PACKAGING DESIGN EXCELLENE 2022</h4>
                <Image src={'/assets/images/home/award.png'} alt="award" width={1000} height={1000} /> */}
            </div>
            <div data-aos="fade-right" data-aos-duration="1500" className={styles.award_box}>
              <h4> <span> IFCA 2022</span> DESIGN OF<br />THE YEAR<br /> 2022</h4>
              <Image src={'/assets/images/home/award.png'} alt="award" width={1000} height={1000} />
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" className={styles.award_box}>
              <h4> <span> INDIASTAR</span> PACKAGING DESIGN EXCELLENE<br /> 2022</h4>
              <Image src={'/assets/images/home/award.png'} alt="award" width={1000} height={1000} />
            </div>
          </div>
          <div className={styles.right}>
            <h2>Our Awards</h2>
            <h3>Our Well Deserved Awards</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam est ullam recusandae dolores nam dolore a nemo architecto fuga illum.</p>
          </div>
        </div>
      </div>
      <div className={styles.map}>
        <Image src={'/assets/images/home/map.png'} alt="map" width={1000} height={1000} />
      </div>
      <WorkNumbers />
      <div className={styles.mobile_app}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2>Download our Mobile App</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ea eligendi! Iste beatae perspiciatis laborum suscipit accusamus animi facilis magni.</p>
            <div className={styles.qr_codes}>
              <div>
                <Image src={'/assets/images/home/customer-qr-code.png'} alt="cutomer-qr-code" width={1000} height={1000} />
                <h5>Customer App</h5>
              </div>
              <div>
                <Image src={'/assets/images/home/vendor-qr-code.png'} alt="vendor-qr-code" width={1000} height={1000} />
                <h5>Vendor App</h5>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-offset="-500" className={styles.right}>
            <Image src={'/assets/images/home/mobile-app.png'} alt="mobile-app" width={1000} height={1000} />
            <div className={styles.apple_play_store}>
              <Image src={'/assets/images/home/App Store.png'} alt="app-store" width={1000} height={1000} />
              <Image src={'/assets/images/home/Google Play.png'} alt="play-store" width={1000} height={1000} />
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </Layout>
  )
}
