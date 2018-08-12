import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import RestaurantComponent from "./Restaurant";
import MyLocationComponent from "./MyLocation";

// Data of Restaurant locations in Auckland city.
import { dataArray } from "../data";

class SimpleMap extends Component {
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

  componentDidMount() {
    this.interval = setInterval(() => {
      getGeoLocation();
    }, 3000);

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
    const { restaurants, myLocation, center } = this.state;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "90vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCAA0cjcjXsjZBymMjQuQyZR6hJ0SUf7hI" }}
          // defaultCenter={this.state.center}
          center={center}
          defaultZoom={this.state.zoom}
        >
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

          <MyLocationComponent lat={myLocation.lat} lng={myLocation.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
