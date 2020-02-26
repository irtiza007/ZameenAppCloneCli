
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
import {connect} from 'react-redux';

WIDTH=Dimensions.get('window').width;
HEIGHT=Dimensions.get('window').height;
export default class searchScreen extends Component {
    constructor(){
        super();
        this.state={
            buyBackground:'#0098DB', //blue
            rentBackground:'#DDDEE0', //grey
            NPBackground:'#DDDEE0', //grey
            buyText:'white',
            rentText:'grey',
            NPText:'grey',
            city:'Lahore',
            isModalVisible:false,
            isModalVisiblePStart:false,
            checked: 'Pakistan (PKR)',
            AreaUnitCheck:'Square Feet',
            MaxAreaInputBColor:'#DDDEE0',
            MinAmountTouchableOpacity:false,
            houseBorder:'black',
            countries: [
                'Pakistan (PKR)',
                'Canada (CAD)',
                'Saudi Arabia (SAR)',
                'United Arab Emirates (AED)',
                'United Kingdom (GBP)',
                'United State of America (USD)'

            ],
            inputRangeStart:['0','500,000','1,000,000', '2,000,000', '3,500,000', '5,000,000', 
            '6,500,000', '8,000,000', '10,000,000', '20,000,000'],
            AmountBackGround:'',
            inputMaxRange:['Any','500,000','1,000,000', '2,000,000', '3,500,000', '5,000,000', 
            '6,500,000', '8,000,000', '10,000,000', '20,000,000'],
            amountColor:'black',
            minAmount:'0',
            maxAmount: 'Any',
            homeBackground:'#0098DB',
            HomeText:'white',
            plotBackground:'#DDDEE0', //grey
            commercialBackground:'#DDDEE0', //grey
            
            plotText:'grey',
            commercialText:'grey',
            bedRooms:[1,2,3,4,5,6,7,8,9,'10+'],
            selectedBeds:[1],
            bedColors:'white',
            bedBackground:'#0098DB',
            isModalVisibleChangeAreaUnit:false,
            AreaUnit:['Square Feet','Square Meter', 'Square Yards', 'Marla', 'Kanal'],
            isModalVisibleUnitStart:false,
            unitAreaRangeStartMarla:[0,3,5,7,10,12,15,18,18,20, 25,30,35,40,50,70,100,150,200,300,400,500],
            unitAreaRangeEndMarla:['Any',3,5,7,10,12,15,18,18,20, 25,30,35,40,50,70,100,150,200,300,400,500],
            maxUnitArea:'Any',
            MaxunitAreaText:'white',
            MaxnunitAreaBackground:'#0098DB',
            minUnitArea:0,
            InputModelRangeMinUnitArea:0,
            inputRangeMaxUnitArea:'Any',
            minUnitAreaBackground:'#0098DB',
            minUnitAreaColor:'white',
            minUnitAreaPlaceHolder:0,
            maxUnitAreaPlaceHolder:0,
            MinUnitAreaTouchableOpacity:true,
            Bathrooms:[0,1,2,3,4,5,'6+'],
            selectedBath:[0],
            bathColors:'white',
            bathBackground:'#0098DB',

            
        
            
        }
    }
    _handlePress(event) {
        let minUnitAreaPlaceHolder=this.state.minUnitAreaPlaceHolder;
    }
    
    Buy=()=>{
        this.setState({
            buyBackground:'#0098DB',
            rentBackground:'#DDDEE0',
            NPBackground:'#DDDEE0',
            buyText:'white',
            NPText:'grey',
            rentText:'grey'
        })
    }

    rent=()=>{
        this.setState({
            buyBackground:'#DDDEE0',
            rentBackground:'#0098DB',
            NPBackground:'#DDDEE0',
            buyText:'grey',
            NPText:'grey',
            rentText:'white'
        })
    }
    newProject=()=>{
        this.setState({
            buyBackground:'#DDDEE0',
            rentBackground:'#DDDEE0',
            NPBackground:'#0098DB',
            buyText:'grey',
            NPText:'white',
            rentText:'grey'
        })
    }
    selectStartRange=(list)=>{
       
        this.setState({
           AmountBackGround :'#0098DB',
            amountColor:'white',
            minAmount:list,
            
        });
    
    }
    selectMaxRange=(list)=>{
            
        this.setState({
            maxAmount:list,
            AmountBackGround :'#0098DB',
             amountColor:'white',
            
             MaxAreaInputBColor:'#DDDEE0'
         });
        }
        AmountOk=()=>{
            this.setState({
                isModalVisiblePStart:false,
            })
        }
        resetAmount=()=>{
            this.setState({
                minAmount:'0',
                maxAmount:'Any'
            })
        }
        selectMinUnitArea=(list)=>{
            
        this.setState({
            minUnitAreaBackground :'#0098DB',
             minUnitAreaColor:'white',
             minUnitArea:list,
             minUnitAreaPlaceHolder:list
             
         });
        }
        UniAreaOk=()=>{
            this.setState({
                isModalVisibleUnitStart:false
            })
        }
        
