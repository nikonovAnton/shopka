import styles from './header-nav.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { SearchInput } from '../input'
import { Button } from '../button/button'
import { Avatar } from '../avatar/avatar'

const HeaderNav = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <Link href="/">
          <a className={styles.logo}>
            <Image
              src="/shopka_logo.png"
              width={40}
              height={40}
              alt="Shopka logo"
            />
            <span className={styles.logo__text}>Shopka</span>
          </a>
        </Link>

        <button className={styles.link}>Register</button>

        <SearchInput className={styles.input} />

        <div className={styles.button_container}>
          <Button containerClassName={styles.button}>Sign in</Button>
          <Button mark={{ text: 5 }} containerClassName={styles.button}>
            My cart
          </Button>

          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKr-4_3JHSaiKkrTwXGXdRXkpl5dl2o7EaGg&usqp=CAU" />
        </div>
      </div>
    </header>
  )
}

export default HeaderNav
