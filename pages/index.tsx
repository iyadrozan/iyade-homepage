import type { NextPage } from 'next'
import Navbar from '../components/navbar'
import styles from '../styles/index.module.css'
import Image from 'next/image'
import ControlBox from '../components/controlBox'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <section className={`${styles.home} section`}>
        <div className="container">
          <div className={styles.intro}>
            <ControlBox />
            <p>Hi, I'm a Front-end Developer based in Gorontalo, Indonesia.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
