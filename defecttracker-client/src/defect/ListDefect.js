import React from 'react';
import {Content, Select, Form, Breadcrumb, Input, Col, Row, Button, DatePicker,Table, Divider, Tag } from 'antd';
const Option = Select.Option;
const {TextArea} = Input;
class ListDefect extends React.Component {

  
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
  
  render() {
    
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => {
        let color = tag.length > 5 ? 'geekblue' : 'green';
        if (tag === 'loser') {
          color = 'volcano';
        }
        return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
      })}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];
  return (
    <React.Fragment>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Defect</Breadcrumb.Item>
              <Breadcrumb.Item>Add</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
           
            <Table columns={columns} dataSource={data} />

            </div>
          
            </React.Fragment>
  );
}
}

export default ListDefect;
