import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './sideBar.less';
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;

class SideBar extends Component{
  constructor(){
    super();
    this.state = {
      collapsed: false
    }
  }
  toggleCollapsed () {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render(){
    return (
      <div id='sideBar' className={styles.sideBar}>
        <div style={{ width: 240,height:'100%' }}>
          <div>logo区域</div>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>试题录入</span></span>}>
              <Menu.Item key="5">批量导入</Menu.Item>
              <Menu.Item key="6">收到录入</Menu.Item>
              <Menu.Item key="7">整卷导入</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>题库管理</span></span>}>
              <Menu.Item key="9">按知识点查看</Menu.Item>
              <Menu.Item key="10">按章节目录查看</Menu.Item>
              <Menu.Item key="11">整卷查看</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    )
  }
}


export default SideBar
