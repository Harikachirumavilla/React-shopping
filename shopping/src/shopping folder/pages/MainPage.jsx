

import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'

import { Gents ,Ladies} from '../data'
import Womencollection from '../components/Womencollection'


const MainPage = () => {

  const [gentsfashion , setGentsFashion] = useState(Gents)
  const [ladiesfashion , setladiesfashion] = useState(Ladies)

  console.log(Gents)
  return (
    <div>

       <Header/>
       <Banner/>
       <Collections gentsfashion={gentsfashion}/>
       <Womencollection ladiesfashion={ladiesfashion}/>
       <Footer/>
       



    </div>
  )
}

export default MainPage