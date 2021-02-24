import React from 'react';
import Form from '../components/Form'
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usuario:""}

   
  }
  render() {
    return (
      <div >
        <Form/>
      
        
      </div>
    );
  } 
}
  