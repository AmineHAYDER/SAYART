import React, {useContext} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import frLocale from '@fullcalendar/core/locales/fr';
import './main.scss'
import GarageContext from "../../../../../contexts/Garage/garageContext";


const TimingTable = () => {

    const garageContext = useContext(GarageContext)
    const apps = ()=>{
        if (garageContext.appointments)  return garageContext.appointments.map(app => {return {
                id: app._id,
                title: app.service.name,
                editable: true,
                start: app.date ,
            backgroundColor: "#ffd700",
            borderColor:"#ffd700"
        } })
        else return [1,2]

}
    return (<div>
        {garageContext.appointments ? <Container style={{backgroundColor:"#fffcef",marginLeft:"30px",borderRadius:"10px"}}>
            <FullCalendar defaultView='dayGridMonth'

                          locales={[frLocale]}

                          selectable={true}
                          local={frLocale}
                          header={{
                              left: 'dayGridMonth,timeGridWeek,timeGridDay custom1',
                              center: 'title',
                              right: 'prev,next'
                          }}

                          eventClick={(info) =>  {
                              console.log(info.el)
                              info.el.style.backgroundColor = "#154862"
                          }
                          }
                          event
                          dateFormatter={{month: 'long', year: 'numeric', day: 'numeric'}}
                          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                          events={apps()}/>
        </Container> : null
}</div>
    );

}

export default TimingTable;