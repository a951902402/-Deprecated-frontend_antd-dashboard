import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

let count  = 0
const DvaState = ({
      dispatch,
      dvaState,
      }) => {
  const {dataList} = dvaState
  console.log(dataList)
  console.log(dvaState)

  const handleChangeState = () => {
    dispatch({
      type:'dvaState/changeState',
      payload:{
        dataList:[
          {
            list1: count++,
            list2: 'list22',
            list3: 'list33'
          },
          {
            list2:'111'
          }
        ]
      }
    })
  }
  return (
    <div>
      <h2>dvaState</h2>
      <h2>{dataList[0].list1}</h2>
      <button onClick={handleChangeState}>改变state</button>
    </div>
  );
};


export default connect(({ dvaState }) => ({
  dvaState
}))(DvaState);