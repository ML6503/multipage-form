import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  Modal
} from 'react-native';
import { Button as ButtonElem } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useThoughtRecordForm } from './ThoughtRecordFormContext';
import { styles, realisticStyles } from './styles';

const RealisticThoughts = (props) => {
  const { control, handleSubmit, errors } = useForm();
  const history = useHistory();
  const [visibleInfo, setVisibleInfo] = useState(false);
  const { realisticThoughts, setRealisticThoughts } = useThoughtRecordForm();

  const toggleButton = () => setVisibleInfo((oldVisible) => !oldVisible);

  const onSubmit = (data) => {
    console.log(data);
    setRealisticThoughts(data);
    history.push('/defusion');
  };

  const onBack = () => {
    history.push('/unhelpfulThoughts');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> STOP! Take a breath… </Text>

      <Text style={styles.text}>Alternative / realistic thoughts</Text>
      <View style={realisticStyles.containerButtonElem}>
        <ButtonElem
          icon={<Icon name="info-circle" size={10} color="white" />}
          onPress={toggleButton}
          buttonStyle={{
            backgroundColor: 'grey',
            borderRadius: '20%',
            width: 30
          }}
        />
      </View>
      {visibleInfo && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={visibleInfo}
          // onRequestClose={() => {
          //   setVisibleInfo((oldVisible) => !oldVisible);
          //   console.log(visibleInfo);
          // }}
        >
          <Text
            style={styles.text}
            adjustsFontSizeToFit
            //numberOfLines={1}
            minimumFontScale={0.1}
          >
            Is this fact or opinion? Is that internal critic / bully operating
            again? Am I comparing myself to others, whilst wearing those ‘gloomy
            specs? What am I not seeing? What’s the bigger picture? Is there
            another way of seeing things? Am I getting things out of proportion?
            What would someone else say about this situation or about me? If I
            have made a mistake, that’s okay, we all makes mistakes: what can I
            learn from this? Am I taking responsibilit or blame for something
            that wasn’t (totally) in my control?
          </Text>
          <Text
            style={styles.text}
            adjustsFontSizeToFit
            //numberOfLines={1}
            minimumFontScale={0.1}
          >
            What would I think about a friend in this situation? What would my
            reaction be to them? What advice would I give them? What is a kind
            and helpful way to think about me and this situation?
          </Text>
        </Modal>
      )}
      <Controller
        name="realisticThoughts"
        control={control}
        rules={{ required: true }}
        defaultValue={realisticThoughts.realisticThoughts}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            onChangeText={(text) => onChange(text)}
            value={value}
            type={'text'}
            style={styles.textInput}
            placeholder="more balanced perspective"
            maxLength={200}
            //onBlur={Keyboard.dismiss}
            onBlur={onBlur}
            numberOfLines={10}
            //multiline={true}
            defaultValue={realisticThoughts.realisticThoughts}
          />
        )}
      />
      {errors.realisticThoughts && <Text>This is required.</Text>}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Back" onPress={handleSubmit(onBack)} color="grey" />
        </View>
        <View style={styles.button}>
          <Button
            title="Next"
            onPress={handleSubmit(onSubmit)}
            color="#CD7C0F"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     fontFamily: "TimesNewRomanPSMT",
//     marginHorizontal: "auto",
//     marginTop: StatusBar.currentHeight || 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "#30D5C8",
//     flex: 1,
//     alignItems: "center"
//   },
//   title: {
//     fontWeight: "bold",
//     fontSize: "1.5rem",
//     marginVertical: "1em",
//     textAlign: "center"
//   },
//   text: {
//     lineHeight: "1.5em",
//     fontSize: "1rem",
//     //marginVertical: "1em",
//     textAlign: "center",
//     alignSelf: "center",
//     justifyItems: "center",
//     backgroundColor: "white",
//     //borderRadius: "5%",
//     width: "100%",
//     // width: 200,
//     //height: "10%",
//     padding: "2%",
//     textBreakStrategy: "simple",
//     minimumFontScale: "0.1"
//   },
//   textInput: {
//     borderColor: "#CCCCCC",
//     borderTopWidth: 1,
//     borderBottomWidth: 1,
//     height: "50%",
//     fontSize: 20,
//     paddingRight: "10%",
//     paddingTop: "5%",
//     paddingLeft: "10%",
//     textAlign: "center",
//     // marginTop: "7%",
//     alignSelf: "center",
//     width: "90%"
//   },
//   containerButton: {
//     alignSelf: "flex-end",
//     //width: "10%",
//     postition: "absolute",
//     top: "-9%",
//     right: "25%"
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     width: "50%",

//     // width: "50%",
//     // paddingRight: "5%",
//     paddingTop: "3%",
//     // alignItems: "center",
//     justifyContent: "space-around"
//   },
//   button: {
//     width: 100
//   }
// });

export default RealisticThoughts;
