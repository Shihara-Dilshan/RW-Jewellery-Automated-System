import React, { Component } from "react";

import Slider from "./Slider";

class Home extends Component {
  constructor(){
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Slider />
        <div className="container">

        <hr style={{width:"120%",alignContent:"center"}}></hr>
         <table>
           <tr>
           <td>  
          <img src="https://www.katerinaperez.com/uploads/article/image/1112/article_page_Harakh-banner.jpg" alt="" width="90%" style={{marginTop:"30px",marginBottom:"30px",marginLeft:"0px"}}/></td>
          <td style={{width:"500px"}}>
          <p style={{fontFamily:"Sans-serif", fontSize:"20px",marginTop:"50px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
          desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </td>
          </tr>
          </table>

{/*Card 01*/}
       
       <div class="row">
          <h2 class="header">Services</h2>
            <div class="card card-panel linear-gradient (#ffecb3 amber lighten-4, #fff8e1 amber lighten-5) col s1 grid-column-gap 5px" style={{width:"20%" ,marginTop:"30px",border:null,borderRadius:"10px"}}>  
              <div class="card-image waves-effect waves-block waves-light" >
                <img class="activator" src="https://www.desktopbackground.org/download/o/2014/10/25/845452_gold-jewellery-wallpapers_960x854_h.jpg"/>
              </div>
              <div class="card-content" >
                <span class="card-title activator grey-text text-darken-4">Making jewellery<i class="material-icons right">more_vert</i></span>
                  <p><a href="#">See more</a></p>
              </div>
              
                  <div class="card-reveal card-panel #424242 grey darken-3">
                    <span class="card-title white-text text-darken-4 ba ">Card Title<i class="material-icons right">close</i></span>
                    <p style={{fontFamily:"Sans-serif",color:"white"}}>Various techniques are used in jewelry-making, including forging, casting, repoussage, the art of frosting metals   
                        (imparting a grainy and matte appearance to a metal surface using a stamp in the form of a blunt awl or small tube), 
                        embossing (basma), carving, engraving, the art of cameo (a technique in which the background surrounding the design is cut away), 
                        filigree, granulation, niello, enameling, incrustation, etching, and polishing. Machine methods include stamping and rolling..
                        </p>
                  </div>
            </div>

{/*Card 02*/}            
           
           <div class="col s0"></div>
           
            <div class="card card-panel linear-gradient (#ffecb3 amber lighten-4, #fff8e1 amber lighten-5) col s1" style={{width:"20%" ,marginTop:"30px",border:null,borderRadius:"10px"}}>  
              <div class="card-image waves-effect waves-block waves-light" >
                <img class="activator" src="https://www.desktopbackground.org/download/o/2014/10/25/845452_gold-jewellery-wallpapers_960x854_h.jpg"/>
              </div>
              <div class="card-content" >
                <span class="card-title activator grey-text text-darken-4">Repairing jewellery<i class="material-icons right">more_vert</i></span>
                  <p><a href="#">See more</a></p>
              </div>
              
                  <div class="card-reveal card-panel #424242 grey darken-3">
                    <span class="card-title white-text text-darken-4 ba font-family Sans-serif">Card Title<i class="material-icons right">close</i></span>
                    <p style={{fontFamily:"Sans-serif",color:"white"}}>Various techniques are used in jewelry-making, including forging, casting, repoussage, the art of frosting metals   
                        (imparting a grainy and matte appearance to a metal surface using a stamp in the form of a blunt awl or small tube), 
                        embossing (basma), carving, engraving, the art of cameo (a technique in which the background surrounding the design is cut away), 
                        filigree, granulation, niello, enameling, incrustation, etching, and polishing. Machine methods include stamping and rolling..
                        </p>
                  </div>
            </div>

{/*Card 03*/}
            <div class="col s0"></div>
           
            <div class="card card-panel #ffeb3b yellow col s1 " style={{width:"20%" ,marginTop:"30px",border:null,borderRadius:"10px",fontFamily:"Sans-serif"}}>  
              <div class="card-image waves-effect waves-block waves-light" >
                <img class="activator" src="https://www.desktopbackground.org/download/o/2014/10/25/845452_gold-jewellery-wallpapers_960x854_h.jpg"/>
              </div>
              <div class="card-content" >
                <span class="card-title activator grey-text text-darken-4">Delivering jewellery<i class="material-icons right">more_vert</i></span>
                  <p><a href="#">See more</a></p>
              </div>
              
                  <div class="card-reveal card-panel #424242 grey darken-3">
                    <span class="card-title white-text text-darken-4 ba ">Card Title<i class="material-icons right">close</i></span>
                    <p style={{fontFamily:"Sans-serif",color:"white"}}>Various techniques are used in jewelry-making, including forging, casting, repoussage, the art of frosting metals   
                        (imparting a grainy and matte appearance to a metal surface using a stamp in the form of a blunt awl or small tube), 
                        embossing (basma), carving, engraving, the art of cameo (a technique in which the background surrounding the design is cut away), 
                        filigree, granulation, niello, enameling, incrustation, etching, and polishing. Machine methods include stamping and rolling..
                        </p>
                  </div>
            </div>

{/*Card 04*/}
            <div class="col s0"></div>
           
            <div class="card card-panel linear-gradient (#ffecb3 amber lighten-4, #fff8e1 amber lighten-5) col s1" style={{width:"20%" ,marginTop:"30px",border:null,borderRadius:"10px",fontFamily:"Sans-serif"}}>  
              <div class="card-image waves-effect waves-block waves-light" >
                <img class="activator" src="https://www.desktopbackground.org/download/o/2014/10/25/845452_gold-jewellery-wallpapers_960x854_h.jpg"/>
              </div>
              <div class="card-content" >
                <span class="card-title activator grey-text text-darken-4">Exchange jewellery<i class="material-icons right">more_vert</i></span>
                  <p><a href="#">See more</a></p>
              </div>
              
                  <div class="card-reveal card-panel #424242 grey darken-3">
                    <span class="card-title white-text text-darken-4 ba ">Card Title<i class="material-icons right">close</i></span>
                    <p style={{fontFamily:"Sans-serif",color:"white"}}>Various techniques are used in jewelry-making, including forging, casting, repoussage, the art of frosting metals   
                        (imparting a grainy and matte appearance to a metal surface using a stamp in the form of a blunt awl or small tube), 
                        embossing (basma), carving, engraving, the art of cameo (a technique in which the background surrounding the design is cut away), 
                        filigree, granulation, niello, enameling, incrustation, etching, and polishing. Machine methods include stamping and rolling..
                        </p>
                  </div>
            </div>

          
         </div> 

        </div>
      </div>

      
    
    );
    
  }
  
}

export default Home;
