import React from 'react';
import callAPI from '../config/apiCaller'
import ListColors from '../color/components/listColor'
import EditModal from './components/editModal'
import { Button } from 'react-bootstrap';

class CloShow extends React.Component {
    constructor(props) {
        super(props);
        // this.wrapper = React.createRef();
        this.state = {
            colors: [],
            modalShow: false,
            idColor: '',
            nameColor: ''

        }
        this.setShowModal = this.setShowModal.bind(this);
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
    setShowModal(flag, id) {
        if (id && flag && id != this.state.idColor) {
            callAPI(`adcolor/${id}`, 'GET', null)
                .then(res => {
                    var data = res.data;
                    this.setState({
                        nameColor: data.name,
                        idColor: id,
                        modalShow: flag
                    })
                })
                return;
        }else{
            this.setState({
                idColor: id,
                nameColor:'',
                modalShow: flag
            })
        }
    }
    render() {
        return (
            <div>
                <ListColors 
                setFlagShowModal={this.setShowModal} 
                colors={this.state.colors} />
                <EditModal 
                setFlagShowModal={this.setShowModal}
                 show={this.state.modalShow} 
                 idColor={this.state.idColor}
                 nameColor ={this.state.nameColor}
                  />
                <Button onClick={() => this.setShowModal(true, null)}>Add</Button>
            </div>
        )
    }

}
export default CloShow;
