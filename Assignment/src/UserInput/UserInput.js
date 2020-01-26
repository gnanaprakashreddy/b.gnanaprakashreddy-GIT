import React from 'react';


const input = (props) => {
  const inputStyle = {
      border :'2px solid red'
  };
  return  <input type="text" style={inputStyle} onChange={props.changeName} value={props.userName}></input> 
};
export default input;
