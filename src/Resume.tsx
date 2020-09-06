import React from 'react';
import './Style.css';
import profile from './static/Profile.jpg';
import StarfieldAnimation from 'react-starfield-animation';

import AboutMe from './AboutMe';
import Portfolios from './Portfolios';
import Contact from './Contact';

class Resume extends React.Component {

  redirectLinkedIn(e) {
    e.preventDefault();
    window.open("http://www.linkedin.com/in/prithviraj-maurya-02aa40116");
  }

  redirectGithub(e) {
    e.preventDefault();
    window.open("http://github.com/prithviraj-maurya");
  }

  redirectKaggle(e) {
    e.preventDefault();
    window.open("http://www.kaggle.com/prithviraj7387");
  }

  render() {
    return (
      <div>
    <div className="ct" id="home">
        <div className="ct" id="about">
            <div className="ct" id="portfolio">
                <div className="ct" id="contact">
                    <section>
                        <ul>
                            <a href="#home">
                                <li className="icon fa fa-home" id="uno"></li>
                            </a>
                            <a href="#about">
                                <li className="icon fa fa-user" id="dos"></li>
                            </a>
                            <a href="#portfolio">
                              <li className="icon fa fa-briefcase" id="tres"></li>
                            </a>
                            <a href="#contact">
                                <li className="icon fa fa-address-book" id="cuatro"></li>
                            </a>
                        </ul>
                        <div className="page" id="p1">
                            <StarfieldAnimation
                              style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%'
                              }}
                            />
                            <div className="home">
                              <div className="profile-pic">
                                <img className="profile-img" src={profile} alt="Profile"/>
                              </div>
                              <div className="title">Hi, I am <span className="name">Prithviraj Maurya</span></div>
                              <span className="hint">Full Stack Developer, Active Kaggler, AI ML Enthusiast</span>
                              <div className="social">
                                <a href="/#" onClick={this.redirectLinkedIn}>
                                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                                <a href="/#" onClick={this.redirectGithub}>
                                  <i className="fa fa-github" aria-hidden="true"></i>
                                </a>
                                <a href="/#" onClick={this.redirectKaggle}>
                                  <span style={{color: 'white'}}>k</span>
                                </a>
                                </div>
                            </div>
                        </div>
                        <div className="page" id="p2">
                            <AboutMe></AboutMe>
                        </div>
                        <div className="page" id="p3">
                            <Portfolios></Portfolios>
                        </div>
                        <div className="page" id="p4">
                            <Contact></Contact>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</div>
    );
  }
}

export default Resume;