import React from 'react';
import { View, Text, TextInput, Keyboard, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useThoughtRecordForm } from './ThoughtRecordFormContext';
import { styles } from './styles';

const Situation = () => {
  const { control, handleSubmit, errors } = useForm();
  const history = useHistory();

  const { situation, setSituation } = useThoughtRecordForm();

  const onSubmit = (data) => {
    setSituation(data);
    console.log(situation.situation);
    history.push('/emotions');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Situation</Text>
      <Text
        style={styles.text}
        adjustsFontSizeToFit
        //numberOfLines={1}
        minimumFontScale={0.1}
      >
        What happened? Where? When? Who with? How?
      </Text>
      <Controller
        name="situation"
        control={control}
        rules={{ required: true }}
        defaultValue={situation.situation}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            onChangeText={(text) => onChange(text)}
            value={value}
            type={'text'}
            style={styles.textInput}
            placeholder="describe your situation"
            maxLength={200}
            onBlur={Keyboard.dismiss}
            defaultValue={situation.situation}
            // onBlur={onBlur}
            numberOfLines={10}
            //multiline={true}
          />
        )}
      />
      {errors.situation && <Text>This is required.</Text>}
      <View
        style={[
          styles.buttonContainer,
          { justifyContent: 'flex-end', width: '100%' }
        ]}
      >
        <View style={[styles.button, { width: 220 }]}>
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

export default Situation;
