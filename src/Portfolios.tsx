import React from 'react';
import Cards from './components/Cards';
import { projects } from './models/model';

class Portfolios extends React.Component {

    render() {
        return (
            <div className="container portfolio">
                <h1 className="title"><b>PROJECTS</b></h1>
                <hr className="hr-dark"/><hr className="hr-light"/><br/>
                <div className="row">
                    { projects.map(project => {
                        return <div className="col-md-3">
                                    <Cards name={project.name} description={project.description} 
                                        url={project.url} image={project.image} key={project.name}/>
                                </div>;
                    })}
                </div>
            </div>
        );
    }
}
export default Portfolios;