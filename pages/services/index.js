import CardContent from "../../components/cardContent"
import Layout from "../../components/layout"
import Particles from "../../components/particles"
import WorkNumbers from "../../components/workNumbers"
import { data } from "../../data/packaging-converters"
import styles from "../../styles/services.module.scss"

function index() {
    return (
        <Layout>
            <Particles width="10vw" height="20vw" color="red" top="10vw" />
            <div className={styles.services} >
                <h2>Services</h2>
                <p className={styles.paragraph} >We provide your product world class solution with our service and expertise. </p>
                <div className={styles.services__content} >
                    {
                        data.map((item, index) => {
                            return <CardContent key={index} data={item} />
                        })

                    }
                </div>
            </div>
            <WorkNumbers />
        </Layout>
    )
}

export default index