import React from 'react'
import {Space} from "antd";
import './App.css'
import AppHeader from './component/AppHeader'
import SideMenu from './component/SideMenu'
import PageContent from './component/PageContent'

function App () {
  return (
    <div className="App" >
      
    <AppHeader/>
    <Space className="SideMenuAndPageContent">
      <SideMenu></SideMenu>
      <PageContent></PageContent>
    </Space>
   
    </div>
  
  )
}

export default App