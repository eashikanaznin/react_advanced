import styles from "./Child.module.css"

export function Child(){
  console.log(styles)
  return <h1 className={styles.header}>"Hello"</h1>
}