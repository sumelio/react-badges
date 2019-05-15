import React from "react";

import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";

import api from "../api";
import PageLoading from "../components/PageLoading";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: []
  };
  constructor(props) {
    super(props);
    // this.state = {
    //   data: []
    // };
    console.log("1. constructor ", props);
  }

  componentDidMount() {
    console.log("3. componentDidMount");
    this.fetchData();

    // this.varTimeount = setTimeout(() => {
    //   this.setState({
    //     data: [
    //       {
    //         id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
    //         firstName: "Freda",
    //         lastName: "Grady",
    //         email: "Leann_Berge@gmail.com",
    //         jobTitle: "Legacy Brand Director",
    //         twitter: "FredaGrady22221-7573",
    //         avatarUrl:
    //           "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
    //       },
    //       {
    //         id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
    //         firstName: "Major",
    //         lastName: "Rodriguez",
    //         email: "Ilene66@hotmail.com",
    //         jobTitle: "Human Research Architect",
    //         twitter: "MajorRodriguez61545",
    //         avatarUrl:
    //           "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
    //       },
    //       {
    //         id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
    //         firstName: "Daphney",
    //         lastName: "Torphy",
    //         email: "Ron61@hotmail.com",
    //         jobTitle: "National Markets Officer",
    //         twitter: "DaphneyTorphy96105",
    //         avatarUrl:
    //           "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
    //       }
    //     ]
    //   });
    // }, 3000);
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null
    });

    try {
      api.badges.list().then(data => {
        console.log(data);
        this.setState({
          loading: false,
          data: data
        });
      });

      const data = await api.badges.list();
      console.log(data);
      this.setState({
        loading: false,
        data: data
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  componentDidUpdate(provProps, prevState) {
    console.log("5. componentDidMount");
    console.log({
      _1provProps: provProps,
      _2prevState: prevState
    });

    console.log({
      _1props: this.props,
      _2state: this.state
    });
  }

  componentWillUnmount() {
    console.log("6. componentDidUmount");
    clearTimeout(this.varTimeount);
  }

  render() {
    console.log("2,4. render");

    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.data}>
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </BadgesList>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
