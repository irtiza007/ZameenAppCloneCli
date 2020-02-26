import React, {Component} from 'react';
import {Platform, StyleSheet, Text,
 View, ImageBackground, Image, Dimensions,ScrollView,TouchableOpacity,
 StatusBar
} from 'react-native';
 import { createDrawerNavigator,createAppContainer, createStackNavigator, 
  StackActions, NavigationActions, createSwitchNavigator, 
  SwitchNavigator, DrawerItems } from 'react-navigation';
  import Icon from "react-native-vector-icons/Ionicons";
  import SvgUri from 'react-native-svg-uri';
import Home from './Screens/Home';
import signIn from './Screens/signIn';
import searchScreen from './Screens/searchScreen';
import searchResult from './Screens/searchResult';
import showDetails from './Screens/showDetails'
import ShareExample from './Screens/example'
import {I18nManager, AsyncStorage} from 'react-native';  
const customDrawerItems = (props)=>(
  
  
    <View>
     <View style={{height:'40%', backgroundColor:'#25AD30', justifyContent:'flex-end', padding:2, alignItems:'center'}}>
     <View style={{padding:0}}>
                  <SvgUri width="150" height="100" fill='white' source={require('./assets/zameen-logo.svg')} />
                     </View> 
     <TouchableOpacity onPress={() => {props.navigation.navigate('SignIn')}}>
     <View style={{borderWidth:1, borderColor:'#ffff', padding:5}}>
     <Text style={{color:'white'}}> SignUp/SignIn</Text>
     </View>
     </TouchableOpacity>
     </View>
       <ScrollView>
         <DrawerItems {...props} />
       </ScrollView>
       </View>
   )
  const appDrawerNavigator=createStackNavigator({
    Start:{screen:createDrawerNavigator({
      
      Home:{screen:Home,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
         <Icon name='md-home' style={{fontSize:15, fontWeight:'bold', }} />
        ),
        header:null,
        
        
        
      },
    },
    Search:{screen:searchScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
         <Icon name='md-search' style={{fontSize:15, fontWeight:'bold', }} />
        ),
        header:null,
        drawerLabel:'New Search',
        swipeEnabled: true,
      },
    },
    searchResult:{screen:searchResult,
      navigationOptions: {
        drawerLabel: () => null,
        header:null,
          swipeEnabled: true,
      },
      
    },
    ShareExample:{screen:ShareExample,
      navigationOptions: {
        header:null,
          swipeEnabled: true,
      },
      
    },
    },
    
    {   
      navigationOptions: {
        header:null,
        swipeEnabled: true,
        initialRouteName : 'searchResult',
        drawerPosition:'right'
     
      },
      
   
        contentComponent:customDrawerItems,
        drawerWidth:WIDTH/1.7,
        
        contentOptions:{
          activeTintColor:'#25AD30',
          
          
        
    
  
        }
      }
  
    
  )},
  
    SignIn:{screen:signIn,
      navigationOptions: {
        header:null
      },
    },
    
   ShowDetails:{screen:showDetails,
      navigationOptions: {
        header:null
      },
      
    }
    
    
  
  
  
  },
  
  
  
  
  );
  
  
  export default createAppContainer(appDrawerNavigator);
  
  