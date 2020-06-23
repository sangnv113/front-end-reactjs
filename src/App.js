import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menu from './public/components/menu.jsx';
import Footer from './public/components/footer.jsx';
import routers from './config/router.js'


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <Footer />
                    <Switch>
                        {this.showContentsMenu(routers)}
                    </Switch>
                </div>
            </Router>
        )
    }
    showContentsMenu = (routers) => {
        var result = null;
        if (routers.length > 0) {
            result = routers.map((route, index) => {
                return (<Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
                )
            });
        }
        return result;
    }
}

export default App;
