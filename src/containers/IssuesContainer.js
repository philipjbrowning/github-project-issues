import React from 'react';
import { connect } from 'react-redux'
import { viewIssue } from '../actions/issueActions';
import Issue from "../components/Issue";

const IssuesComponent = ({ issues, onIssueClick }) => (
  <div className="panel panel-default">
    <div className="panel-heading">Issues</div>
    <ul className="list-group">
      {issues.map(issue => (
        <Issue title={issue.title} onClick={onIssueClick(issue.id)}/>
      ))}
    </ul>
  </div>
);

// const getIssueByState = (projects, filter) => {
//   switch (filter) {
//     case ISSUE_STATE.BACKLOG:
//       return projects.filter(p => p.state === ISSUE_STATE.BACKLOG);
//     case ISSUE_STATE.CLOSED:
//       return projects.filter(p => p.state === ISSUE_STATE.BACKLOG);
//     case ISSUE_STATE.IN_PROGRESS:
//       return projects.filter(p => p.state === ISSUE_STATE.IN_PROGRESS);
//     case ISSUE_STATE.OPEN:
//       return projects.filter(p => p.state === ISSUE_STATE.OPEN);
//     case ISSUE_STATE.RESOLVED:
//       return projects.filter(p => p.state === ISSUE_STATE.RESOLVED);
//     default:
//       return projects;
//   }
// };

const mapStateToProps = state => {
  return {
    issues: state.issues // getIssueByState(state.issues, state.visibilityFilter)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onIssueClick: id => {
      dispatch(viewIssue(id))
    }// ,
    // onIssueEdit: id => {
    //   dispatch(editIssue(id))
    // }
  }
};

const IssuesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssuesComponent);

export default IssuesContainer;