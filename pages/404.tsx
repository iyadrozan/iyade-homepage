
import styles from '../styles/404.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

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
                <motion.div whileHover={{ scale: 1.0 }} whileTap={{ scale: 0.8 }}>
                    <a className='btn btn-default' href="/"><FontAwesomeIcon icon={faHouse} /> Back to home</a>
                </motion.div>
            </section>
        </div>
    )
}
