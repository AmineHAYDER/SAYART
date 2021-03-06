import React, {useContext} from 'react';
import {Container, Row} from 'react-bootstrap';

import AdminContext from "../../../../../contexts/Admin/adminContext";
const GetAllArticles = () => {

    const adminContext = useContext(AdminContext)
   const {articles} = adminContext

    const Garages = (services)=> {
      if(services) return services.map((service)=>{
          return  <Row>
                <h1>{service._id}</h1>
              <hr></hr>
              <h4>{service.name}</h4>
              <hr></hr>
              <h4>garage id : {service.garage}</h4>
            </Row>
            }
        )
    }

    return (
        <Container>

            {Garages(articles)}

        </Container>

    );

}

export default GetAllArticles;