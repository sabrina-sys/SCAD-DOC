import React from 'react';
import err from '../assets/img/errContent.png';
import '../assets/css/body.css';

export default class NoContent extends React.Component {

  render() {
    return (
      <div id="noContent">
       <img id="filenotfound" src={err} />
       <h2>Lo Sentimos!</h2>
       <p>No encontramos informacion sobre tu solicitud</p>
      </div>
    );
  } 
}
  