import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo, Foundation } from "@expo/vector-icons";
import React, { FC } from "react";
import { PastTripProps } from "../types/types";
import moment from "moment";

const PastTrip: FC<PastTripProps> = (props) => {
  const { carImage, location, bookingDate, bookingTime, fair } = props;

  return (
    <Pressable style={styles.container}>
      <View style={styles.carImageContainer}>
        <Image
          source={{
            uri: carImage,
          }}
          style={styles.carImage}
        />
      </View>

      <View style={styles.tripInfoContainer}>
        <Text style={styles.location} numberOfLines={2}>
          {location}
        </Text>

        <View style={styles.bookingInfoContainer}>
          <Text style={styles.bookingDate}>
            {moment(bookingDate).format("MMM D")}
          </Text>
          <Entypo name="dot-single" size={15} color="#484848" />
          <Text style={styles.bookingTime}>
            {moment(bookingTime).format("LT")}
          </Text>
        </View>

        <Text style={styles.fair}>₹{fair}</Text>
      </View>

      <Pressable style={styles.rebookBtn}>
        <Foundation name="refresh" size={20} color="black" />
        <Text style={styles.rebookBtnText}>rebook</Text>
      </Pressable>
    </Pressable>
  );
};

export default PastTrip;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  carImageContainer: {
    backgroundColor: "rgb(238,238,238)",
    padding: 10,
    borderRadius: 10,
  },
  carImage: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
  tripInfoContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  location: {
    fontSize: 16,
    fontWeight: "400",
    textTransform: "capitalize",
    paddingRight: 20,
  },
  bookingInfoContainer: {
    flexDirection: "row",
    marginTop: 3,
    alignItems: "center",
  },
  bookingDate: {
    fontSize: 13,
    fontWeight: "200",
    color: "#484848",
  },
  bookingTime: {
    fontSize: 13,
    fontWeight: "200",
    color: "#484848",
  },
  fair: {
    fontSize: 13,
    fontWeight: "200",
    color: "#484848",
    marginTop: 5,
  },
  rebookBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(238,238,238)",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 30,
  },
  rebookBtnText: {
    fontWeight: "400",
    fontSize: 14,
    textTransform: "capitalize",
    marginLeft: 10,
  },
});
