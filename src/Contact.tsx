import React from 'react';
import Form from './components/Form';
import './css/Contact.css';

class Contact extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
      
    render() {
        return (
            <div className="container contact">
                <h1 className="title"><b>Get in Touch</b></h1>
                <hr className="hr-dark"/><hr className="hr-light"/><br/>
                <div className="row">
                    <Form></Form>
                    <div className="col-md-6">
                        <div className="contact-info">
                            <span className="contact-info-icon">
                                <i className="fa fa-envelope"></i>
                            </span>
                            <span className="contact-info-content">
                                <h6 style={{float: 'left'}}>Email</h6>
                                <p>mouryaprithviraj@gmail.com</p>
                            </span>
                        </div>
                        <div className="contact-info">
                            <span className="contact-info-icon">
                                <i className="fa fa-phone"></i>
                            </span>
                            <span className="contact-info-content">
                                <h6 style={{float: 'left'}}>Phone</h6>
                                <p>(+91)&nbsp;7387129190</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;