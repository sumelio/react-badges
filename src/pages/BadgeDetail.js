import React from "react";

import "./styles/BadgeDetails.css";
import { Link } from "react-router-dom";

import confLog from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import Modal from "../components/modal";
import DeleteBadgeModal from "../components/DeleteBadge";

function BadgeDetails(props) {
  return (
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLog} alt="Logo de la conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {props.badge.firstName} {props.badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={props.badge.firstName}
              lastName={props.badge.lastName}
              email={props.badge.email}
              twitter={props.badge.twitter}
              jobTitle={props.badge.jobTitle}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${props.badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>

              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                {props.modalIsOpen}
                <DeleteBadgeModal
                  modalIsOpen={props.modalIsOpen}
                  onCloseModal={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeDetails;
