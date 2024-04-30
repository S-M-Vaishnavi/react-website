// NavigationBar.jsx
import './NavigationBar.css'
import { useState, useEffect } from 'react'

import { RxHamburgerMenu as OpenMenu } from "react-icons/rx"
import { CgClose as HideMenu} from 'react-icons/cg' 

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      window.innerWidth > 1200 && setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <nav className="navBar" >
        <div className="leftSection">
          <div className='companyLogo'>
            <h1>AANESAA</h1>
          </div>
          <div className="navBtns">
            <a href="#home"><button>Home</button></a>
             <a href="#aboutus"><button>About Us</button></a>
            <a href="#services"><button>Services</button></a>
            <a href="#testimonials"><button>Testimonials</button></a>
            <a href="#contact"><button>Contact Us</button></a>
          </div>
        </div>
        <div className='rightSection'>
          <div className="accountSection">
            <button>Login</button>
            <button>Sign Up</button>
          </div>
          <div className="menuSection">
            {
              !menuOpen ? 
                <OpenMenu className='menuBtn' onClick={() => setMenuOpen(true)}/> : 
                <HideMenu className='hideBtn' onClick={() => setMenuOpen(false)}/>
            }
          </div>
        </div>
        <div className="sideMenu" style={{display: (!menuOpen || width > 1200) ? 'none' : 'flex'}}>
          <div className="sideMenuSiteSections">
          <a href="#home"><button>Home</button></a>
             <a href="#aboutus"><button>About Us</button></a>
            <a href="#services"><button>Services</button></a>
            <a href="#testimonials"><button>Testimonials</button></a>
            <a href="#contact"><button>Contact Us</button></a>
          </div>
          <div className="sideMenuContent">
            <div className="sideMenuAccountHeader">
              <h1>Login or Sign Up</h1>
            </div>
            <div className="loginSignUpSection">
              <div className="sideMenuAccountBtns">
                <button>Login</button>
                <button>Sign Up</button>
              </div>
              <div className='disclaimer'>
                &copy; Company. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavigationBar
