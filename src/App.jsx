import './global.css'
import styles from './App.module.css'

import { Header, Sidebar, Post } from './components'

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
