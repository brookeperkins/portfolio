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
      You can hire me! You can tell me all about your recipe for vegan chili! You can ask me about my two kitty sons, and find out which one is my favorite this week! 
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
