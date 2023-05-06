import { FlatList, StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import ServiceBanner from "./ServiceBanner";
import { serviceBanners } from "../../assets/data/data";

const ServiceBanners = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={serviceBanners}
        renderItem={({ item }) => <ServiceBanner {...item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").width}
      />
    </View>
  );
};

export default ServiceBanners;

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
  },
});
