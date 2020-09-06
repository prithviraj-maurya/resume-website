import React from 'react';
import { project } from '../models/model';

class Cards extends React.Component<project> {

    redirect(e) {
        e.preventDefault();
        window.open(this.props.url);
    }

    render() {
        return (
            <div>
                <a href="/#" onClick={this.redirect.bind(this)} style={{textDecoration: 'none'}}>
                    <img style={{maxHeight: '100%', maxWidth: '100%'}}
                    src={process.env.PUBLIC_URL + this.props.image} alt={this.props.name} />
                    <p>{this.props.name}</p>
                </a> 
            </div>
        );
    }
}

export default Cards;