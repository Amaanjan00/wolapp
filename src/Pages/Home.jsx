import Header from '../Components/Header.jsx'
import Search from '../Components/Search.jsx'
import Section1 from '../Components/Section1.jsx'
import Section2 from '../Components/Section2.jsx'
import Section3 from '../Components/Section3.jsx'
import Section4 from '../Components/Section4.jsx'
import Section5 from '../Components/Section5.jsx'
import Footer from '../Components/Footer.jsx'
import Hero from '../Components/Hero.jsx'
import {Outlet} from 'react-router-dom'

function Home() {
  return(
    <>
      <Outlet/>
      <Header/>
      <Search/>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section5/>
      <Section3/>
      <Section4/>
      <Footer/>
    </>
  );
  
}

export default Home
