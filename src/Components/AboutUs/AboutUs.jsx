import "./AboutUs.css";
import certify from "../../assets/certify.jpg";
import aboutus from "../../assets/aboutus.jpg";


const AboutUs = () => {
  return (
    <div id="aboutus">
      <h1>About Us</h1>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>Global System Integrator</h2>
                </div>
                <div className="text">
                  With over 20+ years of building digital experiences, 9
                  consulting offices across N. America, Europe & APAC and 2
                  delivery centers in Vietnam & India, we help global companies
                  achieve their digital goals.
                </div>
                <div className="text">
                  We analyze, design and build your online presence to help you
                  stay ahead of the competition.
                </div>
                <div className="btn-box">
                  <a href="#" className="theme-btn btn-style-one">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img
                      src={aboutus}
                      alt=""
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
          <div className="down-para">
            <div className="sec-title">
              <span className="title">Certification</span>
              <h2>
                We partner with the Industry Leading Technology Platforms and
                our developers are certified by their rigorous qualifications to
                ensure we deliver quality code for our clients.
              </h2>
            </div>
            <div className="text">
              <img src={certify} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
