
import React, {Component} from 'react';
import {Platform, StyleSheet, Text,
 View, ImageBackground, Image, Dimensions,ScrollView,TouchableOpacity,
 StatusBar
} from 'react-native';
//  import { createDrawerNavigator,createAppContainer, createStackNavigator, 
//   StackActions, NavigationActions, createSwitchNavigator, 
//   SwitchNavigator, DrawerItems } from 'react-navigation';
//   import Icon from "react-native-vector-icons/Ionicons";
//   import SvgUri from 'react-native-svg-uri';
// import Home from './Screens/Home';
// import signIn from './Screens/signIn';
// import searchScreen from './Screens/searchScreen';
// import searchResult from './Screens/searchResult';
// import showDetails from './Screens/showDetails'
// import ShareExample from './Screens/example'
import configStore from './Redux/store';
import {Provider} from 'react-redux';
import Navigator from './AppNavigator'
import { PersistGate } from 'redux-persist/integration/react';
import {I18nManager, AsyncStorage} from 'react-native';  
//import RNRestart from 'react-native-restart';  
// AsyncStorage.setItem('lang','ar',() => {  
//     AsyncStorage.getItem('lang', (value) => {
//       if(value != null){
//         I18nManager.forceRTL(true);
//         RNRestart.Restart();
//       }
//     });
// })



const { store, persister } = configStore();

WIDTH=Dimensions.get('window').width;
export default class App extends Component {
 

  render() {

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content"/>
          <PersistGate loading={null} persistor={persister}>
            <Navigator/>
          </PersistGate>
        </View>
     </Provider>
    );
  }
}