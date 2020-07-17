import React, { Component } from 'react';

import Slider from './Slider'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Slider />
                <h1 className="test">this is home</h1>
            </div>
         );
    }
}
 
export default Home;