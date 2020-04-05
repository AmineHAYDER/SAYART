import React, {useContext, useState} from 'react';

import { Container, Form, Button, Row, Col, ButtonGroup } from 'react-bootstrap'
import ReactMapGL, {Marker,GeolocateControl,NavigationControl} from 'react-map-gl';
import {SVGOverlay} from 'react-map-gl';
//enable arabic writing
import {setRTLTextPlugin} from 'react-map-gl';
import AppointmentContext from '../../contexts/Appointment/appointmentContext';




const  Map= (props) => {
    const [viewport, setViewport] = useState({
        width:"100%",
        height: 400,
        latitude: 36.845834476598064,
        longitude: 10.219001770019531,
        zoom: 8
    });
    const appointmentContext = useContext(AppointmentContext);

    if (props.clicked ){
        appointmentContext.setLocation({lng:viewport.longitude,lat: viewport.latitude})}


    const redraw = ({project}) => {
        const [cx, cy] = project([ viewport.longitude,viewport.latitude]);
        return <circle cx={cx} cy={cy} r={2} fill="blue" />;
    }


    return (<div>
                <ReactMapGL
                    mapboxApiAccessToken={"pk.eyJ1IjoiYW1pbmVoYXlkZXIiLCJhIjoiY2s4anRob2FmMGRleDNsbjZzYXZiajU1aiJ9.0NOu-HQ2-9ug0JP7N3t2hw"}
                    {...viewport}
                    onViewportChange={setViewport}
                >

                            <GeolocateControl
                            positionOptions={{enableHighAccuracy: true}}
                            trackUserLocation={true}
                            />
                            {/*<Marker latitude={36.845834476598064} longitude={10.219001770019531} offsetLeft={-20} offsetTop={-10}>
                                <div>You are here </div>
                            </Marker>
                            <SVGOverlay redraw={redraw} />*/}
                            <div style={{position: 'absolute', right: 0}}>
                                <NavigationControl />
                            </div>
                </ReactMapGL>
            </div>
    );
}
setRTLTextPlugin(
    // find out the latest version at https://www.npmjs.com/package/@mapbox/mapbox-gl-rtl-text
    'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
    null,
    true
);
export default Map ;