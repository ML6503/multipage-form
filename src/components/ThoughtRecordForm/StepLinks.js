import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { View, StyleSheet } from "react-native";
import { useThoughtRecordForm } from "./ThoughtRecordFormContext";

const links = [
  "/",
  "/Emotions",
  "/Sensations",
  "/UnhelpfulThoughts",
  "/RealisticThoughts",
  "/Defusion",
  "/Review"
];

const linkStep = (link) => {
  // remove \ sign from the step link
  const textLink = link.replace(/\//, "");
  // insert a space before all caps
  const result = textLink.replace(/([A-Z])/g, " $1");
  // uppercase the first character
  // .replace(/^./, function(str){ return str.toUpperCase(); })
  return result;
};

// const isEmpty = (formState) => {
//   if (Array.isArray(formState)) {
//     return formState.length === 0;
//   } else {
//     return Object.keys(formState).length === 0;
//   }
// };

const StepLinks = () => {
  const { situation, emotions } = useThoughtRecordForm();

  // // if link is empty = for future use if needed to disable link
  // const isSituationDone = !isEmpty(situation);
  // const isEmotionsDone = !isEmpty(emotions);
  // console.log("have we filled situation?", isSituationDone);
  // console.log("have we filled emotions?", isEmotionsDone);

  return (
    <>
      <View style={styles.stepLinks}>
        {links.map((link, i) => (
          <NavLink
            key={i}
            style={{ textDecoration: "none", color: "#4e5052" }}
            activeStyle={{
              fontWeight: "bold",
              color: "#525863",
              width: "9%",
              backgroundColor: "#b2dec2",
              borderRadius: 3,
              textAlign: "center"
            }}
            to={link}
            exact={i === 0 ? true : false}
            //to={link[i === 0] ? `${link} exact` : link}
          >
            {link === "/" ? "Situation" : linkStep(link)}
          </NavLink>
        ))}
      </View>
      <View style={styles.underline} />
    </>
  );
};

const styles = StyleSheet.create({
  stepLinks: {
    flexDirection: "row",
    fontSize: 7,
    justifyContent: "space-around",
    width: "100%",
    padding: "0.5%"
  },
  underline: {
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: "stretch"
  }
});

export default StepLinks;
