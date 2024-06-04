import { useId } from "react"

export function UseIdInputs(){
  const id = useId()
  return(
    <>
          <input id={`${id}--name`} />
          <input id={`${id}--age`} />
    </>
  )
}