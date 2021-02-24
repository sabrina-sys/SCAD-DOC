import "../assets/css/form.css";
import React from "react";
import UserPhoto from "../assets/img/logo4.jpg";
import Auth from "../services/AuthService";
//import {Link} from 'react-router-dom';
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "alberto@scad.com",
      pass: "santiago",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleChangePass(event) {
    this.setState({ pass: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault(); // pendiente investigar poara que es esto
    const response = Auth(this.state.value);
    console.log(response);
    if (response[0] != undefined) {
      // Hay usuario
      if (response[0].pass === this.state.pass) {
        localStorage.setItem("test", this.state.value);
        sessionStorage.setItem("user", response[0].nombre);
        sessionStorage.setItem("profile", response[0].profile);
        sessionStorage.setItem("role", response[0].role);
        window.location.href = "/dashboard";
      } else {
        alert("Contrase;a incorrecta");
      }
    } else {
      alert("Usuario no encontrado");
    }
  }

  render() {
    return (
      <div className="Card-Form">
        <form onSubmit={this.handleSubmit} className="column">
          <div className="user-photo">
            <img src={UserPhoto} alt="USerPhoto" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <ion-icon name="mail-outline"></ion-icon>
              </span>
            </div>
            <input
              type="email"
              value={this.state.value}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon2">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
            </div>

            <input
              type="password"
              value={this.state.pass}
              onChange={this.handleChangePass}
              className="form-control"
            />
          </div>

          <input className="buttonLink" type="submit" value="Acceder" />
        </form>
      </div>
    );
  }
}
