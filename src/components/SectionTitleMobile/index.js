import React, { useEffect } from 'react';
import './SectionTitleMobile.css';

function SectionTitleMobile(props) {

  return (
    <div className='sectionTitle'>
      <h1> {props.section} </h1>
      <i className='fa fa-angle-right' id='sectionArrow'  
        style={{
          zIndex: 1, 
            textAlign:'center', 
            // backgroundColor: 'black', 
            position: 'absolute', 
            top: '45%',
            left: '80%',
            fontSize: '2.5rem',
            width: '1%',
            minWidth: '20px', 
            borderRadius: '25%', 
            color: 'gray'}}></i>
    </div>
  )
}

export default SectionTitleMobile;