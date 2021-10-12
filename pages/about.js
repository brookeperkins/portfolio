import styles from '../styles/About.module.css';
import Line from '../components/Illustrations/Line';
import Stack from '../components/Stack/Stack';
import FadeIn from 'react-fade-in/lib/FadeIn';

function About() {
  return (
    <FadeIn transition={2000}>
      <main>
        <section className={styles.bio}>
          <h1>software engineer, bicyclist, designer, cat mom</h1>
          <img className={styles.photo} src={'brooke.jpg'} />
          <Line className={styles.lineGuy} />
          <p className={styles.bioText}>
            Howdy! My name is{' '}
            <span className={styles.strong}>Brooke Perkins</span>, and I like to
            make useful things. I believe that
            <span className={styles.emph}>
              all truly useful things should have an artfulness to them.
            </span>
            I also believe it's our duty to uplift and support the voices of
            marginalized folks, that Black lives matter, and that the internet
            should look cool, stay weird, and be ✨accessible✨ for everyone. I
            have a lot of fun making things with code, and love to indulge my
            curiosity. I can work with the full stack, but have a soft spot for
            frontend development.
          </p>
          <span className={styles.emph}>
            Here's what I've been working with lately:
          </span>
          <section className={styles.stackSpan}>
            <Stack
              tech1="javascript"
              tech2="typescript"
              tech3="semantic html"
            />
            <Stack 
              tech1="css" 
              tech2="react" 
              tech3="redux" 
            />
            <Stack 
            tech1="nextjs" 
            tech2="node" 
            tech3="express" 
            />
            <Stack 
            tech1="postgreSQL" 
            tech2="jest" 
            tech3="qunit" 
            />
          </section>
        </section>
      </main>
    </FadeIn>
  );
}

export default About;
