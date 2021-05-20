import React from 'react';
import './css/Articles.css';
import { articles } from './models/Articles';

class Articles extends React.Component {
      
    render() {
        return (
            <div className="container articles">
                <h1 className="title"><b>Articles</b></h1>
                <hr className="hr-dark"/><hr className="hr-light"/><br/>
                <div className="row">
                    { articles.map(article => {
                    return <div className="col-md-4" style={{ padding: '5px' }}>
                    <div className="card" style={{width: '18rem', padding: '10px'}}>
                        <div className="card-body">
                            <h5 className="card-title text">{article.title}</h5>
                            <p className="card-text text">{article.summary}</p>
                            <a href={article.link} className="btn btn-primary">Know More</a>
                        </div>
                    </div>
                    </div>;})}
                </div>
            </div>
        );
    }
}

export default Articles;