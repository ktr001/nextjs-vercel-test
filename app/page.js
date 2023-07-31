import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    // <main className={styles.main}>
    //   <div className={styles.grid}>
    //       <h2>
    //         Input here
    //       </h2>
    //       <label > 開始日 
    //         <input type="date" id = 'start-date'/>
    //       </label>
    //       <label> 終了日 
    //         <input type="date" id = 'end-date'/>
    //       </label>

    //       <label> 平日の候補時間帯 
    //         <div class="weekday">
    //           <input type= 'time' v-model = 'WD["from"]' />
    //           <input type= 'time' v-model = 'WD["to"]' />
    //         </div>
    //       </label>
          
    //       <div>
    //         <button class = 'addButton' > － </button>
    //         <button class = 'addButton'> ＋ </button>
    //       </div>
    //     </div>
    //   </div>
    // </main>
    <main className={styles.main}>
      <label> 平日の候補時間帯 
        <div ClassName="weekday">
          <input type= 'time' v-model = 'WD["from"]' />
          <input type= 'time' v-model = 'WD["to"]' />
        </div>
      </label>

    </main>
  );
}
