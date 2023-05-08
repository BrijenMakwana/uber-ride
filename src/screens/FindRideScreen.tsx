import { StyleSheet, View } from "react-native";
import React from "react";
import LocationInput from "../components/LocationInput";
import MapView, { Marker } from "react-native-maps";
import { mapStyle, indianPlaces } from "../../assets/data/data";
import UIButton from "../components/UIComponents/UIButton";
import UICurrentLocation from "../components/UIComponents/UICurrentLocation";
import { Location } from "../types/types";

const initialRegion = {
  latitude: 12.9716,
  longitude: 77.5946,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const FindRideScreen = () => {
  return (
    <View style={styles.container}>
      <LocationInput />

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
          provider="google"
          customMapStyle={mapStyle}
        >
          {indianPlaces.map((place: Location) => (
            <Marker
              coordinate={place.coordinates}
              key={place.id}
              image={require("../../assets/images/taxi.png")}
            />
          ))}
        </MapView>

        <UICurrentLocation />

        <View style={styles.doneBtnContainer}>
          <UIButton text="Done" />
        </View>
      </View>
    </View>
  );
};

export default FindRideScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  doneBtnContainer: {
    position: "absolute",
    width: "100%",
    bottom: 15,
  },
});
