import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { FC } from "react";
import { UIInputProps } from "../../types/types";

const UIInput: FC<UIInputProps> = (props) => {
  const { placeholderText } = props;
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholderText} style={styles.input} />
    </View>
  );
};

export default UIInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(238,238,238)",
    marginVertical: 3,
  },
  input: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
});
