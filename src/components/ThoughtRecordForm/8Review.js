import React, { useState } from 'react';
import { Text, SafeAreaView, ScrollView, Button, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Divider } from 'react-native-elements';

import { useThoughtRecordForm } from './ThoughtRecordFormContext';
import SubmitModal from './SubmitModal';
import { styles, reviewStyles } from './styles';

const Review = () => {
  const {
    situation,
    ratedEmotions,
    reratedEmotions,
    sensations,
    unhelpfulThoughts,
    realisticThoughts,
    defusionTechnique
  } = useThoughtRecordForm();

  // const { control, handleSubmit, errors } = useForm();
  const { handleSubmit } = useForm();

  const history = useHistory();

  const [modalVisible, setModalVisible] = useState(false);

  console.log('MODAL VIsability is', modalVisible);
  console.log('Emos', Object.entries(ratedEmotions));

  const onSubmit = () => {
    // We combine all form data into one final object

    const data = {
      ...situation,
      ...sensations,
      ratedEmotions,
      ...unhelpfulThoughts,
      ...realisticThoughts,
      ...defusionTechnique,
      reratedEmotions
    };

    // submit this final object to server
    // axios.post('url-goes-here', data)

    console.log('submitted DATA:', data);

    setModalVisible(true);
  };

  const onBack = () => {
    history.push('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ marginHorizontal: 'auto' }}>
        {modalVisible ? (
          <SubmitModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        ) : (
          <>
            <Text style={styles.title}>Review Form</Text>
            <Text style={styles.text}>review all your information</Text>

            <View style={reviewStyles.infoContainer}>
              <Text style={reviewStyles.header}>Situation: </Text>
              <Text> {situation.situation}</Text>
              <Divider style={reviewStyles.divider} />

              <Text style={reviewStyles.header}>Sensations: </Text>
              <Text> {sensations.sensations}</Text>
              <Divider style={reviewStyles.divider} />

              <Text style={reviewStyles.header}>Unhelpful Thoughts: </Text>
              <Text> {unhelpfulThoughts.unhelpfulThoughts}</Text>
              <Divider style={reviewStyles.divider} />

              <Text style={reviewStyles.header}>Realistic Thoughts: </Text>
              <Text> {realisticThoughts.realisticThoughts}</Text>
              <Divider style={reviewStyles.divider} />

              <Text style={reviewStyles.header}>Defusion Technique: </Text>
              <Text> {defusionTechnique.defusion}</Text>
              <Divider style={reviewStyles.divider} />

              <Text style={reviewStyles.header}>Emotions: </Text>
              {Object.entries(reratedEmotions).map((e, i) => (
                <Text>
                  {e[0]}: {e[1]}%
                </Text>
              ))}
              <Divider style={[reviewStyles.divider, { marginTop: 20 }]} />
            </View>

            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Back"
                  onPress={handleSubmit(onBack)}
                  color="grey"
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Submit"
                  onPress={handleSubmit(onSubmit)}
                  color="#CD7C0F"
                />
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     fontFamily: 'TimesNewRomanPSMT',
//     marginHorizontal: 'auto',
//     marginTop: StatusBar.currentHeight || 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#30D5C8',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   infoContainer: {
//     alignSelf: 'flex-start',
//     paddingLeft: '10%',
//     paddingTop: '3%'
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: '1.5rem',
//     marginVertical: '1em',
//     textAlign: 'center'
//   },
//   text: {
//     // lineHeight: "1.5em",
//     fontSize: '1rem',
//     // marginVertical: "1em",
//     textAlign: 'center',
//     alignSelf: 'center',
//     justifyItems: 'center',
//     backgroundColor: 'white',
//     // borderRadius: 20,
//     width: '100%',
//     padding: '2%'
//   },
//   divider: {
//     backgroundColor: 'grey',
//     marginBottom: 10,
//     marginTop: 10,
//     width: 300
//   },
//   textInput: {
//     borderColor: '#CCCCCC',
//     borderTopWidth: 1,
//     borderBottomWidth: 1,
//     height: '50%',
//     fontSize: 20,
//     paddingRight: '10%',
//     paddingTop: '5%',
//     paddingLeft: '10%',
//     textAlign: 'center',
//     // marginTop: "7%",
//     alignSelf: 'center',
//     width: '90%'
//   },
//   textInfo: {
//     paddingTop: '3%',
//     justifyItems: 'center'
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     // width: "50%",
//     // paddingRight: "5%",
//     paddingTop: '5%',
//     justifyContent: 'space-around'
//   },
//   button: {
//     width: 100
//   }
// });

export default Review;
