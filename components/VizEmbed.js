import styles from '../styles/components/vizembed.module.scss'

export default ({ name, url }) => {
  return (
    <div className={styles.vizContainer}>
      <iframe className={styles.viz} src={url}></iframe>
      <h3><a href={url} target="_blank">{name}</a></h3>
    </div>
  )
}
