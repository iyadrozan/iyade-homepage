
import styles from '../styles/404.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000);
    }, []);

    return (
        <div className='container'>
            <section className={styles.custom404}>
                <Image src='/image/404.svg' width={500} height={500} alt="logo" />
                <a className='btn btn-default' href="/"><FontAwesomeIcon icon={faHouse} /> Back to home</a>
            </section>
        </div>
    )
}
