import styles from '../styles/Home.module.css';
import Rainbo from '../components/Illustrations/Rainbo';
import Hello from '../components/Illustrations/Hello';

function Intro() {
  return (
    <main>
      <section className={styles.container}>
        <Rainbo />
      <section className={styles.hello}>
        <Hello />
      </section>
      <section className={styles.helloText}>
        I'm a Software Engineer living in the Pacific Northwest.
      </section>
        <Rainbo className={styles.rainbo}/>
      </section>
    </main>
  )
}

export default Intro;
