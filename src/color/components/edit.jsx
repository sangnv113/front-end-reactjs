import React from 'react';
import callAPI from '../../config/apiCaller'
import { Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";


class EditColor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
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
        e.preventDefault();
        var history = this.props.history;
        callAPI('adcolor/save', 'POST', {
            name: this.state.txtColorName,
            id: this.state.id
        }).then(res => {
            history.goBack();
        }
        )
    }
    componentDidMount() {

        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            var history = this.props.history;
            this.setState({
                id: match.params.id
            })
            callAPI(`adcolor/${id}`, 'GET', null)
                .then(res => {
                    var data = res.data;
                    this.setState({
                        txtColorName: data.name
                    })
                })
        }
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.onSave}>
                    <Form.Group >
                        <Form.Control className="" type="text" placeholder="Enter color" name="txtColorName"
                            value={this.state.txtColorName} onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit" > Submit  </Button>
                    </Form.Group>
                </Form>
                <Button> <Link to='/color' className="link-button">Cancel</Link> </Button>
            </div>
        );
    }
}
export default EditColor;