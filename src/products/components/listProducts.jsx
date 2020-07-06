import React from 'react';
import { Table } from 'react-bootstrap';
class ListProducts extends React.Component {

    showProducts(products) {
        var result = null;
        if (products.length) {
            result = products.map((product, index) => {
                return (
                    <tr key={index}>
                        <td >{product.id}</td>
                        <td >{product.name}</td>
                        <td >{product.category}</td>
                        <td >{product.producer}</td> 
                        <td >{product.color}</td> 
                        <td >{product.gia}</td> 
                        <td >{product.luotdanhgia}</td> 
                        <td >{product.datepr}</td> 
                        <td >{product.soluong}</td> 
                        <td >{product.visits}</td> 
                    </tr>
                )
            });
        }
        return result;
    }
    render() {
        var products = this.props.products;
        return (
            <div>
                <br /><br />
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>name</th>
                                <th>category</th>
                                <th>producer</th>
                                <th>color</th>
                                <th>price</th>
                                <th>rate</th>
                                <th>datepr</th>
                                <th>amount</th>
                                <th>visits</th>
                            </tr>
                        </thead>
                        <tbody>
                             {this.showProducts(products)}
                        </tbody>
                    </Table>
            </div>
        )
    }
}

export default ListProducts;