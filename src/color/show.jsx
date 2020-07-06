import React from 'react';
import callAPI from '../config/apiCaller'
import ListColors from '../color/components/listColor'
import EditModal from './components/editModal'
import { Button, Modal, Form } from 'react-bootstrap';

class CloShow extends React.Component {
    constructor(props) {
        super(props);
        // this.wrapper = React.createRef();
        this.state = {
            colors: [],
            modalShow: false
        }
    }
    componentDidMount() {
        callAPI('adcolor', 'GET', null).then(
            res => {
                this.setState({
                    colors: res.data
                })
            }
        )
    }
    setModalShow() {
        if(this.state.modalShow){
            this.setState({
                modalShow: false
            });
        }else{
            this.setState({
                modalShow: true
            });
        }
        
    }
    render() {
        return (
            <div>
                <ListColors colors={this.state.colors} />
                <EditModal ref={this.wrapper} show={this.state.modalShow} />
                <Button onClick={() => this.setModalShow()}>Add</Button>
            </div>
        )
    }

}
export default CloShow;
