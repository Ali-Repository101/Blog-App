import React from 'react'
import logo from '../Images/logo.png';

const Footer = () => {
    return (
       
  <footer>
  <section className="contact-area" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="contact-content text-center">
            <a href="/"><img src={logo} alt='logo' className="footer-logo"/></a>
            <p>Alison Tavel, Music Department: Breakthrough with Tony Robbins. Alison Tavel is known for Breakthrough with Tony Robbins (2010), Tabatha Takes Over (2008) ...
              dolore magna aliqua. Quis ipsum </p>
            <div className="hr"></div>
            <h6>1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</h6>
            <h6>+01 2345 6789 12<span>|</span>+01 2345 6789 12</h6>
            <div className="contact-social">
              <ul>
                <li><a className="hover-target" href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                <li><a className="hover-target" href="https://facebook.com"><i className="fab fa-github"></i></a></li>
                <li><a className="hover-target" href="https://facebook.com"><i className="fab fa-behance"></i></a></li>
                <li><a className="hover-target" href="https://facebook.com"><i className="fab fa-pinterest-p"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <p>Copyright &copy; 2022 <img alt='logo' src={logo}/> All Rights Reserved.</p>
  </footer>
</footer>
    )
}

export default Footer