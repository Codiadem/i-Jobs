import React from "react";
import "/src/style/footer.css";

function Footer() {
  return (
    <>
      <div className="footer-box">
        <div className="footer-content">
          <div className="contact">
            <h4>CONTACT</h4>
            <p>+234 801 2345 678</p>
            <p>
              <a href="#">i-Jobs@gmail.com</a>
            </p>
          </div>
          <div className="community">
            <h4>COMMUNITY</h4>
            <p>
              <a href="#">For employees</a>
            </p>
            <p>
              <a href="#">For Recruiters</a>
            </p>
          </div>
          <div className="social-media">
            <h4>SOCIAL MEDIA</h4>
            <p>
              <a href="#">Facebook</a>
            </p>
            <p>
              <a href="#">Twitter</a>
            </p>
          </div>
        </div>
        <footer>
          <hr />
          i-Jobs &copy 2024
        </footer>
      </div>
    </>
  );
}

export default Footer;
