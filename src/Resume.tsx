import React from 'react';
import './Style.css';
import StarfieldAnimation from 'react-starfield-animation';

import AboutMe from './AboutMe';

class Resume extends React.Component {
  render() {
    return (
      <div>
    <div className="ct" id="home">
        <div className="ct" id="about">
            <div className="ct" id="t3">
                <div className="ct" id="t4">
                    <section>
                        <ul>
                            <a href="#home">
                                <li className="icon fa fa-home" id="uno"></li>
                            </a>
                            <a href="#about">
                                <i className="icon fa fa-user" id="dos"></i>
                            </a>
                            <a href="#t3">
                                <li className="icon fa fa-coffee" id="tres"></li>
                            </a>
                            <a href="#t4">
                                <li className="icon fa fa-dribbble" id="cuatro"></li>
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
                              <div className="title">Hi, I am Prithviraj Maurya</div>
                              <span className="hint">Full Stack Developer</span>
                            </div>
                        </div>
                        <div className="page" id="p2">
                            <AboutMe></AboutMe>
                        </div>
                        <div className="page" id="p3">
                            <li className="icon fa fa-coffee"><span className="title">Coffee</span></li>
                        </div>
                        <div className="page" id="p4">
                            <li className="icon fa fa-dribbble"><span className="title">Dribbble</span></li>
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