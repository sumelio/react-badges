import React from "react";

import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";
import BadgeDetails from "./BadgeDetail";

export default class BadgeDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined,
      modalIsOpen: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null
    });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({
        loading: false,
        data: data
      });
      console.log(data);
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  handleDeleteBadge = e => {
    this.setState({ modalIsOpen: false, loading: true, error: null });
    this.deleteBadge();
  };

  deleteBadge = async () => {
    try {
      await api.badges.remove(this.props.match.params.badgeId);

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  render() {
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    if (this.state.loading) {
      return <PageLoading />;
    }

    const badge = this.state.data;

    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
        badge={badge}
      />
    );
  }
}
