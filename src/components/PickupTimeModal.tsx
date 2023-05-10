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
import {
  PickupRuleProps,
  PickupTimeModalProps,
  DateTimePickerMode,
} from "../types/types";
import UIButton from "./UIComponents/UIButton";
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import moment from "moment";

const PickUpRule: FC<PickupRuleProps> = (props) => {
  const { iconName, rule } = props;
  return (
    <View style={styles.pickUpRuleContainer}>
      <MaterialCommunityIcons name={iconName} size={24} color="black" />
      <Text style={styles.rule}>{rule}</Text>
    </View>
  );
};

const PickupTimeModal: FC<PickupTimeModalProps> = (props) => {
  const [matchNewDriver, setMatchNewDriver] = useState<boolean>(true);
  const [pickupDate, setPickupDate] = useState<Date>(new Date());

  const { pickupTimeModalIsOpen, setPickupTimeModalIsOpen } = props;

  const toggleMatchNewDriver = () => {
    setMatchNewDriver((prev) => !prev);
  };

  const closeThisModal = () => {
    setPickupTimeModalIsOpen(false);
  };

  const changeDateAndTime = (event: DateTimePickerEvent, selectedDate: any) => {
    setPickupDate(selectedDate);
  };

  const showMode = (currentMode: DateTimePickerMode) => {
    DateTimePickerAndroid.open({
      value: pickupDate,
      onChange: changeDateAndTime,
      mode: currentMode,
      is24Hour: false,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <Modal visible={pickupTimeModalIsOpen} animationType="fade">
      <SafeAreaView style={styles.container}>
        <Pressable style={styles.closeBtn} onPress={closeThisModal}>
          <Ionicons name="ios-close-sharp" size={35} color="black" />
        </Pressable>

        <Text style={styles.heading}>When do you want to be picked up?</Text>

        <View style={styles.dateTimeContainer}>
          <Pressable onPress={showDatepicker} style={styles.dateContainer}>
            <Text style={styles.dateTimeText}>
              {moment(pickupDate).format("ddd, MMM D")}
            </Text>
          </Pressable>

          <View style={styles.devider} />

          <Pressable onPress={showTimepicker} style={styles.timeContainer}>
            <Text style={styles.dateTimeText}>
              {moment(pickupDate).format("LT")}
            </Text>
          </Pressable>
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
          <UIButton text="Set pickup time" onPress={() => undefined} />
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
    marginTop: 40,
  },
  dateContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  timeContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  dateTimeText: {
    fontSize: 18,
    fontWeight: "300",
  },
  devider: {
    height: 1.5,
    backgroundColor: "rgb(238,238,238)",
    width: "82%",
    marginVertical: 10,
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
