import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { UIButtonProps } from "../../types/types";

const UIButton: FC<UIButtonProps> = (props) => {
  const { text } = props;
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default UIButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
