import React from 'react';
import profilePic from './static/profile-pic.jpeg';
import './css/AboutMe.css';

class AboutMe extends React.Component {
    render() {
        return (
            <div className="container about">
                <h1 className="title"><b>ABOUT ME</b></h1>
                <hr className="hr-dark"/><hr className="hr-light"/><br />
                <div>
                    <div className="row">
                        <div className="col-md-3">
                            <img className="profile-image" src={profilePic} alt="profile"/>
                        </div>
                        <div className="col-md-9" style={{textAlign: 'left'}}>
                            <h1>I am <span className="name">Prithviraj Maurya</span></h1>
                            <p className="desc">I am a Full Stack Developer at Wissen Technology,
                            I also work on AI and ML projects<br/> and I am an active Kaggler.
                            </p>
                            <p><b>Full Name</b>: Prithviraj Anil Maurya</p>
                            <p><b>Age</b>: 24</p>
                            <p><b>Nationality</b>: Indian</p>
                            <p><b>Languages</b>: English & Hindi</p>
                            <p><b>Address</b>: Bengaluru, Karnataka - 560035</p>
                            <button type="button" className="btn btn-primary">
                                <a href={ process.env.PUBLIC_URL + '/resume.pdf'} 
                                style={{color: 'white', textDecoration : 'none'}}>View Resume</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;