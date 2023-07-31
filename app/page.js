// import React, { useState } from 'react';

import Image from 'next/image' ;
import FormSets from './forms';
import styles from './page.module.css' ;

export default function Home() {
  
  return (
    <main className={styles.main}>
      <h2>
             Input here
      </h2>
      <label > 開始日 
        <input type="date" id = 'start-date'/>
      </label>
      <label> 終了日 
        <input type="date" id = 'end-date'/>
      </label>
      <label> 平日の候補時間帯 
        <div ClassName="weekday">
          <input type= 'time' />
          <input type= 'time' />
        </div>
      </label>
      <FormSets/>
      <div>
        <button ClassName = 'addButton' > － </button>
        <button ClassName = 'addButton'> ＋ </button>
      </div>

    </main>
  );
}
