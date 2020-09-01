import React , { Component } from 'react';
import M from 'materialize-css';
import './../../App.css';

import StaticCards from './StaticCards';
import PhotoGalley from './PhotoGalley';
import Detail from './Detail';

class Parallax extends Component{
    constructor(){
        super();
        this.state = {};
    }

    componentDidMount(){
        var elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems, {});
    }

    render(){
        return(
            <React.Fragment className="test">
                <div class="parallax-container test">
      <div class="parallax"><img alt="" src="http://www.voguejewellers.lk/wp-content/uploads/2019/05/Front-image-1-1.jpg" /></div>
    </div>
    <div class="section white test">
      <StaticCards />
      <Detail />
    </div>
    <div class="parallax-container test">
      <div class="parallax"><img alt="" src="https://images.pexels.com/photos/848205/pexels-photo-848205.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" /></div>
    </div>
    <div class="section white test">
      <PhotoGalley />
    </div>
    <div class="parallax-container test">
      <div class="parallax"><img alt="" src="https://images.pexels.com/photos/848205/pexels-photo-848205.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" /></div>
    </div>
            </React.Fragment>
        );
    }

}

export default Parallax;