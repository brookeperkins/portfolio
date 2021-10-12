import styles from '../styles/CSS.module.scss';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Div from '../components/CSS/Div';

function CSS() {
  return (
    <FadeIn transition={2000}>
      <main>
        <h1>a single div</h1>
        <p className={styles.concept}>CSS-only illustrations, made from (you guessed it!) a single div. <em>This is just for fun, and not how I would recommend approaching CSS on a project</em>! Completely and totally inspired by <strong><a href='https://a.singlediv.com/'>Lynn Fisher</a></strong>.</p>
        <section className={styles.divs}>
          <Div div={styles.one} container={styles.container1}/>
          <Div div={styles.two} container={styles.container2}/>
          <section className={styles.splitcontainer}>
            <Div div={styles.three} container={styles.container3}/>
            <Div div={styles.four} container={styles.container4}/>
          </section>
          {/* <Div div={styles.five} container={styles.container5}/> */}
          {/*TODO: make grandpa cup stable for safari ==> check caniuse*/}
        </section>
      </main>
    </FadeIn>
  );
}

export default CSS;
