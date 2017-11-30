import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './wrapper.less';

class Wrapper extends Component{
  render(){
    return (
      <div className={styles.wrapper}>
          <div>content</div>
          <div>content</div>
          <div>content</div>
          <div>content</div>
      </div>
    )
  }
}


export default Wrapper
