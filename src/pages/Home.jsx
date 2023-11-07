import NavBar from "../components/Navbar"
import SlideShow from "../components/SlideShow"
import CardGroup from '../components/Cards'
import Footer from '../components/Footer'

import Logo from '../assets/Logo.svg'

function Home(){
    return(
        <>
        <header>
          <img src={Logo} alt="logo"/>
        </header>
          <NavBar/>  
          <br/>
          <SlideShow/>
          <br/>
          <CardGroup/>
          <br/>
          <Footer/>
        </>
    )
}
export default Home