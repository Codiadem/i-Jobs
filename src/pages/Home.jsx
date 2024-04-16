
// eslint-disable-next-line no-unused-vars
import Footer from "../components/Footer";
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line no-unused-vars
import "../style/home.css";
import hero from "../images/Hero-image.png"
import {Link} from "react-router-dom"

function Home() {
  return (
    <>
      <body>
        <div>
          <div className="home-container">
            <div className="container">
              <div className="home">
                <h1 className="heading">
                  Connecting Talents with opportunities!
                </h1>
                <h3>Job Adventures Await, Discover Your perfect Job Match.</h3>
                <p>
                  Explore a wide array of job listings from various industries,
                  whether you are a seasoned professional or just starting your
                  career journey, we have opportunities for you.
                </p>
                <img src={hero} alt="hero-image" className="small-screen" />
                <Link to="/sign-up">
                  <h3>
                    <button className="home-btn">Get started</button>
                  </h3>
                </Link>
              </div>

              <img src={hero} alt="hero-image" />
            </div>
          </div>
        </div>
        <br />

        <div className="container-image">
          {/* <div className="home-div">  */}
          <div className="h3-card card-1">
            <h3>
              <bold>Hire an Employee</bold>
            </h3>
            <span className="h3-span"></span>
            <p>
              It has not been easy to hire a perfect employee?
              <br />
              For every position, we help you get the perfect employee
            </p>
          </div>
          <div className="h3-card">
            <h3>
              <bold>Find a Job</bold>
            </h3>
            <span className="h3-span"></span>
            <p>
              Searching for a job?
              <br />
              Find the best job start up that fits you.
            </p>
          </div>

          <div className="h3-card">
            <h3>
              <bold>Career Resources</bold>
            </h3>
            <span className="h3-span"></span>
            <p>
              Optimizing your career resources?
              <br />
              Find important resources to help your career growth.
            </p>
          </div>

          {/* </div> */}
        </div>
      </body>
      <Footer/>
    </>
  );
}

export default Home;

