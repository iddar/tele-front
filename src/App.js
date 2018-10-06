import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, GeoJSONLayer } from "react-mapbox-gl";
import logo from './logo.svg';
import './App.css';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiaWRkYXIiLCJhIjoiY2lzZmx3cnA2MDFvaDJ0dm85aGcyZDY4dSJ9.P3P-V3UGx1H5bLsaO2gtEA"
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map
          center={[ -99.2926981, 19.3207674 ]}
          zoom={[4]}
          pitch={[20]}
          style="mapbox://styles/iddar/cjmxsr0dwlajz2rmxug6nwq61"
          containerStyle={{
            height: "100vh",
            width: "100vw"
          }}>
          <GeoJSONLayer
              data="/mexican_states.geojson"
              linePaint={{
                "line-color": "#627BC1",
                "line-width": 2
              }}
              fillOnMouseMove={(a) => {
                console.log(a)
              }}
              fillPaint={{
                "fill-color": "#627BC1",
                "fill-opacity": [
                  "case",
                  ["boolean", ["feature-state", "hover"], false],
                  1,
                  0.5
                ]
              }}/>
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
              <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
            </Layer>
        </Map>
      </div>
    );
  }
}

export default App;
