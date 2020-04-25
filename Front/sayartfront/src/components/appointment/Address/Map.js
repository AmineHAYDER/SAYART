import React, {useContext, useState} from 'react';
import AppointmentContext from '../../../contexts/Appointment/appointmentContext';
import ReactMapGL, {GeolocateControl,NavigationControl} from 'react-map-gl';

//enable arabic writing
import {setRTLTextPlugin} from 'react-map-gl';



const  Map= (props) => {
    const [viewport, setViewport] = useState({ width:"100%", height:400, latitude:36.845834476598064, longitude:10.219001770019531, zoom:8});
    const [clicked,setClicked] = useState(false)
    const appointmentContext = useContext(AppointmentContext);

    if ( clicked ){
        appointmentContext.setLocation({lng:viewport.longitude,lat: viewport.latitude})
        setClicked(false)
    }

    return (
        <div>
            <ReactMapGL
                mapboxApiAccessToken={"pk.eyJ1IjoiYW1pbmVoYXlkZXIiLCJhIjoiY2s4anRob2FmMGRleDNsbjZzYXZiajU1aiJ9.0NOu-HQ2-9ug0JP7N3t2hw"}
                {...viewport}
                onViewportChange={setViewport}
            >
                <div
                    onClick={async ()=>{
                        setTimeout(function() {
                            setClicked(true)
                            appointmentContext.pages.address.step.localisationStep = true
                        }, 2000)}}
                >
                    <GeolocateControl
                        positionOptions={{enableHighAccuracy: true}}
                        trackUserLocation={true}
                    />
                </div>
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