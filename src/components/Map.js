import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import RestaurantComponent from "./Restaurant";
import MyLocationComponent from "./MyLocation";
import { bootstrapKey } from "../authentication";

// Data of Restaurant locations in Auckland city.
import { dataArray } from "../data";

class DeliveryMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: dataArray,
      myLocation: {
        lat: 0,
        lng: 0
      },
      center: {
        lat: -36.8523379,
        lng: 174.7691077
      },
      zoom: 14
    };
  }

  // Component lifecycle on mount
  componentDidMount() {
    // Set 3 second interval to trigger getGeoLocation method
    this.interval = setInterval(() => {
      getGeoLocation();
    }, 3000);

    // Method where current gps position identified from navigator and then this position is used to set the myLocation state.
    const getGeoLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.setState({
            myLocation: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          });
        });
      }
    };
  }

  render() {
    // Destructuring used for better accessibility of specific parts of state.
    const { restaurants, myLocation, center } = this.state;
    return (
      // Rationale of styles: Containing div set to full width of screen, but 90vh to enable seeing welcome bar.
      <div style={{ height: "90vh", width: "100%" }}>
        {/* // Rendering of JSX map component */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: bootstrapKey }}
          // defaultCenter={this.state.center}
          center={center}
          defaultZoom={this.state.zoom}
        >
          {/* For every restaurant in restaurants in state iterate and create a RestaurantComponent */}
          {restaurants.map(rest => (
            <RestaurantComponent
              key={rest.text}
              lat={rest.lat}
              lng={rest.lng}
              text={rest.text}
            >
              {" "}
              <i className="fa fa-cloud" />
            </RestaurantComponent>
          ))}

          {/* Rendering myLocation */}
          <MyLocationComponent lat={myLocation.lat} lng={myLocation.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default DeliveryMap;
