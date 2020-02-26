
import React, {Component} from 'react';
import {Platform, 
  TouchableOpacity,
  StyleSheet, Text, View, ImageBackground,
  TextInput,
  Image, Dimensions} from 'react-native';
  import Icon from "react-native-vector-icons/Ionicons";
import { getActiveChildNavigationOptions } from 'react-navigation';
import SvgUri from 'react-native-svg-uri';
import * as Animatable from 'react-native-animatable';
import SplashScreen from 'react-native-splash-screen';
import strings from '../Services/language'

WIDTH=Dimensions.get('window').width;
HEIGHT=Dimensions.get('window').height;
export default class Home extends Component {
  constructor(){
    super();
    this.state={
      HideSearchArea:false,
      searchOpacity:1,
      touchableOpacityD:false,
        touchableOpacityD:true,
        touchableOpacityLetsADD:false,
        animationTvc:true
    }
  }
  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }
  showSearchArea=()=>{
    this.setState({
      HideSearchArea:true,
      searchOpacity:0.3,
      touchableOpacityD:false,
      touchableOpacityLetsADD:true
    })
  }
  HideSearchAreaWhileMenu=()=>{
    this.setState({
      HideSearchArea:false,
      searchOpacity:1,
      touchableOpacityD:true,
      touchableOpacityLetsADD:false
    })
  }
  render() {

    return (
      <View style={styles.container}>
       <ImageBackground source={require('../assets/irtaza-01.png')} style={{width: WIDTH, height: HEIGHT, }}>
       <View style={styles.customNavSearch}>
  <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
  <Icon name="ios-menu" style={{fontWeight:'bold', fontSize:35, color:'#ffff'}} />
  </TouchableOpacity>
      <TouchableOpacity onPress={this.showSearchArea}>
        <Icon name="md-search" style={{fontSize:35, fontWeight:'900', color:'#ffff'}} />
      </TouchableOpacity>
   
  </View>
  
  {this.state.HideSearchArea ? (  

  
  <View style={{paddingLeft:20,paddingRight:20, flexDirection:'row'}}>
  <View style={{borderRadius:15, backgroundColor:'white',
 height:30, fontSize:12, color:'black', flex:1, justifyContent:'center',alignContent:"center"
}}>
<TextInput placeholder='Enter property ID E.g. 123456'  style={{ color:'black', height:40, lineHeight:20
,fontSize:10, justifyContent:'center'
}}/>
</View>
<View style={{alignItems:'center',backgroundColor:'#25AD30', paddingLeft:20, paddingRight:20, borderRadius:20, paddingTop:3}}>
<Text style={{color:'white', fontWeight:'700', }}> Search</Text>
</View>
</View>


): null } 
<Animatable.View style={{flex:1}} animation='slideInDown'>
  <View style={[styles.logoArea, {opacity:this.state.searchOpacity}] }>
  <View style={{flex: 2, justifyContent: 'flex-end'}}>
                <SvgUri width="250" height="100" fill='white' source={require('../assets/zameen-logo.svg')} />
                   </View> 
  <TouchableOpacity onPress={()=>this.HideSearchAreaWhileMenu()} disabled={this.state.touchableOpacityD}>
    <Text style={{color:'white', fontWeight:'bold'}}>
    We list over 15,820,64 properties and growing
    </Text>
    <View style={{justifyContent:'center', alignItems:'center'}}>
    <TouchableOpacity disabled={this.state.touchableOpacityLetsADD} onPress={()=> this.props.navigation.navigate('Search')}>
    <View style={styles.letSearch}>
    <View style={{justifyContent:'center', paddingRight:5,}}>
      <Icon name='md-search' style={{color:'#ffff', fontWeight:'900', fontSize:20}} />
      </View>
    
      <View style={styles.letsSearchBox}>
        <Text style={{color:'#ffff', fontWeight:'900', fontSize:10 }}>
        LET'S SEARCH
        </Text>
      </View>
    
 
  </View>
  </TouchableOpacity>
  <TouchableOpacity disabled={this.state.touchableOpacityLetsADD}>
    <View style={styles.addProperty}>
    
    <View style={{justifyContent:'center', paddingRight:5}}>
      <Icon name='md-home' style={{color:'#ffff', fontWeight:'900', fontSize:20}} />
      </View>
    
      <View style={styles.letsSearchBox}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignIn')}>
        <Text style={{color:'#ffff', fontWeight:'900', fontSize:10 }}>
       ADD PROPERTY
        </Text>
        </TouchableOpacity>
      </View>
    
  </View>
  </TouchableOpacity>
  </View>
  </TouchableOpacity>
  </View>
 
  <View style={{flex:0.7, alignItems:'center'}}>
  <TouchableOpacity>
    <Text style={{color:'white', borderBottomColor:'white',
     borderBottomWidth:1}}>VIEW LAST SEARCH</Text>
     </TouchableOpacity>
     <Text style={{color:"white", fontSize:13, paddingTop:3}}>Buy Homes in Lahore</Text>
     {this.state.animationTvc ? (
  <Animatable.View animation="slideInUp" iterationCount={1} style={{
  flex:1,
  width:'100%',
  flexDirection:'row-reverse',
  alignItems:'flex-end',
  paddingRight:5}}>
  <View style={{alignItems:'flex-end', paddingRight:5}}>
    <TouchableOpacity onPress={()=>{this.setState({
       animationTvc:false
      })}}>
      <View style={{backgroundColor:'white', alignItems:'center', borderRadius:15, height:30, width:30}}>
     <Icon name="ios-close" style={{color:'green', fontSize:30, fontWeight:'bold', }} />
     </View>
     </TouchableOpacity>
  <Image source={require('../assets/zameenTvc.png')} style={{height:150, width:150}} />
</View>
  </Animatable.View>
  ):null}
  </View>
  </Animatable.View>
  </ImageBackground>

            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
height:'100%',
 color:'#25AD30'
  },
  customNavSearch:{
    justifyContent:'space-between',
    alignContent:'space-between',
    flexDirection:'row',
    padding:10,
    marginTop: HEIGHT >= 812 ? 30 : 0
   
  },
  logoArea:{
    flex:1,
    padding:10,
    alignContent:'center',
    alignItems:'center',
    height:'100%',

  },
  letSearch:{ 
    marginTop:40,
  backgroundColor:'#25AD30',
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'row',
  padding:5,
paddingLeft:45,
paddingRight:45,
 borderRadius:20
  },
  addProperty:{
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    padding:5,
    paddingLeft:40,
    paddingRight:40,
   borderRadius:20,
   borderColor:'white',
   borderWidth:1
  },
});
