import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import DropDownPicker from 'react-native-dropdown-picker';
import { emotionsList } from '../../assets/emotions';
import { useThoughtRecordForm } from './ThoughtRecordFormContext';
import { styles } from './styles';
//import Icon from "react-native-vector-icons/FontAwesome";

const Emotions = () => {
  const { control, handleSubmit, errors } = useForm();

  const history = useHistory();

  const { emotions, setEmotions } = useThoughtRecordForm();

  console.log('first selected Emos', emotions);

  const onSubmit = (emotions) => {
    console.log('current emotions', emotions);
    history.push('/rate');
  };

  const addEmotion = (emotion) => {
    // add new emotion to array of the selected mood items
    setEmotions(emotion);
  };

  const onBack = () => {
    history.push('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Emotions / Moods</Text>
      <Text style={[styles.text, { margin: '3%' }]}>
        Select your emotions from the list
      </Text>
      <Controller
        name="emotions"
        control={control}
        rules={{ required: true }}
        defaultValue={emotions}
        render={({ onChange, value }) => (
          <>
            <DropDownPicker
              // items={emotions}
              items={emotionsList}
              //value={value}
              multiple={true}
              multipleText="%d emotion(-s) have been selected."
              min={1}
              max={10}
              defaultValue={emotions}
              placeholder="Select emotions"
              //containerStyle={{ height: "100%" }}
              itemStyle={{
                justifyItems: 'center'
              }}
              style={{ width: '100%' }}
              // selectedtLabelStyle={{
              //   color: "#30D5C8"
              // }}
              activeLabelStyle={{ fontWeight: 'bold' }}
              // customTickIcon={() => (
              //   <Icon name="check" size={13} color="#CD7C0F" />
              // )}
              onChangeItem={(item) => {
                addEmotion(item);
                onChange(item);
              }}
            />
          </>
        )}
      />
      {errors.emotions && <Text>This is required.</Text>}
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

export default Emotions;
