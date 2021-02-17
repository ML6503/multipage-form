import { StyleSheet, StatusBar, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    fontFamily: 'TimesNewRomanPSMT',
    marginHorizontal: 'auto',
    marginTop: StatusBar.currentHeight || 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#30D5C8',
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginVertical: '1em',
    textAlign: 'center',
    width: Dimensions.get('window').width
  },
  text: {
    // lineHeight: "1.5em",
    fontSize: '1rem',
    //marginVertical: "1em",
    textAlign: 'center',
    alignSelf: 'center',
    justifyItems: 'center',
    backgroundColor: 'white',
    //borderRadius: "5%",
    width: '100%',
    // width: 200,
    //height: "10%",
    padding: '2%',
    textBreakStrategy: 'simple',
    minimumFontScale: '0.1'
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: '50%',
    fontSize: 20,
    paddingRight: '10%',
    paddingTop: '5%',
    paddingLeft: '10%',
    textAlign: 'center',
    // marginTop: "7%",
    alignSelf: 'center',
    width: '90%'
  },
  button: {
    alignSelf: 'flex-end',
    width: 200,
    paddingRight: '10%',
    paddingTop: '5%'
    // alignItems: 'flex-end'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '50%',
    // height: Dimensions.get('window').height /3,
    paddingTop: '3%',
    // alignItems: 'center',
    alignItems: 'flex-end',
    // alignContent: 'flex-end',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginBottom: '5%',
    marginTop: 'auto'
  }
});

const rateStyles = StyleSheet.create({
  sliderOne: {
    // flexDirection: "row",
    // justifyContent: 'space-around',
    alignItems: 'center'
    // width: '100%'
  },
  textRate: {
    alignSelf: 'center'
    // paddingTop: 20
  }
});

const realisticStyles = StyleSheet.create({
  containerButtonElem: {
    alignSelf: 'flex-end',
    //width: "10%",
    postition: 'absolute',
    top: '-9%',
    right: '26%'
  }
});

const reviewStyles = StyleSheet.create({
  infoContainer: {
    alignSelf: 'flex-start',
    paddingLeft: '10%',
    paddingTop: '3%'
  },
  header: {
    fontWeight: 'bold'
  },
  divider: {
    backgroundColor: 'grey',
    marginBottom: 10,
    marginTop: 10,
    width: Dimensions.get('window').width * 0.7
  }
});

export { styles, rateStyles, realisticStyles, reviewStyles };
