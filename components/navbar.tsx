import Link from "next/link"
import styles from '../styles/navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

export default function navbar() {
    return (
        <header className="header" id="header">
            <div className={`${styles.nav} container padd-15`} >
                <motion.div whileHover={{ scale: 1.0 }} whileTap={{ scale: 0.9 }}>
                    <Link href="/"><a className={styles['nav-logo']}>
                        <h1>Iyade</h1>
                    </a>
                    </Link>
                </motion.div>
                <div className={styles['nav-menu']} id="nav-menu">
                    <ul className={styles['nav-list']}>

                        <li className={styles['nav-item']}>
                            <Link href="/work"><a className={styles['nav-link']}>Work</a></Link>
                        </li>
                        <li className={styles['nav-item']}>
                            <Link href="/post"><a className={styles['nav-link']}>Posts</a></Link>
                        </li>
                        <li className={styles['nav-item']}>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.99 }}>
                                <Link href="https://www.github.com/iyadrozan/iyade-homepage"><a target="_blank" className={styles['nav-source']}>Source <FontAwesomeIcon icon={faCode} /></a></Link>
                            </motion.div>
                        </li>
                    </ul>
                </div>
            </div>
        </header >
    )
}
