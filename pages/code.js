import Link from 'next/link';
import Computer from '../components/Illustrations/Compy';
import Projects from '../components/Projects/Projects';
import styles from '../styles/Code.module.css';
import FadeIn from 'react-fade-in/lib/FadeIn';

function Code() {
  return (
    <FadeIn transition={2000}>
      <main>
        <h1>here are a few of my projects</h1>
        <Computer />
        <section className={styles.introText}>
          Want to see what I'm working on?
          <Link href="https://github.com/brookeperkins">
            <a className={styles.link2}>Check out my Github!</a>
          </Link>
        </section>
        <section className={styles.projectContainer}>
          <Projects
            src="detestination.gif"
            title="Detestination"
            stack="React, Node, Express, PostgreSQL"
            description="A humorous take on a vacation-planning app. Reverse-engineered results returned from the Yelp API to yield only the worst possible entries in order to plan the worst vacation ever! You'll feel better about staying home after using this."
            repo="https://github.com/Vacation720"
            deployed="https://detestination.netlify.app/"
          />
          <Projects
            src="pagetrade.gif"
            title="PageTrade"
            stack="React, Node, Express, PostgreSQL"
            description="Made for book-lovers looking to safely share their favorite reads in the time of the pandemic. Features a React library enabling drag-and-drop functionality for tracking books for trade and user wishlists. "
            repo="https://github.com/NoShelfControl"
            deployed="https://page-trade.netlify.app/"
          />
            <section className={styles.projectInfo}>
            <img className={styles.gif} src={'ghost.gif'} />
            <h2>CSS Illustrations</h2>
            <p className={styles.projectStack}>
              HTML, CSS
            </p>
            <p>
              Pure CSS illustrations and animations, made within a single div element. Just for fun!
            </p>
            <Link href="/css">
              <a className={styles.link}>Check it out</a>
            </Link>
          </section>
          <section className={styles.projectInfo}>
            <img className={styles.gif} src={'terminus.gif'} />
            <h2>Terminus</h2>
            <p className={styles.projectStack}>
              JavaScript, Node, Express, PostgreSQL
            </p>
            <p>
              A spooky terminal-based game for old-school gamers. Features images, sounds, and a complex, multi-layered storyline. Executable by running <strong>npx-terminus-game</strong>.
            </p>
            <Link href="https://github.com/Team-Formerly-Known-As-Mega-Calendar">
              <a className={styles.link}>Code</a>
            </Link>
            <Link href="https://www.npmjs.com/package/terminus-game">
              <a className={styles.link}>NPM Package Info</a>
            </Link>
          </section>
          <Projects
            src="fungus.gif"
            title="FungusAmongUs"
            stack="Semantic HTML, CSS, JavaScript"
            description="A site for Oregon-based mycophiles interested in learning more about mushroom varieties in their area. Dynamically-rendered map displays all mushrooms found in a particular region. Add it to your basket to keep track of your favorites."
            repo="https://github.com/The-Fun-Guys/FungusAmongUs"
            deployed="https://the-fun-guys.github.io/FungusAmongUs/"
          />
        </section>
      </main>
    </FadeIn>
  );
}

export default Code;
