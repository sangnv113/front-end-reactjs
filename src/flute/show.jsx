import React from 'react';

import ListProducts from '../public/components/ListProducts'
import callAPI from '../config/apiCaller'

class FluShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }
    componentDidMount() {
        callAPI('adguitar', 'GET', null)
        .then(res => {
            console.log(res.data);
            this.setState({
                products: res.data
            })
        })
    }
    render() {
        return (
            <div>
               <ListProducts products= {this.state.products} />
            </div>
        )
    }

}
export default FluShow;
