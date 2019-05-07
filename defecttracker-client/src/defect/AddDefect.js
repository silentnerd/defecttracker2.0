import React from 'react';
import {Content, Select, Form, Steps, message, Breadcrumb, Input, Col, Row, Button, DatePicker} from 'antd';
import './AddDefect.css';
const Option = Select.Option;
const {TextArea} = Input;

const Step = Steps.Step;

const steps = [{
  title: 'Step 1',
  content: 'First-content',
}, {
  title: 'Step 2',
  content: 'Second-content',
}, {
  title: 'Step 3',
  content: 'Third-content',
}, {
  title: 'Step 4',
  content: 'Last-content',
}];
class AddDefect extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        current: 0,
      };
    }

  handleChangeProjectName(value){
      console.log(value);
  }

  handleChangeAllocatedDeveloper(value){

  }

  handleChangeModule(value){

  }

  onChangeEntereddate(date, dateString) {
    console.log(date, dateString);
  }

  onChangeFixeddate(date, dateString) {
    console.log(date, dateString);
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  
  render() {
    const { current } = this.state;
  return (
    <React.Fragment>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Defect</Breadcrumb.Item>
              <Breadcrumb.Item>Add</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

            <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
           <div className="steps-content">
        {
            current === 0
            &&
            <React.Fragment>
               <Row>
      <Col span={12}>
               <Form.Item
            label="Defect ID"
            layout='vertical'
          >
          <Input placeholder="Defect ID" disabled />
          </Form.Item>

          <Form.Item
            label="Description"
            layout='vertical'
          >
          <TextArea rows={4} />
          </Form.Item>
   <Row>
            <Col span={12}>
          <Form.Item
            label="Select Project"
            layout='vertical'
          >
       
          <Select placeholder="Select Project" style={{ width: 225 }} onChange={this.handleChangeProject}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          </Form.Item>
</Col>
<Col span={12}>
          <Form.Item
            label="Select Module"
            layout='vertical'
          >
          <Select placeholder="Select Module" style={{ width: 225 }} onChange={this.handleChangeModule}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          </Form.Item>
  </Col>
  </Row>
          <Row>
          <Col span={8}> <Form.Item
            label="Select Severity"
            layout='vertical'
          >
          <Select placeholder="Select Module" style={{ width: 150 }} onChange={this.handleChangeModule}>
            <Option value="low">Low</Option>
            <Option value="medium">Medium</Option>
            <Option value="high">High</Option>
          </Select>
          </Form.Item></Col>
          <Col span={8}> <Form.Item
            label="Select Priority"
            layout='vertical'
          >
          <Select placeholder="Select Priority" style={{ width: 150 }} onChange={this.handleChangePriority}>
            <Option value="low">Low</Option>
            <Option value="medium">Medium</Option>
            <Option value="high">High</Option>
          </Select>
          </Form.Item></Col>

          <Col span={8}><Form.Item
            label="Select Defect Type"
            layout='vertical'
          >
          <Select placeholder="Select Defect Type" style={{ width: 150 }} onChange={this.handleChangeDefectType}>
            <Option value="userinterface">User Interface</Option>
            <Option value="functionality">Functionality</Option>
            <Option value="enhancement">Enhancement</Option>
            <Option value="performance">Performance</Option>
          </Select>
          </Form.Item></Col>
    </Row>
</Col>
          <Col span={12}></Col>
    </Row>
            </React.Fragment>
          }
          {
            current === 1
            &&
              <React.Fragment> 
                <Row>
      <Col span={12}>
                 <Form.Item
            label="Steps to Create"
            layout='vertical'
          >
          <TextArea rows={4} />
          </Form.Item>
          </Col>
          <Col span={12}></Col>
    </Row>
              </React.Fragment>
          }
          {
            current === 2
            &&
              <React.Fragment> 
                      <Row>
      <Col span={12}>
          <Form.Item
            label="Select Status"
            layout='vertical'
          >
          <Select placeholder="Select Status" style={{ width: 350 }} onChange={this.handleChangeStatus}>
            <Option value="new">New</Option>
            <Option value="open">Open</Option>
            <Option value="fixed">Fixed</Option>
            <Option value="closed">Closed</Option>
            <Option value="reopen">Reopen</Option>
            <Option value="rejected">Rejected</Option>
            <Option value="Deferred">deferred</Option>
          </Select>
          </Form.Item>

          <Form.Item
            label="Entered by"
            layout='vertical'
          >
          <Input placeholder="Entered by" />
          </Form.Item>

          <Row>
            <Col span={12}>
          
          <Form.Item
            label="Assigned To"
            layout='vertical'
          >
          <Select placeholder="Assigned to" style={{ width: 200 }} onChange={this.handleChangeassignedto}>
            <Option value="Tom">Tom</Option>
            <Option value="Sujeban">Sujeban</Option>
            <Option value="Jalan">Jalan</Option>
            <Option value="Ramani">Ramani</Option>
            
          </Select>
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
            label="Fixed by"
            layout='vertical'
          >
          <Select placeholder="Fixed by" style={{ width: 200 }} onChange={this.handleChangefixedby}>
            <Option value="Tom">Tom</Option>
            <Option value="Sujeban">Sujeban</Option>
            <Option value="Jalan">Jalan</Option>
            <Option value="Ramani">Ramani</Option>
            
          </Select>
          </Form.Item>
          </Col>
          </Row>

          <Row>
            <Col span={12}>
          <Form.Item
            label="Entered date"
            layout='vertical'
          >
           <DatePicker onChange={this.onChangeEntereddate} />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
            label="Fixed date"
            layout='vertical'
          >
           <DatePicker onChange={this.onChangeFixeddate} />
          </Form.Item>
          </Col>
          </Row>
          </Col>
          <Col span={12}></Col>
    </Row>
              </React.Fragment>
          }
          {
            current === 3
            && (
              <React.Fragment>
                <Row>
      <Col span={12}>
           <Form.Item
            label="Available In"
            layout='vertical'
          >
          <Input placeholder="Available In" />
          </Form.Item>

          <Form.Item
            label="Comments"
            layout='vertical'
          >
          <TextArea rows={4} />
          </Form.Item>
          </Col>
          <Col span={12}></Col>
    </Row>
              </React.Fragment>
            )
          }
        </div>
        <div className="steps-action">
          {
            current < steps.length - 1
            && <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            current === steps.length - 1
            && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          {
            current > 0
            && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
            )
          }
        </div>
            
            </div>
          
            </React.Fragment>
  );
}
}

export default AddDefect;
