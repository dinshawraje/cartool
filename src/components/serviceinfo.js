import React,{Component} from 'react';
import Select from 'react-select';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput,MDBIcon } from 'mdbreact';
import QualityRange from './qualityrange';
import 'mdbreact/dist/css/mdb.css';
import './serviceinfo.css';
import YearPick from './yearpick';

const duOptions = [
    {
      label: "UK",
      value: "1"
    },
    {
      label: "France",
      value: "2"
    },
    {
      label: "BPS",
      value: "3"
    },
    {
      label: "DSI",
      value: "4"
    },
    {
      label: "Germany",
      value: "5"
    }
  ];

   const locationOptions = [ 
     {
       label:"Noida Site 1",
       value: "1"
      },
     {
      label:"Noida Site 3",
      value:"2"
     },
     {
       label:"UK",
       value:"3"
     },
     {
      label:"France",
       value:"4"
     }
   ];
class ServiceInfo extends Component{
   
      
    render(){
        return(
           <div>
              <h1 className="serviceInfo"> Service Info Page</h1>
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
              <form>
                <p className="h4 text-center py-4">Provide the below details:</p>
                <div className="grey-text">
                  <h4 className="quality">Quality Target</h4>
                  <span className="iconstyle"><MDBIcon icon="bullseye" size="2x"/></span><QualityRange/>
                  <h4 className="quality">Delivery Unit(DU)</h4>
                  <span className="iconstyle"><MDBIcon icon="truck" size="2x"/></span><Select className="deliveryunit"
                    options={duOptions}   
                  />

                  <h4 className="quality sname">Service Name(In Scope)</h4>
                  <MDBInput
                  icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <h4 className="quality mname">Service Manager/Service Lead</h4>
                  <MDBInput
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                 
                  <div className="yearpick">
                  <h4>Year</h4>
                  <span className="calendarstyle"><MDBIcon icon="calendar" size="x"/></span><YearPick/>
                  </div>
                 
                  <h4 className="quality">Location</h4>
                  <span className="locstyle"><MDBIcon icon="globe" size="2x"/></span><Select className="deliveryunit"
                    options={locationOptions}   
                  />       
                   
                   <h4 className="quality sname">Account Name</h4>
                  <MDBInput
                  icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <h4 className="quality mname">Delivery Manager</h4>
                  <MDBInput
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Submit Details
                  </MDBBtn>
                 
                </div>
              </form>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
           </div>
        );
    }
}

export default ServiceInfo;
