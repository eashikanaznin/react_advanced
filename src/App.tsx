import { Child } from "./Child";
import { OtherChild } from "./OtherChild";
import { Button } from "./Button";
import { useState, useRef } from "react";
import { useReducer } from "react";


type State = {
  count: number
}
type Action = 
  | {type: "INCREMENT"
  incrementeBy: number}
  | {type: "DECREMENT"
  decreaseBy: number}

function reducer( action : Action, state : State){
  switch(action.type){
    case 'INCREMENT':
    return { ...state, count: state.count + action.incrementeBy}
    default:
      throw new Error("error")
  }
}
function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  const[test, SetTest] = useState<string>()
  const[test1, SetTest1] = useState<number[]>()
  const[ state, dispatch] = useReducer( reducer, {count:0})


  // function testy(e){
  //   e.preventDefault()
  //   console.log(inputRef.current)
  // }
  return (
    
    <>
      Hi
      <Child name="hana"/>
      <OtherChild > children </OtherChild>
      <Button outline={true} >Hello</Button>
      <input onChange={e => SetTest(e.target.value)}/>
      <input onChange={e => SetTest1([1,2,3])}/>
      {/* <form onSubmit={(e)=>testy}>
          <input ref={inputRef} />
          <button type = "submit">submit</button>
      </form> */}
    
      {test}
      {test1}

        <button onClick={ ()=> dispatch({ type: "DECREMENT", decreaseBy: 2 })} >-</button>
        {state.count}
        <button onClick={ ()=> dispatch({ type: "INCREMENT", incrementeBy: 2 })}>+</button>

    </>
  );
}

export default App;
