import * as Config from './config'
import axios from 'axios';

export default function callAPI(endpoint, method = 'GET', data) {
    return axios({
        method:  method ,
        baseURL: `${Config.API_URL}/${endpoint}`,
        data:  data 
    }).catch(err => {
        console.log(err);
    })
}