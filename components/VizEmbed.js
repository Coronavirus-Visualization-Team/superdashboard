import styles from '../styles/components/vizembed.module.scss'

export default ({ url }) => {
  return (
    <iframe className={styles.viz} src={url}></iframe>
  )
}
