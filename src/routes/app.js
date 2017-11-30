import React, { Component } from 'react';
import { connect } from 'dva';
import * as cookies from '../utils/cookie';

class App extends Component{
  constructor(){
    super();
  }
  render(){
    console.log(this.props)
    return (
      <div className='app'>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return {app:state.app}
}

export default connect(mapStateToProps)(App)
