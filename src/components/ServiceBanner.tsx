import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { FC } from "react";
import { ServiceBannerProps } from "../types/types";

const ServiceBanner: FC<ServiceBannerProps> = (props) => {
  const { bannerColor, heading, tagline, bannerImage } = props;

  return (
    <View
      style={[
        styles.mainContainer,
        {
          width: Dimensions.get("window").width,
        },
      ]}
    >
      <View
        style={[
          styles.bannerContainer,
          {
            backgroundColor: bannerColor,
          },
        ]}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.heading}>{heading}</Text>
          <View style={styles.taglineContainer}>
            <Text style={styles.tagline}>{tagline}</Text>
            <AntDesign name="arrowright" size={15} color="#fff" />
          </View>
        </View>

        <Image
          source={{
            uri: bannerImage,
          }}
          style={styles.bannerImage}
        />
      </View>
    </View>
  );
};

export default ServiceBanner;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
  },
  bannerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 30,
    height: "100%",
    paddingTop: 30,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#fff",
  },
  taglineContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  tagline: {
    fontSize: 14,
    fontWeight: "400",
    marginRight: 3,
    color: "#fff",
    textTransform: "capitalize",
  },
  bannerImage: {
    width: "31%",
    height: 130,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    resizeMode: "contain",
  },
});