        selectMaxUnitArea=(list)=>{
                
        this.setState({
            MaxnunitAreaBackground :'#0098DB',
             MaxunitAreaText :'white',
             maxUnitArea:list,
             maxUnitAreaPlaceHolder:list
             
         });
        }
        _toggleModalPriceEnd=()=>{
            this.setState({ isModalVisiblePStart: !this.state.isModalVisiblePStart,MinAmountTouchableOpacity:false });

        }
        OnBathSelect=(list)=>{
            var newStateArray = this.state.selectedBath
            if(newStateArray.includes(list)){
                
                this.state.selectedBath = this.state.selectedBath.filter(function(item) { 
                    return item !== list
                })
               
            this.setState({
                bathColors:'white', bathBackground:'#0098DB'
            })
            }
            else{
newStateArray.push(list);
this.setState({selectedBath: newStateArray, bathColors:'white', bathBackground:'#0098DB'});

            }

        }
        OnBedSelect=(list)=>{
            var newStateArray = this.state.selectedBeds
            if(newStateArray.includes(list)){
                
                this.state.selectedBeds = this.state.selectedBeds.filter(function(item) { 
                    return item !== list
                })
               
            this.setState({
                bedColors:'white', bedBackground:'#0098DB'
            })
            }
            else{
newStateArray.push(list);
this.setState({selectedBeds: newStateArray, bedColors:'white', bedBackground:'#0098DB'});

            }

        }
        resetUnitArea=()=>{
            this.setState({
                minAmount:'0',
                maxAmount:'Any',
                minUnitAreaPlaceHolder:'0',
                maxUnitAreaPlaceHolder:'Any',

            })
        }
    
