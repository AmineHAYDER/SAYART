import React from 'react';
import { Nav } from 'react-bootstrap';
import { Route, Switch, Link } from "react-router-dom";

import testHistory from './testHistory';
import testDash from './testDash';
import testAcc from './testAcc';

class Account extends React.Component {
    render() {



        return (
            <div>

                <Nav>
                    <Nav.Item as="li">
                        <Link exact to="/"><Nav.Link as="a" >account</Nav.Link> </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link exact to="/dashboard"><Nav.Link as="a" >dash</Nav.Link> </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link exact to="/history"><Nav.Link as="a" >history</Nav.Link> </Link>
                    </Nav.Item>

                </Nav>

                <div style={{height: "300px",background:"red"}}></div>
                <Switch>
                    <Route exact path="/" component={testAcc} />
                    <Route exact path="/dashboard" component={testDash} />
                    <Route exact path="/history" component={testHistory} />
                </Switch>

            </div>
        );
    }
}

export default Account;