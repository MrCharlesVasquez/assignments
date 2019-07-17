import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import logo from "./image/Beer.png"



const AnyReactComponent = ({ text }) => <div>{text}</div>;

class LocateMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            center: {
                lat: this.props.location.state ? Number(this.props.location.state.latitude) : 40.7505505,
                lng: this.props.location.state ? Number(this.props.location.state.longitude) : -111.8906741

            },

            zoom: 11
        };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(pos => {
            console.log(pos)
        }, (err) => console.log(err))
    }
    render() {
        console.log(this.props)
        return (
            // Important! Always set the container height explicitly
            <div className="MapContainer">

                {/* <div className="MugGif">
                    <img src={logo2} className="LmapImg" alt="Mug Slide gif"></img>
                </div> */}


                <div className="googleMap">


                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.REACT_APP_APIKEY }}
                        defaultCenter={this.state.center}
                        defaultZoom={this.state.zoom}
                    >
                        <AnyReactComponent
                            lat={this.props.location.state ? Number(this.props.location.state.latitude) : 40.7505505}
                            lng={this.props.location.state ? Number(this.props.location.state.longitude) : -111.8906741}

                            text={<h1 className="MugIcon"><img className="MugLogo" src={logo} alt="BEER" /><span>Beer Here</span></h1>}


                        />
                    </GoogleMapReact>
                </div>

            </div>
        );
    }
}

export default LocateMap