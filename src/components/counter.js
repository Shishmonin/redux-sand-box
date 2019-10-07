import React from 'react';
import { connect } from 'react-redux';
import *as actions from '../action';
import { bindActionCreators } from 'redux';


const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2>{ counter }</h2>
      <button
          onClick={dec}
          className="btn btn-primary btn-lg">DEC</button>
      <button
          onClick={inc}
          className="btn btn-primary btn-lg">INC</button>
      <button
          onClick={rnd}
          className="btn btn-primary btn-lg">RND</button>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    counter: state
  }
};
// const mapStateToDispatch = (dispatch) => {

//   const { inc,dec,rnd } =
//     bindActionCreators(actions, dispatch);

//   return {
//     inc: inc,
//     dec: dec,
//     rnd: rnd
//   }
// };

export default connect(mapStateToProps,actions )(Counter);