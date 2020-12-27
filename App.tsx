import React, { useState } from 'react';
//import { Provider } from 'react-redux';
//import { createStore, combineReducers, applyMiddleware } from 'redux';
//import ReduxThunk from 'redux-thunk';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { SafeAreaView, StyleSheet } from 'react-native';

import QuizzNavigator from './navigation/QuizzNavigator';
//import quizzReducer from './store/reducers/quizz';

/*
const rootReducer = combineReducers({
  quizz: quizzReducer,
});
*/
//const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'abril': require('./assets/fonts/AbrilFatface-Regular.ttf'),
    'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-b': require('./assets/fonts/Poppins-Bold.ttf')
    /*
    'merriweather': require('./assets/fonts/Merriweather-Regular.ttf'),
    'montserrat': require('./assets/fonts/Montserrat-Regular.ttf')
    */
  });
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setFontLoaded(true)} 
        onError={console.warn}
      />
    );
  };

  return (
      <SafeAreaView style={styles.screen}>
        <QuizzNavigator />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
