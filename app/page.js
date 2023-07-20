import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by hoge hoge editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
      </div>

      <div className={styles.grid}>
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
      </div>
    </main>
  )
}
