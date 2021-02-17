import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { useThoughtRecordForm } from "./ThoughtRecordFormContext";

const SubmitModal = ({ modalVisible, setModalVisible }) => {
  const history = useHistory();

  const {
    setSituation,
    emotions,
    setEmotions,
    setRatedEmotions,
    setSensations,
    setUnhelpfulThoughts,
    setRealisticThoughts,
    setDefusionTechnique,
    setReratedEmotions
  } = useThoughtRecordForm();

  const clearFormData = () => {
    setSituation("");
    setEmotions([]);
    setRatedEmotions([]);
    setSensations("");
    setUnhelpfulThoughts("");
    setRealisticThoughts("");
    setDefusionTechnique("");
    setReratedEmotions(emotions);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      // onRequestClose={() => {
      //   clearFormData();
      // }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Thank you for submitting!</Text>

          <TouchableHighlight
            style={styles.openButton}
            onPress={() => {
              setModalVisible(!modalVisible);
              clearFormData();
              history.push("/");
            }}
          >
            <Text style={styles.textStyle}>BACK TO FORM</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
    alignSelf: "center"
  },
  modalView: {
    margin: 100,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    // alignSelf: 'flex-end',
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 35,
    elevation: 15
  },
  openButton: {
    backgroundColor: "#CD7C0F",
    borderRadius: 8,
    padding: 10,
    //alignSelf: "flex-end",
    elevation: 2
    //justifyContent: "space-between"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold"
  }
});

export default SubmitModal;
