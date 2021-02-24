import React from "react";
import "../assets/css/body.css";
import Menu from "../components/Menu";
import Home from "../screens/Home";
import Document from "../screens/Document";
import NoContent from "../screens/NoContent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
  Link,
} from "react-router-dom";
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usuario: props.user };
  }

  render() {
    return (
      <div className="container-fluid px-0 dash">
       
          <Menu user={this.props.user} />
          <div className="space-container">
            
              <Switch>
                <Route exact path="/dashboard" component={Home}>
                </Route>
                <Route exact path="/dashboard/documents" component={Document}>
                </Route>
                <Route component={NoContent}>
                </Route>
              </Switch>
         
        </div>
      </div>
    );
  }
}
