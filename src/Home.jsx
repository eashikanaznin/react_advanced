import { useLoaderData } from "react-router-dom"

export function Home(){
  const data = useLoaderData()
  return ( <h1>Home - { data }</h1>)
}
