import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { SafeAreaView, StyleSheet } from 'react-native';

import QuizzNavigator from './navigation/QuizzNavigator';
import screenReducer from './store/reducers/screen';


const rootReducer = combineReducers({
  screen: screenReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'montserrat': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'openSans-b': require('./assets/fonts/OpenSans-Bold.ttf'),
    'openSans': require('./assets/fonts/OpenSans-Regular.ttf'),
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
    <Provider store={store}>
      <SafeAreaView style={styles.screen}>
        <QuizzNavigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white'
  },
});
