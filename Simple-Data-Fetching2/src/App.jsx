import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [loading, setLoading]=useState(false)
  const[posts, setPosts]=useState([])
  const[error, setError]=useState(null)
  
  const displayData= async()=>{
    try {
      
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
      const finalData = await res.json()
      setPosts(finalData)
    } catch (error) {
      setError(error)
    }
  }
  useEffect(()=>{
    displayData()
  },[])

  return(
    <>
      
    </>
  )
}

export default App
