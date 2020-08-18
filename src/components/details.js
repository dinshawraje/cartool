import React,{Component} from "react";
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./serviceinfo.css";

class DetailsForm extends Component{
    render(){
        return(
            <div>
            <h2>Service Name:-{this.props.serviceName}</h2>
            <h2>Service Manager:-{this.props.serviceManager}</h2>
            <h2>Account Name:-{this.props.accountName}</h2>
            <h2>Delivery Manager:-{this.props.deliveryManager}</h2>
            <h2>Location:-{this.props.locationOptions}</h2>
            <h2>Delivery Unit:-{this.props.duOptions}</h2>
            <h2>Year:-{this.props.yearPicked}</h2>
            
            </div>
        )
    };
   
}

export default DetailsForm;