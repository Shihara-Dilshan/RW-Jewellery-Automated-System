import React , { Component } from 'react';

class Detail extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return(
            <div className="containerh center center-align" style={{width:"99%", marginLeft:"10px", marginRight:"0px"}}>
            <div class="col s12 m12">
                <div class="card horizontal">
                <div class="card-image">
                    <img alt="" src="https://images.pexels.com/photos/848205/pexels-photo-848205.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                    </div>
                    <div class="card-action">
                    <a href="#!">This is a link</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Detail;