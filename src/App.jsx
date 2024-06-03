import { useRef } from "react"
import { CustomInput } from "./CustomInput"


function App() {

  // const inputRef = useRef()
  const inputRef = useRef()

  function handleSubmit(e){
    e.preventDefault()
    // alert(inputRef.current.value)
    alert(inputRef.current.value)
  }
return (
  <form onSubmit={ handleSubmit} >
    {/* <input ref={ inputRef } placeholder ="Enter data" /> */}
    <CustomInput ref={ inputRef } placeholder ="Enter data" />
    <button type='submit'>submit</button>
  </form>
)
}

export default App
