import React from "react";
import { Switch, Route } from "react-router-dom";
import { View, StyleSheet } from "react-native";
import Situation from "./1Situation";
import Emotions from "./2Emotions";
import Rate from "./3Rate";
import Sensations from "./4Sensations";
import UnhelpfulThoughts from "./5UnhelpfulThoughts";
import RealisticThoughts from "./6RealisticThoughts";
import Technique from "./7DefusionTechnique";
import Review from "./8Review";
import StepLinks from "./StepLinks";
import { ThoughtRecordFormProvider } from "./ThoughtRecordFormContext";

const ThoughtRecordForm = () => {
  return (
    <ThoughtRecordFormProvider>
      <View style={styles.container}>
        {/* show steps and links */}
        <StepLinks />
        {/* show the forms */}
        <Switch>
          <Route path="/" exact component={Situation} />
          <Route path="/emotions" component={Emotions} />
          <Route path="/rate" component={Rate} />
          <Route path="/sensations" component={Sensations} />
          <Route path="/unhelpfulThoughts" component={UnhelpfulThoughts} />
          <Route path="/realisticThoughts" component={RealisticThoughts} />
          <Route path="/defusion" component={Technique} />
          <Route path="/review" component={Review} />
        </Switch>
      </View>
    </ThoughtRecordFormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: "TimesNewRomanPSMT",
    marginHorizontal: "auto",
    width: "100%",
    height: "100%",
    backgroundColor: "#30D5C8",
    flex: 1,
    alignItems: "center"
  }
});

export default ThoughtRecordForm;
