import React, {useContext} from 'react';
import {Container, Row} from 'react-bootstrap';

import AdminContext from "../../../../../contexts/Admin/adminContext";
const GetAllGarages = () => {

    const adminContext = useContext(AdminContext)
   const {garages} = adminContext

    const Garages = (garages)=> {
      if(garages) return garages.map((garage)=>{
          return  <Row>
                <h1>{garage.name}</h1>
              <hr></hr>
              <h4>{garage._id}</h4>
              <hr></hr>
              <h4>user id : {garage.user}</h4>
            </Row>
            }
        )
    }

    return (
        <Container>

            {Garages(garages)}

        </Container>

    );

}

export default GetAllGarages;