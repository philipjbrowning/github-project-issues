import React from "react";
import {connect} from "react-redux";
import IssuesContainer from "./IssuesContainer";
import {addProject} from "../actions/projectActions";
import {addIssue} from "../actions/issueActions";
import ProjectsContainer from "./ProjectContainer";

const ContentComponent = ({ addIssueClick, addProjectClick }) => (
  <div className="container">
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row">
          <div className="col-md-3">
            <ProjectsContainer/>
          </div>
          <div className="col-md-9">
            <IssuesContainer/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    addProjectClick: () => {
      dispatch(addProject())
    },
    addIssueClick: () => {
      dispatch(addIssue())
    }
  }
};

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentComponent);

export default ContentContainer;