import React from 'react';
import callAPI from '../../config/apiCaller'
import { Button, Modal, Form } from 'react-bootstrap';

class EditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txtNameColor : ''
        }
    }
    componentDidUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate");
        if(this.props.idColor!=prevProps.idColor){
            this.setState({
                txtNameColor: this.props.nameColor
            })
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
        console.log("onSave");
        e.preventDefault();
        callAPI('adcolor/save', 'POST', {
            name: this.state.txtNameColor,
            id: this.props.idColor
        }).then(res => {
             window.location.reload(false);
            console.log(res.data);
        }
        )
    }
    onHide = () => {
        this.props.setFlagShowModal(false, this.props.idColor)
    }
    showTitle(){
        var result = null;
        if(this.props.idColor){
            result='Edit'
        }else{
            result='Add'
        }
        return result;
    }
   
    render() {
        return (
            <div>
                <Modal
                    show={this.props.show} onHide={this.onHide}
                    aria-labelledby="  contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" >
                            {this.showTitle()}
          </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.onSave}>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Enter color" name="txtNameColor"
                                  value={this.state.txtNameColor}  onChange={this.onChange} />
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