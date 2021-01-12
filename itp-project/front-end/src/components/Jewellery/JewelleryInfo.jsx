import React, { Component } from "react";
import JewelleryService from "../Service/JewelleryService";

class JewelleryInfo extends Component{
  
  constructor(props) {
    super(props)
        this.state = {
          jewellery: []
        }
        this.addJewelry = this.addJewelry.bind(this);
        this.editJewelry = this.editJewelry.bind(this);
        this.deleteJewelry = this.deleteJewelry.bind(this);
  }
  
  
  componentDidMount(){
    JewelleryService.getJewellery().then((res) => {
        this.setState({ jewellery: res.data});
    });
  }
  
  editJewelry(jewellery_id){
    this.props.history.push(`/UpdateJewellery/${jewellery_id}`);
  }

  addJewelry(){
    this.props.history.push('/JewelleryInsert');
  }

  deleteJewelry(id){
    JewelleryService.deleteJewellery(id).then( res => {
        this.setState({jewellery: this.state.jewellery.filter(jewellery => jewellery.jewellery_id !== id)});
    });
  }

  viewJewellery(id){
    this.props.history.push(`/ViewJewellery/${id}`);
  }


      render(){
          return(
            <div> 
                <h3>All  Jewellery</h3>
                <br/>
                {/*<a class="waves-effect black btn-small" href="/JewelleryInsert">Add New Jewellery</a><br/><br/>*/}
                <div className = "row">
                    <button className="waves-effect black btn-small" onClick={this.addJewelry}>Add New Jewellery</button>
                 </div>

                  <br/>
                    <div className = "row">
                      <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Sell / Rent</th>
                                <th> Material</th>
                                {/*<th> Category</th>
                                <th> Image URL</th>*/}
                                <th> Supply Price</th>
                                {/*<th> Discount</th>*/}
                                <th> Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                          {
                            this.state.jewellery.map(
                              jewellery => 
                              <tr key = {jewellery.jewellery_id}>
                                <td>{jewellery.name}</td>
                                <td>{jewellery.material}</td>
                                {/*<td>{jewellery.category}</td>
                                <td>{jewellery.image_url}</td>*/}
                                <td>{jewellery.supplyPrice}</td>
                                {/*<td>{jewellery.discount}</td>*/}
                                <td>
                                 <button onClick={ () => this.editJewelry(jewellery.jewellery_id)} className="btn btn-info">Update </button>
                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteJewelry(jewellery.jewellery_id)} className="btn btn-danger">Delete </button>
                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewJewellery(jewellery.jewellery_id)} className="btn btn-info">View </button>
                                </td>
                              </tr>
                            )
                          }
                        </tbody>
                      </table>
                    </div>
                  <br/>

               
            </div>

            

          );
      }

}

export default JewelleryInfo;