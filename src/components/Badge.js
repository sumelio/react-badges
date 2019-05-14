import React from "react";
import confLog from "../images/badge-header.svg";
import "./style/Badge.css";
import Gravater from "../components/Gravater";

class Badge extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLog} alt="Logo de la conferencia" />
        </div>
        <div className="Badge__section-name">
          <Gravater className="Badges_conf-logo" email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#Lemus</div>
      </div>
    );
  }
}

export default Badge;
