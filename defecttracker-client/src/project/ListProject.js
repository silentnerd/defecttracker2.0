import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Breadcrumb,Table, Divider, Popconfirm, Icon } from 'antd';


class ListProject extends React.Component {

  constructor() {
    super();
    this.state ={
        Projectdata:[],
    }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/api/projects').then(res =>
    {
      this.setState({
        Projectdata: res.data,
    })
    });
  }

  handleDeleteProject(id){
    axios.delete('http://localhost:5000/api/projects/'+id).then(res => 
    {
        console.log(res);
        console.log(res.data);
    });
    
  }
  
  render() {
    
const columns = [{
  title: 'ID',
  dataIndex: 'id',
  key: 'id',
  width: '50px',
}, {
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Abbreviation',
  dataIndex: 'abbreviation',
  key: 'abbreviation',
}, {
  title: 'Action',
  key: 'action',
  width: '80px',
  render: (text, record) => (
    <span>
      <Link to={'/project/edit/'+record.id}><Icon type="edit" className="datatable-icon" /></Link>
      <Divider type="vertical" />
      <Popconfirm title="Are you sure, do you want delete this project?" icon={<Icon type="question-circle-o" style={{ color: 'red' }} />} onConfirm={this.handleDeleteProject.bind(this, record.id)} onCancel={this.cancel} okText="Yes" cancelText="No">
    <a href="#"><Icon type="delete" className="datatable-icon" /></a>
  </Popconfirm>
    </span>
  ),
}];


  return (
    <React.Fragment>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Project</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
           
            <Table columns={columns} dataSource={this.state.Projectdata} />

            </div>
          
            </React.Fragment>
  );
}
}

export default ListProject;
