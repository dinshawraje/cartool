import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';
import './details.css';
import {Link} from "react-router-dom";
import Select from 'react-select';

/* Import Components */
import Button from '../containers/button'


class DetailsForm extends Component{
    constructor() {
        super();
    
        this.state = {
          newUser: {
            
            skills: [{
              category: "",
              techSkill: "",
              rating: ""
            }],
          },
    
    
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
    
      }
      /* This lifecycle hook gets executed when the component mounts */
  handleInput(e) {
    const { name, value } = e.target
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, [name]: value
      }
    }), () => console.log(this.state.newUser))
  }
  handleFormSubmit(e) {
    e.preventDefault();
    let data = this.state.newUser;
    console.log('Data fetch submitted' + JSON.stringify(data))
    this.props.dispatch({
      type: 'ADD_EMP',
      data,
    });
    this.props.history.push({
      pathname: '/emp/'+[data.empId],
      state: { detail: data }
    })
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        empId: 0,
        name: '',
        email: '',
        du: "",
        project: "",
        domain: "",
        skills: [{
          category: "",
          techSkill: "",
          rating: ""
        }],
      },
    })
  }

  handleAddSkill = (event) => {
    event.preventDefault();
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, skills: this.state.newUser.skills.concat([{
          techSkill: [],
          rating: []
        }])
      }
    }), () => console.log(this.state.newUser))
  };

  handleRemoveSkill = idx => () => {
    this.setState({
      newUser: {
        skills: this.state.newUser.skills.filter((s, sidx) => idx !== sidx)
      }
    });
  }

  handleSkillInput = idx => (selectedOption, nameOfComponent) => {
    console.log(this.state.newUser)
    // const { name, value } = evt.target
    const newSkills = this.state.newUser.skills.map((skill, sidx) => {
      if (idx !== sidx) return skill;
      return { ...skill, [nameOfComponent.name]: selectedOption };
    });
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, skills: newSkills
      }
    }), () => console.log(this.state.newUser))

  };
  handleSelectChange = (selectedOption, nameOfComponent) => {
    console.log('nameofComponent' + JSON.stringify(nameOfComponent));
    console.log('selectedOption' + JSON.stringify(selectedOption))
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, [nameOfComponent.name]: selectedOption
      }
    }), () => console.log(this.state.newUser))
  };
    
    render(){
        const categoryOptions = require('../data/categoryOptions.json');
        const techSkillOption = require('../data/techSkillOptions.json');
        const ratingOption = require('../data/ratingOptions.json');
    
        return(
            <div className="backgroundStyle">
            <div>
                <Link to= "/logout"  className="detailLogout">
                Logout</Link>
            </div>
            <Container>
                <Row>
                <Col md={12} style={{marginTop:"-24px"}}>
                <h3 className="table-head">Details from Service Info Page</h3>
                </Col>
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
                        {/* <br/>Step 2: Review Sheet-The 'Reviewers / QC persons' of the account are only authorized to update the 'Reveiw Sheet'. The updation of the Review Sheet is the  next step after 'Service Info' is updated. Columns C to G, K and M to M should only be updated and rest of the columns should not be updated by 'Reviewers / QC persons'. 
                        <br/>Step 3: Review Report- The Review Report sheet is formula based and is taking inputs from Review Sheet. It is recommended that 'Reviewers / QC persons' validate the correctness of the available information but 'shall not' ' alter this sheet unless there is a specified requirement that is approved by DIA.
                        <br/> Step 4: Dashboard- This sheet is a graphical presentation of the reports which can be used for analyzing the quality performance, defect Type trends, % Accuracy Trend, Agent wise defects , Weighted defect density trend ( monthly/weekly). The graph shall not be auto updated until the data source is selected appropriately.
                        <br/>Step 5: RCA- The TOP 3 weighted defects will get auto-populated. It is essential that RCA ( Root Cause Analysis) is done against each defect and comments are updated on the monthly basis.  */}
                    </td>
                    </tr>
                </table>
                </Col>
                </Row>
                <Row>
                <form className="container-fluid mt-5" onSubmit={this.handleFormSubmit}>
  {
  this.state.newUser.skills.map((skill, idx) => (
  <div className="form-row">
    <div className="form-group col-md-4">
      <label className="form-label col-form-label"> Category  </label>
      <Select
        name={'category'}
        options={categoryOptions}
        value={skill.category}
        onChange={this.handleSkillInput(idx)}
        />{/* Domain Selection */}
    </div>
    <div className="form-group col-md-4">
      <label className="form-label col-form-label "> Skill  </label>
      <Select
      name={'techSkill'}
      options={(skill.category) ? (techSkillOption.filter((o) => o.link === skill.category.value)) : techSkillOption}
      value={skill.techSkill}
      onChange={this.handleSkillInput(idx)}
      />
    </div>
    <div className="form-group col-md-2">
      <label className="form-label col-form-label"> Rating  </label>
      <Select
        name={'rating'}
        options={ratingOption}
        value={skill.rating}
        onChange={this.handleSkillInput(idx)}
        />
    </div>
    <div className="form-group col-md-2">
      <Button
        action={this.handleRemoveSkill(idx)}
        type={'btn btn-danger form-control'}
        title={'remove'}
        />
    </div>
  </div>
  ))
  }
  <Button
  action={this.handleAddSkill}
  type={'btn btn-primary'}
  title={'Add Skills'}
  /> { /*Submit */}
  <br />
  <div className='text-center'>
    <Button
      type={'btn btn-primary'}
      title={'Save'}
      /> { /*Submit */}
    <Button
      action={this.handleClearForm}
      type={'btn btn-secondary'}
      title={'Clear'}
      /> {/* Clear the form */}
  </div>
</form>
                </Row>
            </Container>
        </div>
    )
    };
}

export default DetailsForm;