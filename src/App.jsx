import { Suspense, lazy } from "react"

const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms)); // Creates a promise that resolves after ms milliseconds


// import { MyCustomData } from "./MyCustomData"

const MyCustomData = lazy(() => delay(5000).then(()=>import( "./MyCustomData" )))
function App() {

  return (
    <>
      hi
      <Suspense fallback={<div>Loading Custom Data ....</div>} >
        <MyCustomData />
      </Suspense>
    </>
  )
}

export default App
