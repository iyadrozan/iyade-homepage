
import styles from '../styles/404.module.css'
import Image from 'next/image'


export default function Custom404() {
    return (
        <div className='container'>
            <section className={styles.center}>
                <Image src='/image/404.svg' width={500} height={500} alt="logo" />
                <h1 className='indonesia'>error page...</h1>
            </section>
        </div>
    )
}
