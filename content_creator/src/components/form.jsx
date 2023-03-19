import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

const Forms = (props) => {
  const params = useParams()
  console.log(params)
    return(
      <h1>{params.domain}</h1> 
    )
};

export default Forms;
