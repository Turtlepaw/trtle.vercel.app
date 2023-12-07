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
          <p>Play fitness based challenges with friends and family.</p>
        </a>

        <a
          href="https://fitnesschallenges.vercel.app/health-connect-provider"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Health Connect Extenstions <span>-&gt;</span>
          </h2>
          <p>
            Extend Google&apos;s Health Connect with more supported apps.
          </p>
        </a>

        <a
          href="https://form-builder.pages.dev/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Forms <span>-&gt;</span>
          </h2>
          <p>Build customizable forms for your discord servers.</p>
        </a>
      </div>
    </main>
  )
}
