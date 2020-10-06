import React, { Component } from 'react';
import './style.css'

class Rentjewelries extends Component{

    state = {};

    style = () => {
        return {
          backgroundColor: "#f5f5f5",
          borderRadius: "5px",
          marginTop: "-5px",
          marginBottom: "-10px",
        };
      };

        //ydgyf = () => {

            toggleSidebar = () =>{
                document.getElementById("sidenav").classList.toggle('active');
            }

        render(){
        return(
            <div>
                <body>
                    <div id = "sidenav"> 
                            <div class ="btn_area" onClick = {this.toggleSidebar}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                    
                            <div className = "wrapper">
                                <div className = "sidebar">

                                    <ul>
                                    <li><a href="/rentHome">Necklace</a></li>
                                    <li><a href="/rentHome2">Earrings</a></li>
                                    <li><a href="#">Bracelets</a></li>
                                    <li><a href="#">Ear-studs</a></li>
                                    <li><a href="#">Rings</a></li>
                                    <li><a href="#">Chains</a></li>

                                    </ul>
                                </div>     

                            </div>
                    </div>

                    
                </body>
            </div>
        );
        }
    }

export default Rentjewelries