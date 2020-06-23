import React from 'react'
import DruIndex from '../drum/index';
import FluShow from '../flute/show';
import Home from '../public/home';
import NotFound from '../public/notfound';

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
        path: '/drum',
        exact: true,
        main: () => <DruIndex />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
]

export default routers;