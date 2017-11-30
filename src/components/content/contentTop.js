import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './contentTop.less';

class ContentTop extends Component{
  render(){
    console.log(this.props)
    return (
      <div className={styles.contentTop}>
        <span>一级菜单/二级菜单</span>
      </div>
    )
  }
}


export default ContentTop
