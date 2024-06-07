export function ToastFrom(){

  function handlaSubmit(e){
    e.preventDefault()
  }
  return(
    <form onSubmit={ handlaSubmit }>
       <input id='toast_name'/>
       <button>Submit</button>
    </form>
   
  )
}