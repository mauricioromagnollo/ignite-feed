import './global.css'
import styles from './App.module.css'
import { Header, Sidebar } from './components'

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h1>Post</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, soluta quos numquam cupiditate rem cum dicta minus est quidem quas laborum doloribus amet exercitationem earum odio, ex inventore sint? Vero.</p>
        </main>
      </div>
    </div>
  )
}
