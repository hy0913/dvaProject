import React, { Component } from 'react';
import { connect } from 'dva';
import ContentTop from './contentTop';
import Wrapper from './wrapper';
import styles from './content.less';

class Content extends Component{
  render(){
    return (
      <div className={styles.content}>
        <ContentTop></ContentTop>
        <Wrapper></Wrapper>
      </div>
    )
  }
}


export default Content
