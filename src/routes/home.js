import React, { Component } from 'react';
import { connect } from 'dva';
import SideBar from '../components/sideBar/sideBar';
import Content from '../components/content/content';
import styles from '../styles/main.css'


class Home extends Component{
  render(){   
    return (
        <div className={styles.pageWrapper}>
          <SideBar></SideBar>
          <Content></Content>
        </div>
    )
  }
}

function mapStateToProps( state ) {
  return {app:state.app}
}

export default connect(mapStateToProps)(Home)
