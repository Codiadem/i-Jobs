import "/src/style/about.css";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      <div className="main-about-box">
        <div className="about-box"></div>
        <div className="about-box">
          <p>
            We envision a future where individuals pursue their aspirations
            fostering growth, fulfilling  opportunities and continually thrive
            in a dynamic and inclusive professional landscape.
            <br />
            <br />
            Driven by our vision, we create a world class job search experience
            that connects the right people with the right opportunities.
          </p>
        </div>
        <div className="about-box"></div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
