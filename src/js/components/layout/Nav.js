import React from "react";
import { IndexLink, Link } from "react-router";
import logo from "../../../images/logo.png";


export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const homeClass = location.pathname === "/" ? "active" : "";
    const signupClass = location.pathname.match(/^\/signup/) ? "active" : "";
    const loginClass = location.pathname.match(/^\/login/) ? "active" : "";
    const eventsClass = location.pathname.match(/^\/events/) ? "active" : "";
    const reportsClass = location.pathname.match(/^\/reports/) ? "active" : "";
    const promoCodesClass = location.pathname.match(/^\/promoCodes/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">
            <img  src={logo}/> 
            </a>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={homeClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li class={signupClass}>
                <Link to="signup" onClick={this.toggleCollapse.bind(this)}>Signup</Link>
              </li>
              <li class={loginClass}>
                <Link to="login" onClick={this.toggleCollapse.bind(this)}>Login</Link>
              </li>
              <li class={eventsClass}>
                <Link to="events" onClick={this.toggleCollapse.bind(this)}>Events</Link>
              </li>
              <li class={reportsClass}>
                <Link to="reports" onClick={this.toggleCollapse.bind(this)}>Reports</Link>
              </li>
              <li class={promoCodesClass}>
                <Link to="promoCodes" onClick={this.toggleCollapse.bind(this)}>Promocodes</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
