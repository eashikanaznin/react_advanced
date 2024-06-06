import type { ReactNode } from "react"

type ChildProps = {
  children: ReactNode
}

export function Button({ children }: ChildProps ){
  return <>
  { children }
  </>
}