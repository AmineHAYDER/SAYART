import React, { useContext } from 'react';
import {Nav, Button, Row, Container} from 'react-bootstrap';

import '../../css/dashboard/Menu.css'

const Menu = (props) => {



    return (<Container >
                    <ul>
                        <Button  onClick={props.onChange} name="onLineGarage" block>
                            OnLineGarage
                        </Button>
                    </ul>
                   <ul>
                        <Button  onClick={props.onChange} name="appointments" block>
                            Appointments
                        </Button>
                   </ul>
                   <ul>
                        <Button onClick={props.onChange} name="profile" block>
                            My Profile
                        </Button>
                   </ul>
                   <ul >
                       <Button   onClick={props.onChange} name="stock" block>
                            Stock
                       </Button>
                   </ul>
                   <ul>
                       <Button onClick={props.onChange}  name="analytics"block>
                        Analytics
                       </Button>
                   </ul>

        </Container>
    );

}

export default Menu;