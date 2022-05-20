import type { NextPage } from 'next'
import styles from '../styles/index.module.css'
import Section from '../components/section'
import LayoutsNI from '../components/layouts/nav-ilustration'

const Home: NextPage = () => {
  return (
    <>
      <LayoutsNI />
      <section className={`${styles.home} section`}>
        <div className="container">
          <Section>
            <div className={styles.intro}>
              <p>Hi, I'm a Front-end Developer based in Gorontalo, Indonesia.</p>
            </div>
          </Section>
        </div>
      </section>
    </>
  )
}

export default Home
