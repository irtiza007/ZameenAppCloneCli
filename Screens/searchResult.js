
import React, {Component} from 'react';
import {Platform, 
  TouchableOpacity,
  StyleSheet, Text, View, ImageBackground,
  TextInput,
  Image, Dimensions, ScrollView} from 'react-native';
  import Icon from "react-native-vector-icons/Ionicons";
import { getActiveChildNavigationOptions } from 'react-navigation';
import SvgUri from 'react-native-svg-uri';
import * as Animatable from 'react-native-animatable';
import Modal from "react-native-modal";
import { RadioButton } from 'react-native-paper';
import strings from '../Services/language';
import {I18nManager, AsyncStorage} from 'react-native';  
import {connect} from 'react-redux';  
import i18n from '../Services/language';


 class searchResult extends Component{
constructor(props){
    super(props);
    this.state={
        animation:'',
        isRTL: this.props.isRTL
  
    }
    
}

componentWillReceiveProps(nextProps) {
    //alert({nextProps});
    
}

  render(){

  //  this.props.isRTL ? i18n.setLanguage('en-US') : i18n.setLanguage('ar');
      return(
        <View style={styles.container}>
       <View style={styles.customNavSearch}>
       <View style={{flexDirection:'row', flex:2,}}>
  <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
  <Icon name="ios-menu" style={{fontWeight:'bold', fontSize:35, color:'#ffff'}} />
  </TouchableOpacity>
  <View style={{justifyContent:'center'}}>
  <Text style={{color:'white',fontSize:18, fontWeight:'800', paddingLeft:20 }}>{strings.Search_Result}</Text>
  </View>
  </View>
      <TouchableOpacity onPress={() => this.props.isRTL ? this.props.changeEN() : this.props.changeAR()}>
          <View style={{flex:1,flexDirection:'row', alignItems:'center'}}>
        <Icon name="md-star" style={{fontSize:25, fontWeight:'900', color:'white', borderColor:'white'}} />
   
        <Text style={{color:'white', paddingRight:10, paddingLeft:5}}>{strings.Save}</Text>
        
        </View>
      </TouchableOpacity>
   </View>
   <Animatable.View animation='slideInRight' iterationCount={1}>
   <View style={styles.filterArea}>
        <View style={{flex:1.3, justifyContent:'center'}}>
        <Text style={{color:'black'}}>20,883 <Text style={{fontSize:12,}}>{strings.Homes}</Text></Text>

        </View>
        <View style={{flex:1, flexDirection:'row'}}>
        <View style={{flexDirection:'row', backgroundColor:'#DDDEE0', padding:7,}}>
        <Icon name='ios-document' style={{color:'black', fontSize:22, paddingRight:5}} />
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Search')}>
            <Text style={{color:'black', fontSize:12}}>{strings.FILTERS}</Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', backgroundColor:'#DDDEE0', padding:7, marginLeft:6 }}>
        <Icon name='ios-document' style={{color:'black', fontSize:22, paddingRight:5}} />
            <Text style={{color:'black', fontSize:12}}>{strings.SORT}</Text>
            </View>

   </View>
   </View>
   <View style={styles.housesArea}>
   <View style={styles.houseAreaDetails}>
        <Animatable.View style={{position:'relative'}} animation={this.state.animation} iterationCount={1} >
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ShowDetails'); this.setState({
            animation:'zoomIn'
        })}}>
        <Image style={{height:125, width:125,}} source={require('../assets/roomBackground.jpg')} />
        </TouchableOpacity>
        <View style={[styles.superHot, {position:'absolute'}]}>
        <Image style={{height:10, width:10, marginRight:4}} source={require('../assets/flameone-01.png')} />
        <Text style={{color:'white', fontSize:9, paddingRight:17, fontWeight:'500'}}>SUPER HOT</Text>
        </View>
        </Animatable.View>
        <View style={{paddingLeft:7, flex:1}}>
        <View style={{justifyContent:'space-between', flex:1, flexDirection:'row',}}>
        <Text style={{color:'black', fontSize:10, fontWeight:'800' }}>PKR <Text style={{fontSize:20, fontWeight:'bold'}}>4.5 {strings.Crore}</Text></Text>
        <View style={{justifyContent:'center'}}>
    <Image source={require('../assets/verified.png')} style={{width:12, height:12, }} />
    </View>
        </View>
        <View style={{flex:3, marginTop:4}}>
        <Text style={{color:'black', fontSize:14}}>DHA phase 6, DHA Defence</Text>
        <Text style={{fontSize:12, paddingTop:5}}>{strings.House}</Text>
        <Text style={{fontSize:12, paddingTop:4}}>{strings.Updated}: <Text>{strings.time}</Text></Text>
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:3
    }}>
        <View style={{flexDirection:'row', flex:1}}>
        <View style={{justifyContent:'center'}}>
            <Icon name='ios-bed' style={{paddingRight:3}} />
            </View>
            <Text style={{fontSize:12}}>5</Text>
            </View>
            <View style={{flexDirection:'row', flex:1, justifyContent:'center'}}>
            <View style={{justifyContent:'center'}}>
            <Icon name='ios-bed' style={{paddingRight:3}} />
            </View>
             <Text style={{fontSize:12}}>7</Text>
            </View>
            <View style={{flexDirection:'row', flex:2, justifyContent:'space-between', alignItems:'center'}}>
                          
            <Text style={{fontSize:12}}>20 <Text>Marla</Text></Text>
            <Icon name='ios-heart' style={{fontSize:26, color:'green', }} />
            </View>
        </View>
        </View>

        
        </View>
   </View>

   </View>

         </Animatable.View>       
 
   </View>
      )
  }
}
const styles = StyleSheet.create(

    {
    
    container: {
  height:HEIGHT,
  backgroundColor:'#DDDEE0',
    },
    customNavSearch:{
      justifyContent:'space-between',
      alignContent:'space-between',
      flexDirection:'row',
      padding:10,
     backgroundColor: '#25AD30',
     marginTop: HEIGHT >= 812 ? 30 : 0
    },
    filterArea:{
        flexDirection:'row',
        padding:10,
        backgroundColor:'white',
        shadowOffset:{  height: 10, width:10 },
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    housesArea:{
        padding:5,
    },
    houseAreaDetails:{flexDirection:'row', padding:6,
     backgroundColor:'white',
     borderRadius:8,  shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 2,
},
    superHot:{
        backgroundColor:'red',
     flexDirection:'row',
     
      top:0, left:0,
       paddingLeft:12
    }
});

const mapStateToProps = (state) => {  
    return {
        isRTL: state.test.isRTL
    };
};

const mapDispatchToProps = (dispatch) => ({  
    changeAR: () => {
        return dispatch({type: "CHANGE_TO_AR"})
    },
    changeEN: () => {
        //alert('hi');
        return dispatch({type: "CHANGE_TO_EN"})
    }
});

 export default connect(mapStateToProps, mapDispatchToProps)(searchResult);  