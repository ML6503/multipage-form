import React, { useState } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Slider } from '@miblanchard/react-native-slider';
import { useThoughtRecordForm } from './ThoughtRecordFormContext';
import { styles, rateStyles } from './styles';

const OneEmotionSlider = ({
  e,
  i,
  setScrollEnabled,
  setRatedEmotions,
  rate
}) => {
  const [sliderOneChanging, setSliderOneChanging] = useState(false);
  const [sliderOneValue, setSliderOneValue] = useState(rate);

  const sliderOneValuesChangeStart = (e) => {
    setScrollEnabled(true);
    setSliderOneChanging(true);
  };

  const sliderOneValuesChange = (value) => setSliderOneValue(value);

  const sliderOneValuesChangeFinish = (value) => {
    const ratedOneEmotion = { [e]: value[0] };
    setRatedEmotions((prevState) => {
      return { ...prevState, ...ratedOneEmotion };
    });
    setSliderOneChanging(false);
  };

  return (
    <View style={rateStyles.sliderOne}>
      {/* <Text style={styles.textRate}>{emotion} rate:</Text> */}
      <Text
        style={[rateStyles.textRate, sliderOneChanging && { color: 'red' }]}
      >
        {e}: {sliderOneValue} %
      </Text>

      <Slider
        key={i}
        value={sliderOneValue}
        trackStyle={{ width: 300 }}
        onSlidingStart={(e) => sliderOneValuesChangeStart(e)}
        onValueChange={sliderOneValuesChange}
        onSlidingComplete={(value) => {
          sliderOneValuesChangeFinish(value);
          setScrollEnabled(false);
        }}
        minimumValue={0}
        maximumValue={100}
        step={10}
        // disabled={ i !==i ? sliderOneChanging : false}
      />
    </View>
  );
};

const Rate = () => {
  const { control, handleSubmit, errors } = useForm();
  const {
    emotions,
    ratedEmotions,
    reratedEmotions,
    setRatedEmotions,
    defusionTechnique,
    setReratedEmotions
  } = useThoughtRecordForm();

  const history = useHistory();

  const [scrollEnabled, setScrollEnabled] = useState(false);

  console.log('rated emos', ratedEmotions);
  console.log('RE-rated emos', reratedEmotions);

  const fromDefusion =
    defusionTechnique && defusionTechnique.defusion.split('').length !== 0
      ? true
      : false;

  const onSubmit = (ratedEmotions) => {
    if (fromDefusion) {
      history.push('/review');
    } else {
      history.push('/sensations');
    }
  };

  const onBack = () => {
    history.push('/emotions');
  };

  return (
    <ScrollView
      scrollEnabled={scrollEnabled}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>Emotions / Moods</Text>
      {fromDefusion ? (
        <Text style={styles.text}>Re-rate your emotions 0 – 100%</Text>
      ) : (
        <Text style={styles.text}>Rate your emotions 0 – 100%</Text>
      )}
      <View style={{ paddingTop: '5%' }}>
        <Controller
          name="rate"
          control={control}
          rules={{ required: true }}
          defaultValue={ratedEmotions}
          render={
            ({ onChange, value }) =>
              emotions.length !== 0 &&
              emotions.map((e, i) => {
                const rate = Object.values(ratedEmotions).filter((rate, i) =>
                  Object.keys(ratedEmotions)[i] === e ? rate : 0
                );
                return (
                  console.log('RATE', rate) || (
                    <OneEmotionSlider
                      e={e}
                      i={i}
                      setScrollEnabled={setScrollEnabled}
                      setRatedEmotions={
                        fromDefusion ? setReratedEmotions : setRatedEmotions
                      }
                      rate={rate}
                    />
                  )
                );
              })
            // : !fromDefusion ? (
            //   <View style={styles.button} alignSelf="center">
            //     <Button
            //       title="choose emotions"
            //       onPress={handleSubmit(onBack)}
            //       color="grey"
            //     />
            //   </View>
            // ) : (
            //   <View></View>
            // )
          }
        />
      </View>
      {errors.rate && <Text>This is required.</Text>}
      {/* <View style={styles.button}>
        {fromDefusion && (
          <Button
            title="choose emotions"
            onPress={handleSubmit(onBack)}
            color="grey"
          />
        )}

        <Button title="Next" onPress={handleSubmit(onSubmit)} color="#CD7C0F" />
      </View> */}
      <View style={[styles.buttonContainer, { paddingTop: 100 }]}>
        <View style={styles.button}>
          <Button
            title={
              fromDefusion || emotions.length === 0 ? 'choose emotions' : 'Back'
            }
            onPress={handleSubmit(onBack)}
            color="grey"
          />
        </View>
        {emotions.length > 0 && (
          <View style={[styles.button, { justifyContent: 'flex-start' }]}>
            <Button
              title="Next"
              onPress={handleSubmit(onSubmit)}
              color="#CD7C0F"
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Rate;
