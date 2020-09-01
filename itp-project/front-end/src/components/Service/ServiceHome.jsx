import React , {Component} from 'react';
import M from 'materialize-css';

import Parallax from './Parallax';

class ServiceHome extends Component{
    constructor(){
        super();
        this.state = {};
    }

    componentDidMount() {
        const elems = document.querySelectorAll(".slider");
        M.Slider.init(elems, {
          indicators: false,
          height: 500,
          transition: 500,
          interval: 6000,
        });
      }

    render(){
        return(
            <React.Fragment>
            <Parallax />
            </React.Fragment>
            
        );
    }
}

export default ServiceHome;