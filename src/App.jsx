// App.jsx
import './App.css'
import AboutUs from './Components/AboutUs/AboutUs'
import Footer from './Components/Footer/Footer'
import NavigationBar from './Components/Navigation/NavigationBar'
import Services from './Components/Services/Services'
import Testimonials from './Components/Testimonials/Testimonials'
import Home from './Components/Home/Home'

function App() {
  return (
      <div>
        <NavigationBar/>
        <Home/>
        <AboutUs/>
        <Services/>
        <Testimonials/>
        <Footer/>
      </div>
  )
}

export default App
