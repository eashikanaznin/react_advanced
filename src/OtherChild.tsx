type ChildProps = {
  children: React.ReactNode
}

export function OtherChild({ children }: ChildProps ){
  return <>
  { children }
  </>
}