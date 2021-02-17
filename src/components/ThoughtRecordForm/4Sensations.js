import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useThoughtRecordForm } from './ThoughtRecordFormContext';
import { styles } from './styles';

const Sensations = (props) => {
  const { control, handleSubmit, errors } = useForm();
  const history = useHistory();
  const { sensations, setSensations } = useThoughtRecordForm();

  const onSubmit = (data) => {
    console.log(data);
    setSensations(data);
    history.push('/unhelpfulThoughts');
  };

  const onBack = () => {
    history.push('/realisticThoughts');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Physical sensations</Text>
      <Text
        style={styles.text}
        adjustsFontSizeToFit
        //numberOfLines={1}
        minimumFontScale={0.1}
      >
        What did I notice in my body? Where did I feel it?
      </Text>
      <Controller
        name="sensations"
        control={control}
        rules={{ required: true }}
        defaultValue={sensations.sensations}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            onChangeText={(text) => onChange(text)}
            value={value}
            type={'text'}
            style={styles.textInput}
            placeholder="describe your sensations"
            maxLength={200}
            //onBlur={Keyboard.dismiss}
            onBlur={onBlur}
            numberOfLines={10}
            //multiline={true}
            defaultValue={sensations.sensations}
          />
        )}
      />
      {errors.sensations && <Text>This is required.</Text>}
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
    </View>
  );
};

export default Sensations;
