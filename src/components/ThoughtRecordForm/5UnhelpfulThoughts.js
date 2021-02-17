import React from 'react';
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useThoughtRecordForm } from './ThoughtRecordFormContext';
import { styles } from './styles';

const UnhelpfulThoughts = (props) => {
  const { control, handleSubmit, errors } = useForm();
  const history = useHistory();
  const { unhelpfulThoughts, setUnhelpfulThoughts } = useThoughtRecordForm();

  const onSubmit = (data) => {
    console.log(data);
    setUnhelpfulThoughts(data);
    history.push('/realisticThoughts');
  };

  const onBack = () => {
    history.push('/rate');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Unhelpful Thoughts / Images</Text>
      <Text
        style={styles.text}
        adjustsFontSizeToFit
        //numberOfLines={1}
        minimumFontScale={0.1}
      >
        What went through my mind? What disturbed me? What did those
        thoughts/images/memories mean to me, or say about me or the situation?
        What am I responding to?
      </Text>
      <Controller
        name="unhelpfulThoughts"
        control={control}
        rules={{ required: true }}
        defaultValue=""
        render={({ onChange, onBlur, value }) => (
          <TextInput
            onChangeText={(text) => onChange(text)}
            value={value}
            type={'text'}
            style={styles.textInput}
            placeholder="self critical thoughts"
            maxLength={200}
            //onBlur={Keyboard.dismiss}
            onBlur={onBlur}
            numberOfLines={10}
            //multiline={true}
            defaultValue={unhelpfulThoughts}
          />
        )}
      />
      {errors.unhelpfulThoughts && <Text>This is required.</Text>}
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

export default UnhelpfulThoughts;
