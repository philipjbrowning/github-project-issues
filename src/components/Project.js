import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ name, onClick }) => (
    <li className="list-group-item"
        onClick={ onClick }>
      { name }
    </li>
);

Project.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func
};

export default Project;
