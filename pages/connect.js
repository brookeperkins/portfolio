import Five from '../components/Illustrations/Five';
import styles from '../styles/Connect.module.css';
import FadeIn from 'react-fade-in/lib/FadeIn';

function Connect() {
  return (
  <FadeIn transition={2000}>
    <main>
      <h1>let's connect!</h1>
      <Five />
      <section className={styles.connect}>
      I'd love to hear about your potential project! You can also share your recipe for vegan chili, ask me about my cats (<span className={styles.cats}>Nomi<img className={styles.catpic} src={'nomz.PNG'} /></span> & <span className={styles.cats}>Leaf E. Greens<img className={styles.catpic} src={'leafy.PNG'} /></span>), or just say hello! :)
      </section>
      <section className={styles.formContain}>
        <section className={styles.miniBox}>
      <a className={styles.hi} href="mailto:brookemmperkins@gmail.com?subject=Hi Brooke!">Email Me!</a>
      <br />
      <a className={styles.hi} href="https://twitter.com/bbperkz">Tweet @ Me!</a>
        </section>
    </section>
    </main>
  </FadeIn>
  )
}

export default Connect;
