import React from 'react';
import { View, Text, TextInput, SafeAreaView, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useThoughtRecordForm } from './ThoughtRecordFormContext';
import { styles } from './styles';

const DefusionTechnique = (props) => {
  const { control, handleSubmit, errors } = useForm();
  const history = useHistory();
  const { defusionTechnique, setDefusionTechnique } = useThoughtRecordForm();

  const onSubmit = (data) => {
    console.log('DEFUSION', data);
    setDefusionTechnique(data);
    history.push('/rate');
  };

  const onBack = () => {
    history.push('/realisticThoughts');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Defusion technique</Text>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { paddingTop: '2%' }]}>
          What’s the best response?
        </Text>
        <Text
          style={[styles.text, { paddingBottom: '2%' }]}
          adjustsFontSizeToFit
          //numberOfLines={1}
          minimumFontScale={0.1}
        >
          What could I do differently? What would be more effective? Do what
          works! Act wisely. What will be most helpful for me or the situation?
          What will the consequences be?
        </Text>
      </View>
      <Controller
        name="defusion"
        control={control}
        rules={{ required: true }}
        defaultValue={defusionTechnique.defusion}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            onChangeText={(text) => onChange(text)}
            value={value}
            type={'text'}
            style={styles.textInput}
            placeholder="what I did / what I could do?"
            maxLength={200}
            //onBlur={Keyboard.dismiss}
            onBlur={onBlur}
            numberOfLines={10}
            //multiline={true}
            defaultValue={defusionTechnique.defusion}
          />
        )}
      />
      {errors.defusion && <Text>This is required.</Text>}
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

export default DefusionTechnique;
