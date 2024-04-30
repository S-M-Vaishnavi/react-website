import './Footer.css';
const Footer = () => {
  return (
    <div id='contact'>
        <footer className='footer'>
        <div className="container-footer">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#aboutus">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="">FAQ</a></li>
                <li><a href="">Enquiry</a></li>
                <li><a href="">Feedback</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className='social-links'>
                <a href=""><i className='fab fa-facebook-f' /></a>
                <a href=""><i className='fab fa-twitter' /></a>
                <a href=""><i className='fab fa-instagram' /></a>
                <a href=""><i className='fab fa-linkedin-in' /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer