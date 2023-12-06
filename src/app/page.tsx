import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Turtlepaw - Developer
        </p>
      </div>

      <div className={styles.center}>
        <h1 style={{ fontSize: 60 }}>
          Hey there!
        </h1>
      </div>
      <div>
        <h1 style={{ fontSize: 25, paddingBottom: 25 }}>
          Here&apos;s some of my projects
        </h1>
      </div>
      <div className={styles.grid}>
        <a
          href="https://watchfaces.vercel.app/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Watch Faces <span>-&gt;</span>
          </h2>
          <p>Discover new watch faces for your Wear OS watch.</p>
        </a>

        <a
          href="https://fitnesschallenges.vercel.app/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Fitness Challenges <span>-&gt;</span>
          </h2>
          <p>Play challenges with friends and family.</p>
        </a>

        {/* <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Beep Boop <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
      </div>
    </main>
  )
}
