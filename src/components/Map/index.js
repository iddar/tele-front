import React from 'react';
import { Spring } from 'react-spring'
import ReactMapboxGl, { Layer, Feature, GeoJSONLayer } from "react-mapbox-gl";

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiaWRkYXIiLCJhIjoiY2lzZmx3cnA2MDFvaDJ0dm85aGcyZDY4dSJ9.P3P-V3UGx1H5bLsaO2gtEA",
    interactive: false
});

export default ({data}) => (
    <div className="Map">
        <Map
            center={[-98.440553, 23.928418]}
            zoom={[4.63]}
            style="mapbox://styles/iddar/cjmxsr0dwlajz2rmxug6nwq61"
            containerStyle={{
                height: "100vh",
                width: "100vw"
            }}>
            <Layer
                type="circle"
                paint={{
                    'circle-color': [
                        'match',
                        ['get', 'src'],
                        0, '#A98131',
                        1, '#3bcca8',
                        2, '#daea66',
                        3, '#48a90f',
                        4, '#d34f14',
                        5, '#C3BEBA                        ',
                        6, '#85648A',
                        7, '#4F84A3',
                        /* other */ '#ccc'
                    ],
                    'circle-radius': {
                        base: 1.75,
                        type: 'exponential',
                        stops: [
                            [124, 5],
                            [34615, 10]
                        ]
                    }
                }}
            >
                {data.map((el, idx) => (
                    <Feature
                        key={idx}
                        properties={el}
                        coordinates={[el.location.lng, el.location.lat]}
                        />
                ))}
            </Layer>

        </Map>
    </div>
)