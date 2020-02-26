import React, {Component} from 'react';
import {Platform, 
  TouchableOpacity,
  StyleSheet, Text, View, ImageBackground,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
   Dimensions} from 'react-native';
  import Icon from "react-native-vector-icons/Ionicons";
  import * as Animatable from 'react-native-animatable';
  import SvgUri from 'react-native-svg-uri';



WIDTH=Dimensions.get('window').width;
HEIGHT=Dimensions.get('window').height;

export default class signIn extends Component{
    constructor(){
        super();
        this.state={
            placeholderInputEmail:'#f8f8f8',
            placeholderInputPassword:'#f8f8f8',
            behavior:'position'
        }
    }
    
    render(){
        return (
          <ScrollView>
            <Animatable.View style={styles.container} animation="slideInUp" iterationCount={1}>
         
                <View style={styles.navCross}>
                
                <View style={{flex:1, flexDirection:'row-reverse', paddingRight:20}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home')}}>
                    <Icon name='ios-close' style={{fontSize:50, color:'#ffff', 
                    fontWeight:'bold'}} />
                    </TouchableOpacity>    
                         </View>

                </View>
                <View style={{padding:0, }}>
                <SvgUri width="200" height="100" fill='white' source={require('../assets/zameen-logo.svg')} />
                   </View> 
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                
                <View>

                    <Text style={styles.wellcome}>Wellcome to Zameen.com</Text>
                </View>
                <View style={styles.Email}>
                    <View style={{width:'80%', }}>
                    <TextInput placeholder='Email'
                    style={[styles.emailTextInput,{ borderBottomColor:this.state.placeholderInputEmail}]} 
                    placeholderTextColor="#f8f8f8" 
                    onChangeText={()=>{this.setState({placeholderInputEmail:'red'})}}
                    />
                    </View>
                    
                </View>
            
                <View style={styles.Email}>
                    <View style={{width:'80%' }}>
                    <TextInput placeholder='Password'
                    style={[styles.emailTextInput,{ borderBottomColor:this.state.placeholderInputPassword}]} placeholderTextColor="#f8f8f8"
                    secureTextEntry={true}
                    onChangeText={()=>{this.setState({placeholderInputPassword:'red'})}}
                    />
                    </View>
                    
                </View>
                <View style={{flexDirection:'row', width:'80%', paddingTop:10}}>
                <View style={{flex:1, flexDirection:'row-reverse'}}>
                <Text style={{color:'#f8f8f8'}}>Forget Password?</Text>
                </View>
                </View> 
              

                </View>
                                <View style={styles.SignInArea}>
                    <TouchableOpacity>
                    <View style={styles.loginIn}>
                        <Text style={{color:'#25AD30'}}>Sign In</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{padding:15, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>
                            OR 
                        </Text>
                    </View>
                    <TouchableOpacity>
                    <View style={styles.loginWithFace}>
                        <Text style={{color:'#f8f8f8'}}>Login with facebook</Text>
                    </View>
                    </TouchableOpacity>
                    
                <View style={{flex:0.5,flexDirection:'row', justifyContent:'center', alignItems:'flex-end', paddingTop:'6%'}}>
                
                    <Text  style={{color:'white', paddingRight:2}}>
                        Need an account?
                    </Text>
                    <Text style={{color:'white', fontWeight:'bold'}}>
                        SignUp
                    </Text>
                    
                </View>
                </View>
                
            </Animatable.View>
</ScrollView>
         
          );
    }
}
const styles = StyleSheet.create({
    container: {
     height:HEIGHT,
      alignItems:'center',
      backgroundColor: '#25AD30',
      marginTop: HEIGHT >= 812 ? 30 : 0
    },
    navCross:{
        padding:15,
        paddingRight:20,
        flexDirection:'row',
        marginTop: HEIGHT >= 812 ? 30 : 0,

    },
    wellcome:{
        color:'#F8F8F8',
        fontSize:23,
        
    },
    Email:{
        flexDirection:'row',
        paddingTop:30
    },
    emailTextInput:{
        borderBottomWidth:0.5,
        fontSize:13,
         color:'#f8f8f8',
    padding:0

},
SignInArea:{
    flex:1.3,
    width:'80%',

},
loginIn:{
    padding:15,
    alignItems:'center',
    backgroundColor:'#ffff',
    borderRadius:50,
},
loginWithFace:{
    padding:15,
    alignItems:'center',
    backgroundColor:'blue',
    borderRadius:50,
}
  });
  
