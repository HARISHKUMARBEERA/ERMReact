import React from 'react'
import './SideMenu.css'
import { Menu } from "antd";
import { HomeOutlined ,AppstoreOutlined,ShoppingCartOutlined,CalendarOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function SideMenu() {
    const navigate = useNavigate();
  return (
    <div className="SideMenu">
     <Menu 
     
     onClick={(item)=>{
        
        navigate(item.key);
     }}
     items={[
        {
            label: "Dashboard",
            icon: <HomeOutlined />,
            key: '/'
           
        },
        {
            label: "Products",
            key: '/products',
            icon:<AppstoreOutlined/>,
        },
        {
            label: "Orders",
            key: '/orders',
            icon:<ShoppingCartOutlined/>,
        },
        
        {
            label: "Calendar",
            icon:<CalendarOutlined />,
            key: '/Calendar'
        },
        

    ]}
     ></Menu>

     </div>
  );
}

export default SideMenu