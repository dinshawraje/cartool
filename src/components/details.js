import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';
import './details.css';
import {Link} from "react-router-dom";

class DetailsForm extends Component{
    render(){
        return(
            <div className="backgroundStyle">       
             <div>
          <Link to= "/logout"  className="logoutbutton"> Logout</Link>
          </div>
           <Container>
               <Row>
                   <Col md={12} style={{marginTop:"-24px"}}>
                       <h3 className="table-head">Details from Service Info Page</h3></Col>
               </Row>
             <Row style={{marginTop:"-10px"}}>
              <Col md={6}>
               <table>
                <tr>
                <th> 
                    Quality Target
                </th>
                <td>
                    95%
                </td>
                <th>
                    Year
                </th>
                <td>
                   {this.props.location.state.yearPicked}
                </td>
                </tr>
                <tr>
                <th>
                    Delivery Unit(DU)
                </th>
                <td>
                   {this.props.location.state.duOptions}
                </td>
                <th>
                    Account Name
                </th>
                <td>
                  {this.props.location.state.accountName}
                </td>
                </tr>
                <tr>
                <th>
                    Service Name( In Scope )
                </th>
                <td>
                  {this.props.location.state.serviceName}
                </td>
                <th>
                    Location
                </th>
                <td>
                  {this.props.location.state.locationOptions}
                </td>
                </tr>
                <tr>
                <th>
                    Service Manager/Service Lead
                </th>
                <td>
                  {this.props.location.state.serviceManager}
                </td>
                <th>
                    Delivery Manager
                </th>
                <td>
                  {this.props.location.state.deliveryManager}
                </td>
                </tr>
            </table>
    </Col>
    <Col md={6}>
        <table>
            <tr>
                <th>
                    Basis for Selecting Sample Size for QC.
                </th>
            </tr>
            <tr>
                <td>
                Rational Subgrouping, segmentation should be done for selecting sample size for the incident/service Request review etc. For Example: Sample Size and Frequency = Subgrouping of Sample size is done on the basis of below 7 pts:
                <br/>1.100%= P1/P2 incidents (Frequency- Weekly)
                <br/>2. 50% =  P3/P4  Incidents (Frequency- Weekly)
                <br/>3. 100% = Problem Records (Frequency- As and when problem record is resolved)
               <br/> 5. 100% = CR(Frequency- As and when CR  is  received from SAFEMOVE)
               <br/> 6. 100% = Environment  Mgt (Frequency- As and when alerts
                </td>
            </tr>
            </table>
    </Col>
  </Row>
  <Row>
    <Col md={2}>
        <table>
            <tr>
                <th>
                    Agents
                </th>
            </tr>
            <tr>
                <td>
                   Agent 1
                </td>
            </tr>
            <tr>
                <td>
                    Agent 2
                </td>
            </tr>
            <tr>
                <td>
                    Agent 3
                </td>
            </tr>
        </table>
    </Col>
    <Col md={2}>
    <table>
            <tr>
                <th>
                    Reviewers
                </th>
            </tr>
            <tr>
                <td>
                   Reviewer 1
                </td>
            </tr>
            <tr>
                <td>
                    Reviewer 2
                </td>
            </tr>
            <tr>
                <td>
                    Reviewer 3
                </td>
            </tr>
        </table>
    </Col>
    <Col md={8}>
        <table>
            <tr>
                <th>
                    Guidlines for using CAR Tool
                </th>
            </tr>
            <tr>
                <td>
                Step 1: Service Info- Updated and Review the 'Service Info' Sheet before updating all the fields as appropriate. The Defect, Defect Code and Weightage of the defects shall be updated in association of Service Manager of the account. It is mandatory for the account to get a final review of 'Service Info' sheet by DI  Spoc who shall update the review comments in the document control section of this CAR tool.
                <br/>Step 2: Review Sheet-The 'Reviewers / QC persons' of the account are only authorized to update the 'Reveiw Sheet'. The updation of the Review Sheet is the  next step after 'Service Info' is updated. Columns C to G, K and M to M should only be updated and rest of the columns should not be updated by 'Reviewers / QC persons'. 
                <br/>Step 3: Review Report- The Review Report sheet is formula based and is taking inputs from Review Sheet. It is recommended that 'Reviewers / QC persons' validate the correctness of the available information but 'shall not' ' alter this sheet unless there is a specified requirement that is approved by DIA.
                <br/> Step 4: Dashboard- This sheet is a graphical presentation of the reports which can be used for analyzing the quality performance, defect Type trends, % Accuracy Trend, Agent wise defects , Weighted defect density trend ( monthly/weekly). The graph shall not be auto updated until the data source is selected appropriately.
                <br/>Step 5: RCA- The TOP 3 weighted defects will get auto-populated. It is essential that RCA ( Root Cause Analysis) is done against each defect and comments are updated on the monthly basis. 

                </td>
            </tr>

        </table>
    </Col>
  </Row>
</Container>
</div>
    )
    };
}

export default DetailsForm;