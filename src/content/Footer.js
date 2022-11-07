import "./Footer.css";
import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHoursToggled: false,
      hourClass: "footer__opening-hours",
      isLinksToggled: false,
      linkClass: "footer__links",
      isSocialsToggled: false,
      socialClass: "footer__socials"
    };
  }

  handleFooterHoursToggle = () => {
    this.setState(prevState => ({
      isHoursToggled: !prevState.isHoursToggled,
      hourClass: this.state.isHoursToggled ? "footer__opening-hours" : "footer__opening-hours open"
    }));
  }

  handleFooterSocialsToggle = () => {
    this.setState(prevState => ({
      isSocialsToggled: !prevState.isSocialsToggled,
      socialClass: this.state.isSocialsToggled ? "footer__socials" : "footer__socials open"
    }));
  }

  handleFooterLinksToggle = () => {
    this.setState(prevState => ({
      isLinksToggled: !prevState.isLinksToggled,
      linkClass: this.state.isLinksToggled ? "footer__links" : "footer__links open"
    }));
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__upper">
          <div className={this.state.hourClass}>
            <h3 className="footer__title" onClick={this.handleFooterHoursToggle}>Openings tijden</h3>
            <ul className="footer__list">
              <li className="footer__item"><strong className="opening-hours__day">Maandag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
              <li className="footer__item"><strong className="opening-hours__day">Dinsdag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
              <li className="footer__item"><strong className="opening-hours__day">Woensdag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
              <li className="footer__item"><strong className="opening-hours__day">Donderdag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
              <li className="footer__item"><strong className="opening-hours__day">Vrijdag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
              <li className="footer__item"><strong className="opening-hours__day">Zaterdag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
              <li className="footer__item"><strong className="opening-hours__day">Zondag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
            </ul>
          </div>
          <div className={this.state.linkClass}>
            <h3 className="footer__title" onClick={this.handleFooterLinksToggle}>Handige Links</h3>
            <ul className="footer__list">
              <li className="footer__item"><strong className="opening-hours__day">Maandag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
              <li className="footer__item"><strong className="opening-hours__day">Dinsdag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
              <li className="footer__item"><strong className="opening-hours__day">Woensdag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
              <li className="footer__item"><strong className="opening-hours__day">Donderdag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
              <li className="footer__item"><strong className="opening-hours__day">Vrijdag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
              <li className="footer__item"><strong className="opening-hours__day">Zaterdag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
              <li className="footer__item"><strong className="opening-hours__day">Zondag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
            </ul>
          </div>
          <div className={this.state.socialClass}>
            <h3 className="footer__title" onClick={this.handleFooterSocialsToggle}>Algemene Links</h3>
            <ul className="footer__list">
              <li className="footer__item"><strong className="opening-hours__day">Maandag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
              <li className="footer__item"><strong className="opening-hours__day">Dinsdag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
              <li className="footer__item"><strong className="opening-hours__day">Woensdag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
              <li className="footer__item"><strong className="opening-hours__day">Donderdag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
              <li className="footer__item"><strong className="opening-hours__day">Vrijdag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
              <li className="footer__item"><strong className="opening-hours__day">Zaterdag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
              <li className="footer__item"><strong className="opening-hours__day">Zondag :</strong><span className="opening-hours__time">12:00 - 20:00</span></li>
            </ul>
          </div>
        </div>
        <div className="footer__lower">
          <div className="footer__copyright">
            &copy; Copyright Cafetaria de sluis 2022
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
