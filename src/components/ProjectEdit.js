import React from 'react';
// import PropTypes from 'prop-types';
import Modal from "react-bootstrap/es/Modal";
import Button from "react-bootstrap/es/Button";
import ApiKeyForm from "./ApiKeyForm";

// const closeModal = function ()

const ProjectEdit = ({projects, add, remove, update}) => {
  // debugger;
  
  
  return (
    <Modal show={false} onHide={update()}>
      <Modal.Header closeButton>
        <Modal.Title>Create A New Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Please enter the project name</h4>
        <ApiKeyForm onSubmit={this.closeModal} onKeyChange={this.updateKey}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

// class ProjectEdit extends Component {
//   constructor(props) {
//     super(props);
//     // this.newKey = '';
//     //
//     // this.closeModal = this.closeModal.bind(this);
//     // this.updateKey = this.updateKey.bind(this);
//     console.log(this.props);
//   }
//
//   closeModal() {
//     // this.props.close(this.newKey);
//   }
//
//   updateKey(key) {
//     // console.log(this.props);
//     // this.newKey = key;
//   }
//
//   // render() {
//   //   return (
//   //
//   //   );
//   // }
// }
//
// ProjectEdit.propTypes = {
// };

export default ProjectEdit;
