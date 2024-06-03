
import './App.css'
import { Calender } from './Calender'
import { useState } from 'react'

function App() {
const[currentDate, setCurrentDate] = useState(new Date())
return <Calender currentDate = { currentDate } onChange = { setCurrentDate } />
}

export default App
