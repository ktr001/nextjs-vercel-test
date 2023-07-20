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
            Input here
          </h2>
          <label for = 'start-date'> 開始日 
            <input type="date" id = 'start-date'>
          </label>
          <label for = 'end-date'> 終了日 
            <input type="date" id = 'end-date'>
          </label>

          <label> 平日の候補時間帯 
            <div class="weekday">
              <input type= 'time' v-model = 'WD["from"]'>
              <input type= 'time' v-model = 'WD["to"]'>
            </div>
          </label>
          
          <div>
            <button class = 'addButton' > － </button>
            <button class = 'addButton'> ＋ </button>
          </div>
        </div>
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
