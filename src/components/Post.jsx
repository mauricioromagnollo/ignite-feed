import styles from './Post.module.css'

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/x0n4d0.png" alt="Profile Image" />
          <div className={styles.authorInfo}>
            <strong>Maurício Romagnoli</strong>
            <span>Software Engineer</span>
          </div>
        </div>

        <time title='01 de Janeiro às 00:00h' dateTime='2023-01-01 00:00:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
      <p>Fala galeraa 👋</p>

      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

      <p>👉{' '}<a href="">jane.design/doctorcare</a></p>

      <p>
        <a href="">#novoprojeto</a>{' '}
        <a href="">#nlw</a>{' '}
        <a href="">#rocketseat</a>
      </p>
      </div>
    </article>
  )
}