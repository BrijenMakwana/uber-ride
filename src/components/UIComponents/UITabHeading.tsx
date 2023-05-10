import { StyleSheet, Text } from "react-native";
import React, { FC } from "react";
import { UITabHeadingProps } from "../../types/types";

const UITabHeading: FC<UITabHeadingProps> = (props) => {
  const { text } = props;
  return <Text style={styles.heading}>{text}</Text>;
};

export default UITabHeading;

const styles = StyleSheet.create({
  heading: {
    fontSize: 35,
    textTransform: "capitalize",
    fontWeight: "600",
    marginTop: 10,
    marginLeft: 15,
  },
});