  _toggleModal = () =>{this.setState({ isModalVisible: !this.state.isModalVisible });}
  _toggleModalPriceStart = () =>{this.setState({ isModalVisiblePStart: !this.state.isModalVisiblePStart, MinAmountTouchableOpacity:true });}
  _toggleModalAreaUnit =() =>{this.setState({ isModalVisibleChangeAreaUnit: !this.state.isModalVisibleChangeAreaUnit})}
  _toggleModalUnitStart=()=>{this.setState({isModalVisibleUnitStart:!this.state.isModalVisibleUnitStart, MinUnitAreaTouchableOpacity:false})}
  _toggleModalUnitEnd =() =>{this.setState({isModalVisibleUnitStart:!this.state.isModalVisibleUnitStart, MinUnitAreaTouchableOpacity:true})}
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.customNavSearch}>
                <View style={{justifyContent:'flex-start', flexDirection:'row', flex:1 }}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('searchResult')}>
                <Icon name="md-close" style={{fontSize:25, color:'#f8f8f8', fontWeight:'bold', paddingRight:'12%'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={{color:'white', fontWeight:'500', fontSize:15}}>FILTERS</Text>
                </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center'}}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('searchResult')}>
                <Text style={{color:'white', fontSize:13}}>APPLY</Text>
                </TouchableOpacity>
                </View>
                </View>
               
                <Animatable.View  style={styles.Searchcontainer}>
                <View style={styles.BRNarea}>
                    <View style={{backgroundColor:this.state.buyBackground, padding:5, width:'30%',borderRadius:20,
                     alignItems:"center",justifyContent:'center'}}>
                     <TouchableOpacity onPress={()=>this.Buy()}>
                    <Text style={{color:this.state.buyText,fontSize:12}}>
                        Buy
                    </Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:this.state.rentBackground, padding:5, width:'30%',borderRadius:20,
                     alignItems:"center", justifyContent:'center'}}>
                     <TouchableOpacity onPress={()=>this.rent()}>
                    <Text style={{color:this.state.rentText,fontSize:10}}>
                      Rent
                    </Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:this.state.NPBackground, padding:5, width:'30%',borderRadius:20,
                     alignItems:"center", justifyContent:'center'}}>
                     <TouchableOpacity onPress={()=>this.newProject()}>
                    <Text style={{color:this.state.NPText, fontSize:10}}>
                        NewProject
                    </Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                <View>
                <View style={styles.searchLocationArea}>
                <View style={{flexDirection:'row', }}>
                <View style={{justifyContent:'center', paddingRight:5,paddingLeft:5}}>
                <Icon name='md-locate' style={{color:'black', fontSize:20}} />
                </View>
                
                <Text style={{color:'black'}}>
                   Select Location
                </Text>
             
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:5,paddingTop:'7%'}}>
                   <View style={{flexDirection:'row', }}>
                    <Text style={{paddingRight:3}}>
                        Searching in
                    </Text>
                    <Text style={{color:'black', fontWeight:'300'}}>
                        {this.state.city}
                    </Text>
                    </View>
                    <TouchableOpacity>
                        <View>
                            <Text style={{color:'#0098DB', fontWeight:'bold', }}>
                                Change City
                                </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style={{alignSelf:'auto',borderColor:'#DDDEE0', borderWidth:0.5, height:35, marginTop:15, marginBottom:'8%'}}>
                <TextInput placeholder='Type and select your location' style={{padding:0}} editable={false} />

                </View>

                </View>
                <View style={styles.propertyTypes}>
                <View style={{flexDirection:'row', }}>
                <View style={{justifyContent:'center', paddingRight:5,paddingLeft:5}}>
                <Icon name='md-home' style={{color:'black', fontSize:20}} />
                </View>
                
                <Text style={{color:'black'}}>
                  Property Types
                </Text>
             
                </View>
                <View style={styles.HPCArea}>
                    <View style={{backgroundColor:this.state.homeBackground, padding:5, width:'30%',borderRadius:20,
                     alignItems:"center",justifyContent:'center'}}>
                     <TouchableOpacity>
                    <Text style={{color:this.state.HomeText,fontSize:12}}>
                      Homes
                    </Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:this.state.plotBackground, padding:5, width:'30%',borderRadius:20,
                     alignItems:"center", justifyContent:'center'}}>
                     <TouchableOpacity>
                    <Text style={{color:this.state.plotText,fontSize:10}}>
                     Plots
                    </Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:this.state.commercialBackground, padding:5, width:'30%',borderRadius:20,
                     alignItems:"center", justifyContent:'center'}}>
                     <TouchableOpacity>
                    <Text style={{color:this.state.commercialText, fontSize:10}}>
                        Commercial
                    </Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ alignItems:'center', padding:10}}>
                <TouchableOpacity onPress={()=>this.setState({houseBorder:'#0098DB'})}>
              <View style={[styles.ScrollHome, {   borderColor:this.state.houseBorder}]}>
              <Icon name="ios-home" style={{fontSize:30}} />
                                    </View>
                                    </TouchableOpacity>
                    <Text style={{color:'black', fontSize:10}}>
                   House
                    </Text>
                </View>
                <View style={{ alignItems:'center', padding:10}}>
              <View style={styles.ScrollHome}>
                <Icon name="ios-home" style={{fontSize:30}} />
                                    </View>
                    <Text style={{color:'black', fontSize:10}}>
                    Flat
                    </Text>
                </View>
                <View style={{ alignItems:'center', padding:10}}>
              <View style={styles.ScrollHome}>
                <Icon name="ios-home" style={{fontSize:30}} />
                                    </View>
                    <Text style={{color:'black', fontSize:10}}>
                        UpperPortion
                    </Text>
                </View>
                <View style={{ alignItems:'center', padding:10}}>
              <View style={styles.ScrollHome}>
                <Icon name="ios-home" style={{fontSize:30}} />
                                    </View>
                    <Text style={{color:'black', fontSize:10}}>
                        Lower portion
                    </Text>
                </View>
                <View style={{ alignItems:'center', padding:10}}>
              <View style={styles.ScrollHome}>
              <Icon name="ios-home" style={{fontSize:30}} />
                </View>
                    <Text style={{color:'black', fontSize:10}}>
                       Farm House
                    </Text>
                </View>
                <View style={{ alignItems:'center', padding:10}}>
              <View style={styles.ScrollHome}>
              <Icon name="ios-home" style={{fontSize:30}} />
                                    </View>
                    <Text style={{color:'black', fontSize:10}}>
                        Room
                    </Text>
                </View>
                <View style={{ alignItems:'center', padding:10}}>
              <View style={styles.ScrollHome}>
              <Icon name="ios-home" style={{fontSize:30}} />
                                    </View>
                    <Text style={{color:'black', fontSize:10}}>
                        Penthouse
                    </Text>
                </View>
                </ScrollView>
                </View>

                </View>
                <View style={styles.priceRange}>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:5}}>
                   <View style={{flexDirection:'row', }}>
                   <Icon name='md-locate' style={{color:'black', fontSize:20, paddingRight:3}} />
                   <View style={{justifyContent:'center'}}>
                    <Text style={{paddingRight:3, color:'black', fontSize:12}}>
                        Price Range 
                    </Text>
                    </View>
                    <View style={{justifyContent:'center'}}>
                    <Text style={{color:'black', fontSize:10}}>
                        (PKR)
                    </Text>
                    </View>
                    </View>
                    <TouchableOpacity onPress={()=>this._toggleModal()}>
                        <View>
                            <Text style={{color:'#0098DB', fontWeight:'bold', }}>
                                Change Currency
                                </Text>
                        </View>
                    </TouchableOpacity>
                    {/* model view */}
                    <Modal isVisible={this.state.isModalVisible}
                    onRequestClose={() =>this._toggleModal()}
                    >
          <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
            <View style={{backgroundColor:'white', height:'50%', width:'80%', borderRadius:10}}>
            <View style={{padding:7,flexDirection:'row', paddingTop:7, justifyContent:'space-between',}}>
            <View style={{justifyContent:'center', paddingLeft:10}}>
            <Text style={{color:'black', fontSize:14, fontWeight:'500'}}>
            Change Currency
            </Text>
            </View>

           <TouchableOpacity onPress={()=> this._toggleModal()}>
            <Icon name='ios-close' style={{fontSize:45, fontWeight:'bold',paddingRight:10}} />
            </TouchableOpacity>
            </View>
      {this.state.countries.map((list, index)=>{
          return(
            <TouchableOpacity key={index} onPress={() => { this.setState({ checked:list, isModalVisible:false }); }} >
            <View style={styles.checkbox}>
<Text style={{color:'black', fontSize:13}}>{list}</Text>
<RadioButton
color='#0098DB'
value={list}
status={this.state.checked === list ? 'checked' : 'unchecked'
}

/>

</View>
</TouchableOpacity>
          );
      })}

            </View>

          </View>
        </Modal>

        {/* model view end */}
       
       
                </View>
                 {/* INPUT RANGE SELECTION */}
                <View style={styles.inputRangeContainer}>
               
