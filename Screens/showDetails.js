
import React, {Component} from 'react';
import {Platform, 
  TouchableOpacity,
  StyleSheet, Text, View, ImageBackground,
  TextInput,
  Image, Dimensions, ScrollView, 
Share} from 'react-native';
  import Icon from "react-native-vector-icons/Ionicons";
import { getActiveChildNavigationOptions } from 'react-navigation';
import SvgUri from 'react-native-svg-uri';
import * as Animatable from 'react-native-animatable';
import Modal from "react-native-modal";
import { RadioButton } from 'react-native-paper';
import ImagesSwiper from "react-native-image-swiper";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
export default class showDetails extends Component {
    constructor(){
        super();
        this.state={

            height:'100%',
            width:'100%',
            justifyContent:'',
            EnlargeArea:true
        }
    }
    onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
      EnlargePics=()=>{
          this.setState({
          EnlargeArea:false
          })
      }
  
    

    render() {
  
      return (
        this.state.EnlargeArea ? (
          <View style={styles.container}>
        
       <View style={styles.customNavSearch}>
       <View style={{flexDirection:'row', flex:3,}}>
  <TouchableOpacity onPress={()=> this.props.navigation.navigate('searchResult')}>
  <Icon name="ios-arrow-back" style={{fontWeight:'bold', fontSize:35, color:'#ffff'}} />
  </TouchableOpacity>
  <View style={{justifyContent:'center'}}>
  <Text style={{color:'white',fontSize:18, fontWeight:'800', paddingLeft:20 }}>Property Details</Text>
  </View>
  </View>
   
          <View style={{flex:0.7,flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginRight:8}}>
        <Icon name="md-heart" style={{fontSize:25, fontWeight:'900', color:'white', borderColor:'white'}} />
        <TouchableOpacity onPress={()=>this.onShare()}>
        <Icon name="md-share" style={{fontSize:25, fontWeight:'900', color:'white', borderColor:'white'}} />
        </TouchableOpacity>
        </View>
   </View>
   <View style={{flex:4}}>
   <ScrollView >

<Animatable.View style={{flex:1, position:'relative',height:this.state.height, width:this.state.width, justifyContent:'center'}}
animation='zoomIn' iterationCount={1}
>
 <TouchableWithoutFeedback onPress={()=>this.EnlargePics()}>
   <ImagesSwiper />
   </TouchableWithoutFeedback>
   <View style={styles.howMuchViews}>
   <View style={{ backgroundColor:'black',
   marginRight:10,
   opacity:0.7, borderRadius:6, flexDirection:'row', padding:3, paddingLeft:5, paddingRight:5}}>
     <Icon name='ios-camera' style={{color:'white', fontSize:18}} />
      <Text style={{color:'white'}}>14</Text>
      </View> 
   <View style={{ backgroundColor:'black', opacity:0.7, borderRadius:6, flexDirection:'row', padding:3, paddingLeft:5, paddingRight:5}}>
     <Icon name='ios-bulb' style={{color:'white', fontSize:18}} />
      <Text style={{color:'white'}}>1</Text>
      </View> 
      </View>
   <View style={{position:'absolute', right:3, bottom:5, backgroundColor:'black', opacity:0.7, borderRadius:6}}>
      <Text style={{color:'white'}}>updated 1 hour ago</Text>
      </View>  
   
</Animatable.View>

<View style={styles.DetailsArea}>
    <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:10 }}>
    <Text style={{color:'black', fontSize:14, fontWeight:'800' }}>PKR <Text style={{fontSize:24, fontWeight:'bold'}}>4.5 Crore</Text></Text>
    </View>
    <View style={{padding:7}}>
        <Text style={{fontSize:17, color:'black', fontWeight:'bold'}}>
            Super Hot Offer New Deal Beautifull location in Eastern District Residential Plot File for Sale  
        </Text>
    </View>
    <View style={{padding:7}}>
        <Text style={{fontSize:16, color:'black'}}>
 Bahria Orchard Phase 1 - Eastern, Behria Orchard phase 1
        </Text>
    </View>
    <View style={{flexDirection:'row', padding:15, borderTopWidth:0.6, borderBottomWidth:0.6,
     borderTopColor:'#DDDEE0', borderBottomColor:'#DDDEE0', marginTop:10 }}>
     <View style={{justifyContent:'center', paddingRight:10, }}>
    <Icon name="ios-arrow-back" style={{fontWeight:'bold', color:'black', fontSize:17}} />
    </View>
    <Text style={{fontWeight:'bold', color:'black'}}>
        5 Marla
    </Text>
    </View>

    <View style={{flexDirection:'row', padding:15}}>
    <Text style={{fontWeight:'bold', color:'black', fontSize:18}}>
        Details 
    </Text>
    </View>
    <View style={styles.PropertyArea}>
        <View style={{backgroundColor:'#DDDEE0', flex:1, flexDirection:'row', padding:10}}>

   
        <View style={{flex:1.3, alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
      
        <View style={{justifyContent:'center',paddingRight:8}}>
        <Icon name='ios-search' style={{fontSize:16, color:'black'}} />
        </View>
        <Text style={{color:'black', fontSize:12}}>Property ID</Text>
        </View>
        <View style={{flex:1,}}>
        <Text style={{color:'black', fontSize:12}}>12345</Text>
        </View>
        </View>

        <View style={{backgroundColor:'', flex:1, flexDirection:'row', padding:10}}>

   
<View style={{flex:1.3, alignItems:'center', flexDirection:'row', justifyContent:'center'}}>

<View style={{justifyContent:'center',paddingRight:8}}>
<Icon name='ios-search' style={{fontSize:16, color:'black'}} />
</View>
<Text style={{color:'black', fontSize:12}}>Property ID</Text>
</View>
<View style={{flex:1,}}>
<Text style={{color:'black', fontSize:12}}>12345</Text>
</View>
</View>

<View style={{backgroundColor:'#DDDEE0', flex:1, flexDirection:'row', padding:10}}>

   
<View style={{flex:1.3, alignItems:'center', flexDirection:'row', justifyContent:'center'}}>

<View style={{justifyContent:'center',paddingRight:8}}>
<Icon name='ios-search' style={{fontSize:16, color:'black'}} />
</View>
<Text style={{color:'black', fontSize:12}}>Property ID</Text>
</View>
<View style={{flex:1,}}>
<Text style={{color:'black', fontSize:12}}>12345</Text>
</View>
</View>

<View style={{backgroundColor:'', flex:1, flexDirection:'row', padding:10}}>

   
<View style={{flex:1.3, alignItems:'center', flexDirection:'row', justifyContent:'center'}}>

<View style={{justifyContent:'center',paddingRight:8}}>
<Icon name='ios-search' style={{fontSize:16, color:'black'}} />
</View>
<Text style={{color:'black', fontSize:12}}>Property ID</Text>
</View>
<View style={{flex:1,}}>
<Text style={{color:'black', fontSize:12}}>12345</Text>
</View>
</View>

<View style={{backgroundColor:'#DDDEE0', flex:1, flexDirection:'row', padding:10}}>

   
<View style={{flex:1.3, alignItems:'center', flexDirection:'row', justifyContent:'center'}}>

<View style={{justifyContent:'center',paddingRight:8}}>
<Icon name='ios-search' style={{fontSize:16, color:'black'}} />
</View>
<Text style={{color:'black', fontSize:12}}>Property ID</Text>
</View>
<View style={{flex:1,}}>
<Text style={{color:'black', fontSize:12}}>12345</Text>
</View>
</View>
    </View>
    <View style={{ padding:15}}>
    <Text style={{fontWeight:'bold', color:'black', fontSize:14}}>
    Description
    </Text>
<Text style={{fontSize:10}}>
    Apex Group offers 5 marla plot for Sale with plot Number Booking with 1,600,00 PKR and Remaining Amount after 3 months. 

    -Block Buster Opportunity 
    -Great New Deal In Eastern District in behria town  

</Text>
    </View>
      



    

</View>
</ScrollView>
</View>




<View style={{flex:0.4, justifyContent:'center', padding:8, flexDirection:'row'}}>
<TouchableOpacity>
    <View style={styles.bottom}>
<Icon name='ios-mail' size={26} color='white' style={{paddingRight:5}} />
<Text style={{color:'white', fontSize:15, fontWeight:'900'}}>
    EMAIL
</Text>
</View>
</TouchableOpacity>
<TouchableOpacity>
<View style={styles.bottom}>
<Icon name='ios-call' size={26} color='white' style={{paddingRight:5}} />
<Text style={{color:'white', fontSize:15, fontWeight:'900'}}>
    CALL
</Text>
</View>
</TouchableOpacity>
<TouchableOpacity>
<View style={styles.bottomSMS}>
<Icon name='md-mail' size={26} color='white' style={{paddingRight:5}} />
<Text style={{color:'white', fontSize:15, fontWeight:'900'}}>
SMS
</Text>
</View>
</TouchableOpacity>
</View>

   </View>
   ) : (
     <View style={{height:'100%', width:'100%', backgroundColor:'black'}}>
     <View style={styles.ExitEnlarge}>
       <View style={{flexDirection:'row', flex:1}}>
  <TouchableOpacity onPress={()=>this.setState({EnlargeArea:true})}>
  <Icon name="ios-arrow-back" style={{fontWeight:'bold', fontSize:35, color:'white'}} />
  </TouchableOpacity>
 
  </View>
   </View>
   <Animatable.View style={{flex:1, justifyContent:'center'}}  animation='slideInDown' iterationCount={1}>
    <ImagesSwiper
    height={500}
    width={500}
    style={{justifyContent:'center'}}
    />
   </Animatable.View>
   <View style={{flex:0.3}}>

   </View>
     </View>
   )
  
   
       
      );
    }
  }
  
const styles = StyleSheet.create({
    container: {
  height:'100%',
  width:Dimensions.get('window').width
    },
    customNavSearch:{
      justifyContent:'space-between',
      alignContent:'space-between',
      flexDirection:'row',
      padding:10,
     backgroundColor: '#25AD30',
     marginTop: HEIGHT >= 812 ? 30 : 0
    },
    ExitEnlarge:{
      marginTop: HEIGHT >= 812 ? 30 : 0,
      justifyContent:'space-between',
      alignContent:'space-between',
      flexDirection:'row-reverse',
      padding:10,
      flex:0.3
    },
    PropertyArea:{
        paddingRight:20, paddingLeft:20, padding:10, alignItems:'center', 
    },
    bottom:{
        backgroundColor:'#25AD30',
        flexDirection:'row',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
        borderRadius:7,
      width:110
        },
    bottomSMS:{
        backgroundColor:'#25AD30',
        flexDirection:'row',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7,
    width:110
    },
    howMuchViews:{
        flexDirection:'row',
        position:'absolute',
        bottom:5,
        left:5
    }

}
)
