import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { FC, Fragment, useState } from "react";
import { pickupRules } from "../../assets/data/data";
import { PickupRuleProps, PickupTimeModalprops } from "../types/types";
import UIButton from "./UIComponents/UIButton";

const PickUpRule: FC<PickupRuleProps> = (props) => {
  const { iconName, rule } = props;
  return (
    <View style={styles.pickUpRuleContainer}>
      <MaterialCommunityIcons name={iconName} size={24} color="black" />
      <Text style={styles.rule}>{rule}</Text>
    </View>
  );
};

const PickupTimeModal: FC<PickupTimeModalprops> = (props) => {
  const [matchNewDriver, setMatchNewDriver] = useState<boolean>(true);
  const { pickupTimeModalIsOpen, setPickupTimeModalIsOpen } = props;

  const toggleMatchNewDriver = () => {
    setMatchNewDriver((prev) => !prev);
  };

  const closeThisModal = () => {
    setPickupTimeModalIsOpen(false);
  };

  return (
    <Modal visible={pickupTimeModalIsOpen} animationType="fade">
      <SafeAreaView style={styles.container}>
        <Pressable style={styles.closeBtn} onPress={closeThisModal}>
          <Ionicons name="ios-close-sharp" size={35} color="black" />
        </Pressable>

        <Text style={styles.heading}>When do you want to be picked up?</Text>

        <View style={styles.dateTimeContainer}>
          <Text style={styles.dateTimeText}>Sat, May 6</Text>
          <View style={styles.devider} />
          <Text style={styles.dateTimeText}>10:40 AM</Text>
        </View>

        <View style={styles.checkBoxContainer}>
          <Ionicons name="refresh-outline" size={24} color="black" />

          <Text style={styles.checkBoxText}>
            Match with a new driver if yours isn't making enough progress for an
            on-time pickup.
          </Text>

          <Pressable onPress={toggleMatchNewDriver}>
            <Ionicons
              name={matchNewDriver ? "checkbox" : "checkbox-outline"}
              size={24}
              color="black"
            />
          </Pressable>
        </View>

        <View style={styles.rules}>
          {pickupRules.map((item, index) => {
            return (
              <Fragment key={item.id}>
                <PickUpRule {...item} key={item.id} />
                {index < pickupRules.length - 1 && (
                  <View style={styles.ruleDevider} />
                )}
              </Fragment>
            );
          })}
        </View>

        <View style={{ marginTop: "auto", marginBottom: 20 }}>
          <UIButton text="Set pickup time" />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default PickupTimeModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  closeBtn: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 35,
    fontWeight: "600",
    alignSelf: "center",
    paddingHorizontal: 20,
  },
  dateTimeContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  dateTimeText: {
    fontSize: 18,
    fontWeight: "300",
  },
  devider: {
    height: 1.5,
    backgroundColor: "rgb(238,238,238)",
    width: "82%",
    marginVertical: 25,
    alignSelf: "center",
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  checkBoxText: {
    flex: 1,
    paddingHorizontal: 7,
    fontSize: 14,
  },
  rules: {
    marginTop: 30,
  },
  pickUpRuleContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  rule: {
    fontSize: 15,
    fontWeight: "100",
    flex: 1,
    marginLeft: 7,
  },
  ruleDevider: {
    height: 1.5,
    backgroundColor: "rgb(238,238,238)",
    width: "80%",
    marginVertical: 13,
    alignSelf: "flex-end",
    marginRight: 25,
  },
});