<View style={styles.inputRange}>
<TouchableOpacity onPress={()=>this._toggleModalPriceEnd()}>
<View style={{flexDirection:'row', justifyContent:'space-between', flex:1, width:'75%'}}>
<View style={{justifyContent:'center', flex:3}}>
<Text style={{color:'black', paddingLeft:5}}>{this.state.minAmount}</Text>
</View>
<View style={{flex:1}}>
<Icon name='ios-arrow-round-down' style={{fontSize:25, fontWeight:'bold', paddingRight:7 }} />
</View>
</View>
</TouchableOpacity>
</View>


<View>
<Text>to</Text>
</View>

<View style={styles.inputRange}>
<TouchableOpacity onPress={()=>this._toggleModalPriceStart()}>
<View style={{flexDirection:'row', justifyContent:'space-between', flex:1, width:'80%'}}>
<View style={{flex:2.3}}>
<Text style={{color:'black', paddingLeft:5, }}>{this.state.maxAmount}</Text>
</View>
<View style={{flex:1}}>
<Icon name='ios-arrow-round-down' style={{fontSize:25, fontWeight:'bold', paddingRight:7, }} />
</View>
</View>
</TouchableOpacity>

</View>
<Modal isVisible={this.state.isModalVisiblePStart}
                    onRequestClose={() =>this._toggleModalPriceStart()}
                    >
          <View style={{ height:HEIGHT, width:WIDTH, justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
            <View style={{backgroundColor:'white', height:HEIGHT/2, width:'80%', borderRadius:10}}>
            <View style={{paddingRight:7, paddingLeft:7,flexDirection:'row-reverse', paddingTop:3, justifyContent:'space-between',}}>
            

           <TouchableOpacity onPress={()=> this._toggleModalPriceStart()}>
            <Icon name='ios-close' style={{fontSize:40, fontWeight:'bold',paddingRight:10}} />
            </TouchableOpacity>
            </View>
                <View style={styles.modelMinMaxContainers}>
                    <Text style={{fontWeight:'bold', color:'black', paddingRight:70, fontSize:14}}>
                        MIN:
                    </Text>
                    <Text style={{fontWeight:'bold', color:'black', fontSize:14}}>
                        MAX:
                    </Text>
                    
                </View>
                <View style={styles.MinMaxRangeInputModel}>  
                    <TextInput placeholder={this.state.minAmount}
                    onChangeText={(text) => this.setState({minAmount:text})}
                    value={this.state.minAmount}
                    style={styles.InputModelRangeSelect} />
                    <TextInput placeholder={this.state.maxAmount}
                     onChangeText={(text) => this.setState({maxAmount:text})}
                     value={this.state.maxAmount}
                    style={[styles.InputModelRangeSelectany , {borderColor:this.state.MaxAreaInputBColor}]} />
                </View>
                <View style={styles.priceRangeSelectarea}>
                <View style={{flex:1, borderWidth:0.6, borderColor:'#DDDEE0',marginRight:5, borderRadius:5, alignItems:'center'}}>
                <ScrollView>
                    {this.state.inputRangeStart.map((list, index)=>{
                        return(
                <View key={list} style={[styles.AmountArea, {backgroundColor:this.state.minAmount === list ? this.state.AmountBackGround : 'white'}]}>
                <TouchableOpacity onPress={()=>this.selectStartRange(list)} disabled={this.state.MinAmountTouchableOpacity
                }>
                <Text style={{color:this.state.minAmount === list ? this.state.amountColor :'black', flex:1}}>
                   {list}
                </Text>
                </TouchableOpacity>
                </View>
                        );
                    })}
                </ScrollView>
                </View>
                <View style={{flex:1,borderWidth:0.6, borderColor:'#DDDEE0',borderRadius:5, alignItems:'center'}}>
                <ScrollView>
                    {this.state.inputMaxRange.map((list, index)=>{
                        return(
                <View key={list} style={[styles.AmountArea, {backgroundColor:this.state.maxAmount === list ? this.state.AmountBackGround : 'white'}]}>
                <TouchableOpacity onPress={()=>this.selectMaxRange(list)}>
                <Text style={{color:this.state.maxAmount === list ? this.state.amountColor :'black', flex:1}}>
                   {list}
                </Text>
                </TouchableOpacity>
                </View>
                        );
                    })}
                </ScrollView>
                </View>
                

                </View>
                <View style={{flex:1, flexDirection:'row',marginBottom:10}}>
              
                    <View style={{flex:1, borderColor:'#25AD30', marginRight:30, borderWidth:1, alignItems:'center', justifyContent:'center', marginLeft:30}}>
                    <TouchableOpacity onPress={()=>{this.resetAmount()}}>
                    <Text style={{color:'#25AD30', fontWeight:'bold'}}>
                    Reset
                    </Text>
                    </TouchableOpacity>
                    </View>
  
                 
                    <View style={{marginRight:30,flex:1, backgroundColor:'#25AD30', justifyContent:'center',alignItems:'center',}}>
                    <TouchableOpacity onPress={()=>this.AmountOk()}>
                    <Text style={{color:'white', fontWeight:'bold'}}>
                    Done
                    </Text>
                    </TouchableOpacity>
                    </View>
                    
                </View>
                

            </View>

          </View>
        </Modal>

</View>
                
                </View>
                <View style={styles.BedRoomsArea}>
                <View style={{flexDirection:'row', padding:7, paddingBottom:15}}>
                   <Icon name='md-bed' style={{color:'black', fontSize:18, paddingRight:3}} />
                   <View style={{justifyContent:'center'}}>
                    <Text style={{color:'black', fontSize:12}}>
                        Bedrooms
                    </Text>
                    </View>
                    </View>
                    <View style={
                        {
                            flexDirection:'row'
                        }
                    }>
                        <ScrollView horizontal={true}>
                       
                        <View style={{backgroundColor:'#0098DB',padding:8, borderRadius:12 }}>
                        <Text style={{color:'white'}}>Studio</Text>
                        </View>
                        {this.state.bedRooms.map((list,index)=>{
                            return(
                           
                                <TouchableOpacity key={index} onPress={()=> this.OnBedSelect(list)}>
                                <View  style={{backgroundColor:this.state.selectedBeds.includes(list) ? this.state.bedBackground:'#DDDEE0',
                                paddingLeft:15, paddingRight:15,
                                 borderRadius:15,alignItems:'center', marginLeft:3, justifyContent:'center', paddingTop:9, paddingBottom:9 }}>

                                
                                <Text style={{color:this.state.selectedBeds.includes(list) ? this.state.bedColors :'black', fontSize:12}}>{list}</Text>
                           
                                </View>
                                </TouchableOpacity>
                  
                            );
                        }
                            )}
                       
                        </ScrollView>
                    </View>
</View>

<View style={styles.priceRange}>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:5}}>
                   <View style={{flexDirection:'row', }}>
                   <Icon name='md-home' style={{color:'black', fontSize:20, paddingRight:3}} />
                   <View style={{justifyContent:'center'}}>
                    <Text style={{paddingRight:3, color:'black', fontSize:12}}>
                       Area Range
                    </Text>
                    </View>
                    <View style={{justifyContent:'center'}}>
                    <Text style={{color:'black', fontSize:10}}>
                        (sq.ft.)
                    </Text>
                    </View>
                    </View>
                    <TouchableOpacity onPress={()=>this._toggleModalAreaUnit()}>
                        <View>
                            <Text style={{color:'#0098DB', fontWeight:'bold', }}>
                                Change Area Unit
                                </Text>
                        </View>
                    </TouchableOpacity>
                    {/* model view */}
                    <Modal isVisible={this.state.isModalVisibleChangeAreaUnit}
                    onRequestClose={() =>this._toggleModalAreaUnit()}
                    >
          <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
            <View style={{backgroundColor:'white', height:'50%', width:'80%', borderRadius:10}}>
            <View style={{padding:7,flexDirection:'row', paddingTop:7, justifyContent:'space-between',}}>
            <View style={{justifyContent:'center', paddingLeft:10}}>
            <Text style={{color:'black', fontSize:14, fontWeight:'500'}}>
            Change Area Unit
            </Text>
            </View>

           <TouchableOpacity onPress={()=> this._toggleModalAreaUnit()}>
            <Icon name='ios-close' style={{fontSize:45, fontWeight:'bold',paddingRight:10}} />
            </TouchableOpacity>
            </View>
      {this.state.AreaUnit.map((list, index)=>{
          return(
            <TouchableOpacity key={index} onPress={() => { this.setState({ AreaUnitCheck:list, isModalVisibleChangeAreaUnit:false });  }} >
            <View style={styles.checkbox}>
            <View style={{justifyContent:'center'}}>
<Text style={{color:'black', fontSize:15}}>{list}</Text>
</View>
<RadioButton
color='#0098DB'
value={list}
status={this.state.AreaUnitCheck === list ? 'checked' : 'unchecked'
}

/>

</View>
</TouchableOpacity>
          );
      })}

            </View>

          </View>
        </Modal>

        {/* model view end */}
       
       
                </View>
                 {/* INPUT RANGE SELECTION */}
                <View style={styles.inputRangeContainer}>

