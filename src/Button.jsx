export function Button({ As = 'button', name, classes }){
  return(
    <As className={classes} >{ name }</As>
  )
}