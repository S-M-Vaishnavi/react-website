import "./Services.css";
import aidataanalytics from "../../assets/aidataanalytics.jpg";
import softwaredevelopment from "../../assets/softwaredevelopment.jpg";
import optimize from "../../assets/optimize.png";

const Services = () => {
  return (
    <div id="services">
      <h1>Our Services</h1>

      <div className="container-services">
        <div className="card-hover">
          <div className="card-hover__content">
            <h3 className="card-hover__title">
             Desgin
            </h3>
            <p className="card-hover__text">
            We create compelling user experiences by designing intuitive workflows that will delight your customers.
            </p>
            <a href="#" className="card-hover__link">
              <span>Learn How</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
          <div className="card-hover__extra">
            <h4>
              Digital Counstancy , UI/UX Design , System Analysis
            </h4>
          </div>
          <img src={softwaredevelopment} alt="" />
        </div>

        <div className="card-hover">
          <div className="card-hover__content">
            <h3 className="card-hover__title">
             Bulid
            </h3>
            <p className="card-hover__text">
            We work closely with your team during software builds to ensure everyone is aligned on the objective of each deliveries.
            </p>
            <a href="#" className="card-hover__link">
              <span>Learn How</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
          <div className="card-hover__extra">
            <h4>
             E-commerce Integration , AI & Analytics.
            </h4>
          </div>
          <img src={aidataanalytics} alt="" />
        </div>

        <div className="card-hover">
          <div className="card-hover__content">
            <h3 className="card-hover__title">
             Optimize
            </h3>
            <p className="card-hover__text">
            Once an application is delivered, it need to be optimized during its Lifecycle.
            </p>
            <a href="#" className="card-hover__link">
              <span>Learn How</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
          <div className="card-hover__extra">
            <h4>
              Automation Testing, Support & Maintence, Managed Services
            </h4>
          </div>
          <img src={optimize} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
