

import { Child } from "./Child"
import styles from "./App.module.css"


function App() {
  console.log(styles);
  return (
    <>
     <h1 className={styles.header}>Hi</h1>
     <Child />
    </>
  )
}

export default App