<View style={styles.inputRange}>
<TouchableOpacity onPress={()=>this._toggleModalUnitStart()}>
<View style={{flexDirection:'row', justifyContent:'space-between', flex:1, width:'75%'}}>
<Text style={{color:'black', paddingLeft:5}}>{this.state.minUnitArea}</Text>

<Icon name='ios-arrow-round-down' style={{fontSize:25, fontWeight:'bold', paddingRight:7 }} />
</View>
</TouchableOpacity>

</View>


<View>
<Text>to</Text>
</View>

<View style={styles.inputRange}>
<TouchableOpacity onPress={()=>this._toggleModalUnitEnd()}>
<View style={{flexDirection:'row', justifyContent:'space-between', flex:1, width:'80%'}}>
<Text style={{color:'black', paddingLeft:5}}>{this.state.maxUnitArea}</Text>

<Icon name='ios-arrow-round-down' style={{fontSize:25, fontWeight:'bold', paddingRight:7 }} />

</View>
</TouchableOpacity>

</View>
<Modal isVisible={this.state.isModalVisibleUnitStart}
                    onRequestClose={() =>this._toggleModalUnitStart()}
                    >
          <View style={{ height:HEIGHT, width:WIDTH, justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
            <View style={{backgroundColor:'white', height:HEIGHT/2, width:'80%', borderRadius:10}}>
            <View style={{paddingRight:7, paddingLeft:7,flexDirection:'row-reverse', paddingTop:3, justifyContent:'space-between',}}>
            

           <TouchableOpacity onPress={()=> this._toggleModalUnitStart()}>
            <Icon name='ios-close' style={{fontSize:40, fontWeight:'bold',paddingRight:10}} />
            </TouchableOpacity>
            </View>
                <View style={styles.modelMinMaxContainers}>
                    <Text style={{fontWeight:'bold', color:'black', paddingRight:70, fontSize:14}}>
                        MIN:
                    </Text>
                    <Text style={{fontWeight:'bold', color:'black', fontSize:14}}>
                        MAX:
                    </Text>
                    
                </View>
                <View style={styles.MinMaxRangeInputModel}>  
                <TextInput
  
    value={this.state.minUnitAreaPlaceHolder.toString()}
    style={styles.InputModelRangeSelect}
/>
                    <TextInput value={this.state.maxUnitAreaPlaceHolder.toString()} style={[styles.InputModelRangeSelect, {borderColor:this.state.MaxAreaInputBColor}]} />
                </View>
                <View style={styles.priceRangeSelectarea}>
                <View style={{flex:1, borderWidth:0.6, borderColor:'#DDDEE0',marginRight:5, borderRadius:5, alignItems:'center'}}>
                <ScrollView>
                    {this.state.unitAreaRangeStartMarla.map((list, index)=>{
                        return(
                <View key={index} style={[styles.AmountArea, {backgroundColor:this.state.minUnitArea === list ? this.state.minUnitAreaBackground : 'white'}]}>
                <TouchableOpacity onPress={()=>this.selectMinUnitArea(list)} disabled={this.state.MinUnitAreaTouchableOpacity
                }>
                <Text style={{color:this.state.minUnitArea === list ? this.state.minUnitAreaColor :'black', flex:1}}>
                   {list}
                </Text>
                </TouchableOpacity>
                </View>
                        );
                    })}
                </ScrollView>
                </View>
                <View style={{flex:1,borderWidth:0.6, borderColor:'#DDDEE0',borderRadius:5, alignItems:'center'}}>
                <ScrollView>
                    {this.state.unitAreaRangeEndMarla.map((list, index)=>{
                        return(
                <View key={index} style={[styles.AmountArea, {backgroundColor:this.state.maxUnitArea === list ? this.state.MaxnunitAreaBackground : 'white'}]}>
                <TouchableOpacity onPress={()=>this.selectMaxUnitArea(list)}>
                <Text style={{color:this.state.maxUnitArea === list ? this.state.MaxunitAreaText :'black', flex:1}}>
                   {list}
                </Text>
                </TouchableOpacity>

                </View>
                        );
                    })}
                </ScrollView>
                </View>
                

                </View>
                <View style={{flex:1, flexDirection:'row',marginBottom:10}}>
              
                    <View style={{flex:1, borderColor:'#25AD30', marginRight:30, borderWidth:1, alignItems:'center', justifyContent:'center', marginLeft:30}}>
                    <TouchableOpacity onPress={()=>{this.resetUnitArea()}}>
                    <Text style={{color:'#25AD30', fontWeight:'bold'}}>
                    Reset
                    </Text>
                    </TouchableOpacity>
                    </View>
  
                 
                    <View style={{marginRight:30,flex:1, backgroundColor:'#25AD30', justifyContent:'center',alignItems:'center',}}>
                    <TouchableOpacity onPress={()=>this.UniAreaOk()}>
                    <Text style={{color:'white', fontWeight:'bold'}}>
                    Done
                    </Text>

                    </TouchableOpacity>
                    </View>
                    
                </View>
                

            </View>

          </View>
        </Modal>

</View>
                
                </View>
                <View style={styles.BedRoomsArea}>
                <View style={{flexDirection:'row', padding:7, paddingBottom:15}}>
                   <Icon name='md-bed' style={{color:'black', fontSize:18, paddingRight:3}} />
                   <View style={{justifyContent:'center'}}>
                    <Text style={{color:'black', fontSize:12}}>
                        Bathrooms
                    </Text>
                    </View>
                    </View>
                    <View style={
                        {
                            flexDirection:'row'
                        }
                    }>
                        <ScrollView horizontal={true}>

                        {this.state.Bathrooms.map((list,index)=>{
                            return(
                           
                                <TouchableOpacity key={index} onPress={()=> this.OnBathSelect(list)}>
                                <View  style={{backgroundColor:this.state.selectedBath.includes(list) ? this.state.bathBackground:'#DDDEE0',
                                paddingLeft:15, paddingRight:15,
                                 borderRadius:15,alignItems:'center', marginLeft:3, justifyContent:'center', paddingTop:9, paddingBottom:9 }}>

                                
                                <Text style={{color:this.state.selectedBath.includes(list) ? this.state.bathColors :'black', fontSize:12}}>{list}</Text>
                           
                                </View>
                                </TouchableOpacity>
                  
                            );
                        }
                            )}
                       
                        </ScrollView>
                    </View>
</View>

                    {/* this is where vertical scroll end */}
                </View>
                </ScrollView>
                <View>
                
                </View>
                </Animatable.View>
                <View style={{flex:0.4, flexDirection:'row', margin:8, marginTop:10}}>
                  
                <View style={{flex:1, borderColor:'#25AD30', borderWidth:1, alignItems:'center', justifyContent:'center', marginRight:10}}>
                    <TouchableOpacity>
                    <Text style={{color:'#25AD30', fontWeight:'bold'}}>
                    Reset   
                    </Text>
                    </TouchableOpacity>
                    </View>
  
                 
                    <View style={{flex:3, backgroundColor:'#25AD30', justifyContent:'center',alignItems:'center',}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('searchResult')}>
                    <Text style={{color:'white', fontWeight:'bold'}}>
                          Search
                    </Text>
                    </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    customNavSearch:{
    justifyContent:'space-between',
    alignContent:'space-between',
    flexDirection:'row',
    padding:15,
    backgroundColor:'#25AD30',
    marginTop: HEIGHT >= 812 ? 30 : 0
    },
    BRNarea:{
        justifyContent:'space-between',
        alignContent:'space-between',
        flexDirection:'row',
        padding:10,
        backgroundColor:'white',
        paddingTop:15,
        paddingBottom:15
    },
    Searchcontainer:{
        backgroundColor:'#DDDEE0',
flex:4
    },
    searchLocationArea:{
        padding:10,
        backgroundColor:'white',
        marginTop:7
    },
    propertyTypes:{
        padding:10,
        backgroundColor:'white',
        marginTop:7
    },
    HPCArea:{
        justifyContent:'space-between',
        alignContent:'space-between',
        flexDirection:'row',
        padding:10,
        backgroundColor:'white',
        paddingTop:15,
        paddingBottom:15
    },
    ScrollHome:{
        height:60, 
        width:60,
         borderRadius:30, 
         justifyContent:'center',
          alignItems:'center',
        borderWidth:0.8,
       
    },
    priceRange:{
        padding:10,
        backgroundColor:'white',
        marginTop:7,
        paddingBottom:16
    },
    checkbox:{flexDirection:'row',
     justifyContent:'space-between',
      paddingRight:10, 
      paddingLeft:10,
      paddingTop:5
    },
inputRangeContainer:{
    flexDirection:'row',width:'100%',
     padding:8, paddingTop:10, justifyContent:'space-between'
},
inputRange:{
    flexDirection:'row', 
    justifyContent:'space-between',
     width:'40%', 
     borderWidth:0.6,
      borderColor:'grey', 
    padding:3, borderRadius:20, backgroundColor:'#DDDEE0'
},
modelMinMaxContainers:{flexDirection:'row', alignItems:'center', justifyContent:'center' },
MinMaxRangeInputModel:{
    flexDirection:'row', justifyContent:'space-between',
    paddingLeft:8,
    paddingRight:8,

},
InputModelRangeSelect:{
    flex:1, padding: 0, justifyContent:'center',
     borderWidth:0.6, borderColor:'#DDDEE0',
     borderRadius:12, marginRight: 15 ,
     paddingLeft:5
},
InputModelRangeSelectany:{
    flex:1, padding: 0, justifyContent:'center',
    borderWidth:0.6,
    borderRadius:12, 
    paddingLeft:5
},
priceRangeSelectarea:{
    marginTop:20,
    flex:4,flexDirection:'row', marginRight:10,
     marginLeft:10, borderTopWidth:0.6,
      borderTopColor:'#DDDEE0',borderRadius:5,
      paddingBottom:10
    },
    AmountArea:{padding:10,
    
          borderRadius:23,
           height:40,
            width:80,
             alignItems:'center'
            },
            BedRoomsArea:{
                marginTop:7,
                backgroundColor:'white',
                padding:7
            }

   
})
