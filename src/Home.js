import React from 'react'
import CryptoTable from './components/table/CryptoTable'
import Navbar from './components/navbar/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <CryptoTable />
    </div>
  )
}

export default Home