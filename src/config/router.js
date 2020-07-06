import React from 'react'
import CloShow from '../color/show';
import FluShow from '../products/show';
import Home from '../public/home';
import NotFound from '../public/notfound';
import EditColor from '../color/components/edit';

const routers = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/flute',
        exact: true,
        main: () => <FluShow />
    },
    {
        path: '/color',
        exact: true,
        main: () => <CloShow />
    },
    {
        path: '/color/edit/:id',
        exact: true,
        main: ({match, history}) => <EditColor match = {match} history={history} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
]

export default routers;