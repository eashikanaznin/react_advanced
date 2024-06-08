import { useState } from "react"
import { Toast } from "./Toast"
import { useEffect } from "react";

export function ToastFrom(){

  const [ toasts, setToasts ]= useState([])
  const [ toastInput, setToastInput ]= useState()

  function handlaSubmit(e){
    e.preventDefault()
    if (toasts === '') return
    setToasts((currentToasts) => [...currentToasts, toastInput])
    setToastInput('')
  }
  return(
    <>
    <Toast toasts={toasts} setToasts={setToasts}/>
   
    <br/>
    <div className="form">
    <form onSubmit={ handlaSubmit }>
       <input id='toast_name' value = {toastInput} onChange={ (e) => setToastInput( e.target.value)}/>
       <br/>
       <button>Add Toast</button>
    </form>
    </div>

    </>

   
  )
}