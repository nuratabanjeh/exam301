import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
export class UpdateForm extends Component {
    render() {
        return (
            <div>

                <Modal show={this.props.show}
                    onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>update form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.UpdateData} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="strDrink" defaulValue={this.props.strDrink} />
                                <Form.Label>img</Form.Label>
                                <Form.Control type="text" name="strDrinkThumb" defaulValue={this.props.strDrinkThumb} />
                            </Form.Group>



                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default UpdateForm
