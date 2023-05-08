import { StyleSheet, Pressable } from "react-native";
import React, { FC } from "react";
import { Ionicons } from "@expo/vector-icons";
import { UIBackButtonProps } from "../../types/types";

const UIBackButton: FC<UIBackButtonProps> = (props) => {
  const { onPress } = props;
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Ionicons name="arrow-back" size={30} color="black" />
    </Pressable>
  );
};

export default UIBackButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 30,
    top: 50,
    left: 20,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 10,
    zIndex: 2,
  },
});
