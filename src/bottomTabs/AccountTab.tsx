import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { menuBoxes, menuWithIcons } from "../../assets/data/data";
import MenuBox from "../components/MenuBox";
import MenuWithIcon from "../components/MenuWithIcon";

const Devider = () => {
  return (
    <View
      style={{
        height: 7,
        backgroundColor: "rgb(238,238,238)",
        marginTop: 12,
      }}
    />
  );
};

const AccountTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>brijen makwana</Text>
          <View style={styles.userRatingContainer}>
            <Entypo name="star" size={13} color="black" />
            <Text style={styles.userRatingText}>4.77</Text>
          </View>
        </View>

        <View style={styles.avatar}>
          <Entypo name="user" size={35} color="gray" />
        </View>
      </View>

      <View style={styles.menuBoxes}>
        {menuBoxes.map((item) => (
          <MenuBox {...item} key={item.id} />
        ))}
      </View>

      <Devider />

      <View style={styles.menuWithIcons}>
        {menuWithIcons.map((item) => (
          <MenuWithIcon {...item} key={item.id} />
        ))}
      </View>

      <Text style={styles.appVersion}>V4.472.10002</Text>
    </SafeAreaView>
  );
};

export default AccountTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 10,
  },
  userInfoContainer: {},
  userName: {
    fontSize: 35,
    textTransform: "capitalize",
    fontWeight: "600",
  },
  avatar: {
    backgroundColor: "rgb(238,238,238)",
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
  },
  userRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(238,238,238)",
    width: 56,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 20,
    marginTop: 5,
  },
  userRatingText: {
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 5,
  },
  menuBoxes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  menuWithIcons: {
    marginTop: 5,
  },
  appVersion: {
    color: "gray",
    fontSize: 12,
    fontWeight: "300",
    marginLeft: 15,
    marginTop: 20,
  },
});
