import React from 'react';
import axios from 'axios';
import {Content, Select, Form, Breadcrumb, Input, Col, Row, Button, AutoComplete} from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
const projectlist = [];
const developerlist = [];
const qalist = [];
class AddModule extends React.Component {

 constructor(props) {
   super(props);

   this.state = {
     name: {value: ''}, 
     module_id: {value: ''}, 
     project_id: {value: ''},
     qainsertlist: {value: []},
     developerinsertlist: {value: []},
     abbreviation: '',
   }
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleInputChange = this.handleInputChange.bind(this);
   this.handleChangeProjectName = this.handleChangeProjectName.bind(this);
  this.handleChangeQA = this.handleChangeQA.bind(this);
  this.handleChangeAllocatedDeveloper = this.handleChangeAllocatedDeveloper.bind(this);
  
 }
 

  handleChangeProjectName(value){
const projectnameValidation = this.validateSelectProject(value);
    this.setState({
       project_id: {
         value: value,
         ...projectnameValidation
       }
     });
     
       console.log(value);
       axios.get('http://localhost:5000/api/projects/' + value).then(res1 => {
          axios.get('http://localhost:5000/api/countmodulebasedonproject/'+value).then(res =>{
            console.log(res.data);
            this.setState({module_id: {value: res1.data.abbreviation+'/'+res.data+1}});   
          });
        });
      }

   handleInputChange(event, validationFun) {
     const target = event.target;
     const inputName = target.name;
     const inputValue = target.value;

     this.setState({
       [inputName]: {
         value: inputValue,
         ...validationFun(inputValue)
       }
     });

   }

  handleChangeAllocatedDeveloper(value){
console.log(value.length);
   const developerinsertlistValidation = this.validateSelectDeveloper(value);
    this.setState({
       developerinsertlist: {
         value: [value],
         ...developerinsertlistValidation
       }
     });
     
       console.log(this.state.developerinsertlist);
  }

  handleChangeQA(value) {
    console.log(value.length);
   const qainsertlistValidation = this.validateSelectQA(value);
    this.setState({
       qainsertlist: {
         value: [value],
         ...qainsertlistValidation
       }
     });
     
       console.log(this.state.qainsertlist);
      
  }

  handleSubmit(event) {
    event.preventDefault();
    const moduleData = {  
      name: this.state.name.value,
      module_id: this.state.module_id.value,
      project_id: this.state.project_id.value,
    };
    axios.post(`http://localhost:5000/api/module`, JSON.stringify(moduleData), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  }

  handleModulename(value) {
    console.log(value);
  }

    handleInputChange(event, validationFun) {
      const target = event.target;
      const inputName = target.name;
      const inputValue = target.value;

      this.setState({
        [inputName]: {
          value: inputValue,
          ...validationFun(inputValue)
        }
      });

    
    }

    
    
    componentDidMount(){
      
    axios.get('http://localhost:5000/api/projects').then(res =>
    {
      console.log(res.data);
        for (let i = 0; i < res.data.length; i++) {
          projectlist.push(<Option key={res.data[i].id}>{res.data[i].name}</Option>);

        }
        
    });

    axios.get('http://localhost:5000/api/users/type/developer').then(res =>
    {
      console.log(res.data);
        for (let i = 0; i < res.data.length; i++) {
          developerlist.push(<Option key={res.data[i].fname+' '+res.data[i].lname}>{res.data[i].fname} {res.data[i].lname}</Option>);

        }
    });

     axios.get('http://localhost:5000/api/users/type/qa').then(res =>
    {
      console.log(res.data);
        for (let i = 0; i < res.data.length; i++) {
          qalist.push(<Option key={res.data[i].fname+' '+res.data[i].lname}>{res.data[i].fname} {res.data[i].lname}</Option>);

        }
    });

     
  }
  render() {
    console.log(projectlist);
  return (
    <React.Fragment>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Module</Breadcrumb.Item>
              <Breadcrumb.Item>Add</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <Row>
      <Col span={12}>

       <Form.Item
            label="Module ID"
            layout='vertical'>
          <Input placeholder = "Module ID"
          className={this.module_id}
          value={this.state.module_id.value}
          disabled 
          onChange = {(event) => this.handleInputChange(event, this.validateName)}
          />
          </Form.Item>
      <Form.Item
            hasFeedback
            label="Project Name"
            layout='vertical'
            validateStatus={this.state.project_id.validateStatus}
                            help={this.state.project_id.errorMsg}>
          <Select 
          defaultValue="Select Project"  
          className={this.project_id} 
          name="project_id" 
          style={{ width: 250 }}
          onChange={this.handleChangeProjectName} >
            {projectlist}
          </Select>
          </Form.Item>

           

          <Form.Item
           hasFeedback
            label="Module Name"
            layout='vertical'
            validateStatus={this.state.name.validateStatus}
                            help={this.state.name.errorMsg}>
          <Input placeholder="Module Name"
          className={this.name}
          name='name' 
          onChange = {(event) => this.handleInputChange(event, this.validateName)}
          />
          </Form.Item>

        
         
          <FormItem 
           hasFeedback
          label="Select QA"
          validateStatus={this.state.qainsertlist.validateStatus}
                            help={this.state.qainsertlist.errorMsg}>  
                    <Select
                      mode="multiple"
                      style={{ width: '100%' }}
                      className={this.qainsertlist}
                      name="qainsertlist"
                      placeholder="Select QA"
                      onChange={this.handleChangeQA}
                    >
                      {qalist}
                    </Select>
                  </FormItem>

          <FormItem 
           hasFeedback
          label="Allocated developers"
           validateStatus={this.state.developerinsertlist.validateStatus}
                            help={this.state.developerinsertlist.errorMsg}>
                    
                     
                    <Select
                      mode="multiple"
                      style={{ width: '100%' }}
                      className={this.developerinsertlist}
                      name="developerinsertlist"
                      placeholder="Select developers"
                      onChange={this.handleChangeAllocatedDeveloper}
                    >
                      {developerlist}
                    </Select>
                  </FormItem>

        

          <Button type="primary">Create</Button>
          <Button>Clear</Button>
          </Col>
          <Col span={12}></Col>
    </Row>
            </div>
          
            </React.Fragment>
  );
}
validateSelectProject = (value) => {
  if (value == 0) {
    return {
      validateStatus: 'error',
      errorMsg: `Please select a project.)`
    }
  } else {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }
}

validateSelectQA = (value) => {
  if (value.length == 0) {
    return {
      validateStatus: 'error',
      errorMsg: `Please select QA.)`
    }
  } else {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }
}

validateSelectDeveloper = (value) => {
  if (value.length == 0) {
    return {
      validateStatus: 'error',
      errorMsg: `Please select Developer.)`
    }
  } else {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }
}

validateName = (name) => {
  if (name.length < 3) {
    return {
      validateStatus: 'error',
      errorMsg: `Name is too short (Minimum 3 characters needed.)`
    }
  } else if (name.length > 45) {
    return {
      validationStatus: 'error',
      errorMsg: `Name is too long (Maximum 45 characters allowed.)`
    }
  } else {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }
}
}

export default AddModule;
