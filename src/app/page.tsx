import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const ICON_SIZE = 20;
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 style={{ fontSize: 60 }}>Hey there!</h1>
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
          href="https://github.com/turtlepaw/health"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Health <span>-&gt;</span>
          </h2>
          <p>Unlock more insights into your health from your Wear OS watch.</p>
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
      <div className="justify-center mt-10 flex-row gap-5 flex">
        <Link href="https://github.com/turtlepaw" target="_blank">
          <Image
            src="/github.svg"
            alt="GitHub"
            className="hover:scale-110 transition-all duration-200"
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
        </Link>
        <Link
          href="https://bsky.app/profile/turtlepaw.github.io"
          target="_blank"
        >
          <Image
            src="/bluesky.png"
            style={{ filter: "brightness(0) saturate(100%) invert(100%)" }}
            className="hover:scale-110 transition-all duration-200"
            alt="Bluesky"
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
        </Link>
      </div>
    </main>
  );
}
