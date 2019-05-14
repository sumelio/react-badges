import React from "react";

//import logo from "../images/badge-header.svg";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgeEdit.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import api from "../api";

export default class BadgeEdit extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({
      loading: true,
      error: null
    });
    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({
        loading: false
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
            src={header}
            alt="header"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                jobTitle={this.state.form.jobTitle || "TOWTTER"}
                twitter={this.state.form.twitter || "JOB_TITLE"}
                email={this.state.form.email || "EMAIL"}
              />
              ,
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
