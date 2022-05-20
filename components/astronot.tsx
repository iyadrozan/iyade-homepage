import Image from "next/image"
import Astronaut from "../public/image/ilustrationAnimate.svg"
import styles from "../styles/astronaut.module.css"

export default function astronot() {
    return (
        <>
            <div className={styles.astronaut}>
                <Image src={Astronaut} width={300} height={300} />
            </div>
        </>
    )
}
