import React, {useContext, useState} from 'react';

import ReactMapGL, { Marker, GeolocateControl, NavigationControl} from 'react-map-gl';


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
    const marker = (coordinates,i)=>{

        return <Marker
            latitude={coordinates[1]}
            longitude={coordinates[0]}
            key={i}
        >

            <svg width="100" height="100">
                <circle cx="15" cy="15" r="10" stroke="yellow" stroke-width="4" fill="red" />
            </svg>
        </Marker>

    }



    return (<div>
                <ReactMapGL
                    mapboxApiAccessToken={"pk.eyJ1IjoiYW1pbmVoYXlkZXIiLCJhIjoiY2s4anRob2FmMGRleDNsbjZzYXZiajU1aiJ9.0NOu-HQ2-9ug0JP7N3t2hw"}
                    {...viewport}
                    onViewportChange={setViewport}
                >
                    <div
                        onClick={async ()=> {

                            appointmentContext.loading = true
                        }}
                    >
                        <GeolocateControl
                            positionOptions={{enableHighAccuracy: true}}
                            trackUserLocation={true}
                        />
                    </div>
                    <div>
                        {props.garages ? props.garages.map((item,i) => {return marker(item.coordinates,i)}):null}
                    </div>
                    <div>
                        {props.garage ? marker(props.garage,0):null}
                    </div>

                    <div style={{position: 'absolute', right: 0}}>
                        <NavigationControl />
                    </div>
                </ReactMapGL>
            </div>
    );
}
export default Map ;