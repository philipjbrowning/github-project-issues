import React from 'react';
import { connect } from 'react-redux'
import { viewProject } from '../actions/projectActions';
import Project from "../components/Project";
import PropTypes from 'prop-types';

const ProjectComponent = ({ projects, onProjectClick }) => (
  <div className="panel panel-default">
    <div className="panel-heading">Projects</div>
    <ul className="list-group">
      {projects.map(project => (
        <Project name={project.name} onClick={onProjectClick(project.id)} key={project.id}/>
      ))}
    </ul>
  </div>
);

ProjectComponent.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  ),
  onProjectClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ projects: state.projects });

const mapDispatchToProps = dispatch => {
  return {
    onProjectClick: id => {
      dispatch(viewProject(id))
    }
  }
};

const ProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectComponent);

export default ProjectContainer;