import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Welcome to Korea Cardano Blockchain R&D Center
        </h1>
        <p className={styles.desc}>
        Thank you for visiting Korea cardano blockchain R&D center page.
        Please access the exchange platform through the Explorer below.
        </p>
        <Button url='/mainpage' text='버튼'/>
      </div>
      <div className={styles.item}></div>
      <Image src={Hero} alt='' className={styles.img}/>
    </div>
  )
}
