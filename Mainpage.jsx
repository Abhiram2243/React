import React ,{useState}from 'react'

import Banner from '../components/Banner'
import Header from '../components/Header'
import Collections from '../components/Collections'
import Footer from '../components/Footer'


import {Gents, Ladies} from '../data'
const Mainpage = () => {
  console.log(Gents,Ladies);
  const[gentsfashion,setgentsfashion]=useState(Gents)
  const[ladiesfashion,setladiesfashion]=useState(Ladies)
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections gentsfashion={gentsfashion}
        ladiesfashion={ladiesfashion}/>
        <Footer/>
        


    </div>
  )
}

export default Mainpage