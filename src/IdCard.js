import React from 'react';

function IdCard (props){
  return (
    <>
      <p>{props.fullName}</p>
      <p>{props.gender}</p>
      <p>{props.birthday}</p>
      <img src={props.picture}/>
    </>
  )
}



export default IdCard