import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const iconComp = <div />;

const AnyReactComponent = ({ text }) => (
  <div>
    <i className="fa fa-map-marker" style={{ color: "green" }} />
    {text}
  </div>
);

class SimpleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [
        {
          lat: -36.8523379,
          lng: 174.7691077,
          text: "Auckland Uni"
        },
        {
          lat: -36.8533379,
          lng: 174.7691077,
          text: "Auckland Uni"
        }
      ]
    };
  }

  static defaultProps = {
    center: {
      lat: -36.8523379,
      lng: 174.7691077
    },
    zoom: 14
  };

  render() {
    const { restaurants } = this.state;

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCAA0cjcjXsjZBymMjQuQyZR6hJ0SUf7hI" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {restaurants.map(rest => (
            <AnyReactComponent
              lat={rest.lat}
              lng={rest.lng}
              text={"Kreyser Avrora"}
            >
              {" "}
              <i className="fa fa-cloud" />
            </AnyReactComponent>
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
