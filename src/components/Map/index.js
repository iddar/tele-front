import React from 'react';
import { Spring } from 'react-spring'
import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiaWRkYXIiLCJhIjoiY2lzZmx3cnA2MDFvaDJ0dm85aGcyZDY4dSJ9.P3P-V3UGx1H5bLsaO2gtEA",
    interactive: false
});

var img2 = document.createElement('img'); // Uso DOM HTMLImageElement
img2.src = '/item.png'
img2.height = '20'
img2.width = '20'

let activePOP = false
let activePOPEl = null

function popup () {
    if (activePOPEl === null) return null
    let progress = (activePOPEl.current * 100) / activePOPEl.required
    return (
        <Popup
            coordinates={[activePOPEl.lng, activePOPEl.lat]}
            offset={{
            'bottom-left': [5, -5],
            'bottom': [0, -5],
            'bottom-right': [-5, -5]
            }}>
            <div className="popup">
                <h4>{activePOPEl.name}</h4>
                <div className="complete">
                    <div
                        style={{
                            width: `${progress}%`
                        }}
                        className="progress"></div>
                </div>
                <div className="amount">
                    <div>Require: {activePOPEl.required.toLocaleString('mx-ES', { style: 'currency', currency: 'MXN' })}</div>
                    <div>Acumulado: {activePOPEl.current.toLocaleString('mx-ES', { style: 'currency', currency: 'MXN' })}</div>
                </div>
            </div>
        </Popup>
    )
}

export default ({data =  [], places = []}) => (
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
                type="symbol"
                id="marker"
                images={
                    ['cat', img2]
                }
                layout={{ "icon-image": "cat" }}>
                {places.map((el, idx) => (
                    <Feature
                        key={idx}
                        properties={el}
                        coordinates={[el.lng, el.lat]}
                        onClick={
                            () => {
                                activePOPEl = el
                            }
                        }
                        />
                ))}
            </Layer>

            {popup()}

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