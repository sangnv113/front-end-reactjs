import React from 'react';
import { Table, Button } from 'react-bootstrap';
import callAPI from '../../config/apiCaller'

class ListColors extends React.Component {

    showColors(colors) {
        var result = null;
        if (colors.length) {
            result = colors.map((color, index) => {
                return (
                    <tr key={index}>
                        <td >{color.id}</td>
                        <td >{color.name}</td> 
                        <td >  
                           {/* <Link to = {`/color/edit/${color.id}`} className="">Edit</Link>  */}
                             <Button onClick={()=>{var id= color.id; this.onEdit(id)}}>Edit</Button> 
                        <Button onClick={()=>{var id= color.id; this.onDelete(id)}}>Delete</Button></td> 
                    </tr>
                )
            });
        }
        return result;
    }
    onDelete(id){
        callAPI(`/adcolor/${id}/delete`, 'POST', null).then(res => {
            window.location.reload(false);
            console.log(res.data);
        })
    }
    onEdit(id){
        this.props.setFlagShowModal(true, id);
    }
    render() {
        var colors = this.props.colors;
        return (
            <div>
                <br /><br />
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>name</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                             {this.showColors(colors)}
                        </tbody>
                    </Table>
            </div>
        )
    }
}

export default ListColors;