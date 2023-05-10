import { FlatList, StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import UITabHeading from "../components/UIComponents/UITabHeading";
import { Ionicons } from "@expo/vector-icons";
import { pastTrips } from "../../assets/data/data";
import PastTrip from "../components/PastTrip";

const Devider = () => {
  return (
    <View
      style={{
        height: 1.5,
        backgroundColor: "rgb(238,238,238)",
        width: "75%",
        alignSelf: "flex-end",
      }}
    />
  );
};

const ActivityTab = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={pastTrips}
        renderItem={({ item }) => <PastTrip {...item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Devider />}
        ListHeaderComponent={() => (
          <>
            <UITabHeading text="activity" />

            <View style={styles.header}>
              <Text style={styles.heading}>past</Text>

              <Pressable style={styles.filterBtn}>
                <Ionicons name="filter" size={15} color="black" />
              </Pressable>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default ActivityTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  trips: {
    marginTop: 10,
    paddingBottom: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    textTransform: "capitalize",
    fontWeight: "600",
  },
  filterBtn: {
    padding: 10,
    backgroundColor: "rgb(238,238,238)",
    borderRadius: 50,
  },
});
