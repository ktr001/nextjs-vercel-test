import Image from 'next/image' ;
import {Test_Form} from './dateForm';
import {Test_Counter} from './testCounter';
import styles from './page.module.css' ;

export default function Home() {
  
  return (
    <main className={styles.main}>
     
      <Test_Counter/>
      <Test_Form  />
      <div>
        <button className = 'addButton' > － </button>
        <button className = 'addButton'> ＋ </button>
      </div>

    </main>
  );
}
