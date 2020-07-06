import React from 'react';
import callAPI from '../../config/apiCaller'
import { Button, Modal, Form } from 'react-bootstrap';

class EditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show,
            txtColorName: ''
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    onSave = (e) => {
        console.log("asdsd:" + this.state.txtColorName);
        e.preventDefault();
        callAPI('adcolor/save', 'POST', {
            name: this.state.txtColorName
        }).then(res => {
            window.location.reload(false);
            console.log(res.data);
        }
        )
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps");
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.show !== this.props.show) {
            console.log("componentDidUpdate:");
            this.setState(
                {
                    show: true
                });
        }
    }
    onHide = () => {
        console.log("onHide");
        var show = false;
        this.setState({
            show: show
        });
    }
    render() {
        return (
            <div>
                <Modal
                    show={this.state.show} onHide={this.onHide}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add color
          </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.onSave}>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Enter color" name="txtColorName"
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="primary" type="submit" > Submit  </Button>
                                <Button onClick={this.onHide}>Close</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
export default EditModal;