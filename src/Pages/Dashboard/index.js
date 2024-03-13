import { Card, Space, Statistic,Typography } from 'antd'
import React from 'react'
import {ShoppingCartOutlined,ShoppingOutlined,UserOutlined,DollarCircleOutlined} from '@ant-design/icons'
import Table from '../../Table/Table'
import PieChart from '../../PieChart/PieChart'


const Dashboard=() =>{
  return (
    <div className="Dashboard">
        <Typography.Title level={8}>Dashboard</Typography.Title>
       <Space direction="horizontal">
        <DashboardCard 
        icon={<ShoppingCartOutlined style={{color:"green", backgroundColor:"rgba(0,255,0,0.25)", borderRadius: 20, fontSize:24, padding:8,}}/>} 
        title={"Orders"} 
        value={12345}/>
        <DashboardCard icon={<ShoppingOutlined style={{color:"purple", backgroundColor:"rgba(0,255,255,0.25)", borderRadius: 20, fontSize:24, padding:8,}}/>} title={"Inventory"} value={12345}/>
        <DashboardCard icon={<UserOutlined style={{color:"red", backgroundColor:"rgba(255,0,0,0.25)", borderRadius: 20, fontSize:24, padding:8,}}/>} title={"Customers"} value={12345}/>
        <DashboardCard icon={<DollarCircleOutlined style={{color:"blue", backgroundColor:"rgba(0,0,255,0.25)", borderRadius: 20, fontSize:24, padding:8,}}/>} title={"Revenue"} value={12345}/>
        
       </Space>
      
       <h2>Recent Orders</h2>

        <Space>
       <Table/> 
       
       <PieChart/>
       </Space>
        </div>
  )
}





function DashboardCard({title,value,icon}) {
  return (
    <Card>
        <Space direction="horizontal">
          {icon}
          
          <Statistic title={title} value ={value}/>
          </Space>
        </Card>
  );
}




export default Dashboard;



 