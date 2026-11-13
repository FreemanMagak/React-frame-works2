import { useState } from 'react'
import NavBar from './Components/NavBar.jsx'
import './App.css'
import SideNav from './Components/SideNav.jsx'
import CardList from './Components/CardList.jsx'
import { useEffect } from 'react'

export default function App() {

const [products, setProducts] = useState([])

    //Fetching from db.json
    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

  return (
    <>
      <NavBar />
      <main className= " main-section   d-flex flex-row gap-3">
        <SideNav />
        <CardList products={products} />
      </main>
    </>
  )
}


