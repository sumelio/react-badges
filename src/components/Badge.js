import React from "react";
import confLog from "../images/badge-header.svg";
class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLog} alt="Logo de la conferencia" />
        </div>
        <div>
          <img src="" alt="Avatar" />
          <h1>
            Richard <br /> Lemus
          </h1>
        </div>

        <div>
          <p>Full stack Engineer </p>
          <p>@lemus</p>
        </div>
        <div>#Lemus</div>
      </div>
    );
  }
}

export default Badge;
