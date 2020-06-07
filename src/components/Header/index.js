import React from 'react';

import './style.scss';
import photo from './work.jpg';

const Header = () => (
  <header className="header">
    <div>
      <img className="header-image" src={photo} alt="espace de travail" />
    </div>
    <div className="contact">
      <p className="contact-item">
        <ion-icon name="call-outline" className="contact-item-icon" />    <p className="contact-item-text">06.29.68.13.36</p>
      </p>
      <p className="contact-item">
        <ion-icon name="mail-outline" className="contact-item-icon" /> <p className="contact-item-text mail"><a>berenice.lortie@gmail.com</a></p>
      </p>
    </div>
    <nav className="nav">
      <a href=""><p className="nav-item"> <ion-icon name="home-outline" /></p></a>
      <a href=""><p className="nav-item"> A propos </p></a>
      <a href=""><p className="nav-item"> Compétences</p></a>
      <a href=""><p className="nav-item"> Mes projets </p></a>
      <a href=""><p className="nav-item"> Contact </p></a>
    </nav>
  </header>

);
export default Header;
