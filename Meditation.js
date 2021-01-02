/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


function App() {
  return (
    <View>
       <View style={{flexDirection: "row"}}>
        <Text style={{fontFamily: "Cochin",fontWeight:'bold',fontSize:25, padding:5, marginTop:45, marginLeft:20 }}>Meditations</Text>
        <Text style={{fontFamily: "Cochin",fontWeight:'bold', fontSize:25 ,marginTop:45, padding:5, marginLeft:5}}>Activities</Text>
       </View>

       <View style={{flexDirection: "row"}}>
       <View style={{ width:20 }}></View>
       <View>
        <Text style={{fontFamily: "Cochin",fontWeight:'bold', fontSize:15 ,marginTop:0, padding:5}}>Favourite</Text>
        <View style={{ height:2, width:'100%', backgroundColor:'orange' }}></View>
        </View>
        <Text style={{fontFamily: "Cochin",fontWeight:'bold', fontSize:15 ,marginTop:0, padding:5,  marginLeft:10}}>Playlist</Text>
        <Text style={{fontFamily: "Cochin",fontWeight:'bold', fontSize:15 ,marginTop:0, padding:5,  marginLeft:10}}>Courses</Text>
        </View>

       <View style={{flexDirection:"row", marginTop:30}}>
        <View style={{backgroundColor:'orange',  width:200, height:70, marginLeft:20, borderTopLeftRadius:30, borderBottomLeftRadius:30}}>
         <Text style={{marginTop:9, paddingLeft:30, fontWeight:'bold', color:'black'}}>૦ Focus</Text>
         <Text style={{marginTop:0,paddingLeft:30,fontWeight:'bold', color:'white'}}>Workplace Focus</Text>
         <Text style={{paddingLeft:30, color:'white',fontSize:10}}>Guided meditation  ● 15 mins</Text>
        </View>

        <View style={{  width:160, height:70, marginLeft:0, borderTopLeftRadius:30, borderBottomLeftRadius:30}}>
         <Image style={{ width:160, height:70, marginLeft:0, borderTopRightRadius:30, borderBottomRightRadius:30}}
         source={require('./image/water.jpg')}
         />
        </View>
       </View>

       <View style={{flexDirection:"row", marginTop:5}}>

        <View style={{backgroundColor:'darkcyan', width:200, height:70, marginLeft:20, borderTopLeftRadius:30, borderBottomLeftRadius:30}}>
         <Text style={{marginTop:9, paddingLeft:30, fontWeight:'bold', color:'black'}}>૦ Focus</Text>
         <Text style={{marginTop:0,paddingLeft:30,fontWeight:'bold', color:'black'}}>Exam Focus</Text>
         <Text style={{marginLeft:30, color:'black',fontSize:10}}>Guided meditation  ● 15 mins</Text>
        </View>

        <View style={{ marginTop:0, width:160, height:70, marginLeft:0, borderTopLeftRadius:30, borderBottomLeftRadius:30}}>
         <Image style={{ marginTop:0, width:160, height:70, marginLeft:0, borderTopRightRadius:30, borderBottomRightRadius:30}}
         source={require('./image/stone.jpg')}
         />
        </View>

       </View>

       <View style={{flexDirection:"row", marginTop:5}}>

        <View style={{backgroundColor:'lightblue', width:200, height:70, marginLeft:20, borderTopLeftRadius:30, borderBottomLeftRadius:30}}>
         <Text style={{marginTop:9, paddingLeft:30, fontWeight:'bold', color:'black'}}>૦ Focus</Text>
         <Text style={{marginTop:0,paddingLeft:30,fontWeight:'bold', color:'black'}}>Workplace Focus</Text>
         <Text style={{marginLeft:30, color:'black',fontSize:10}}>Guided meditation  ● 15 mins</Text>
        </View>

        <View style={{ marginTop:0, width:160, height:70, marginLeft:0, borderTopLeftRadius:30, borderBottomLeftRadius:30}}>
         <Image style={{ marginTop:0, width:160, height:70, marginLeft:0, borderTopRightRadius:30, borderBottomRightRadius:30}}
         source={require('./image/mountain.jpg')}
         />
        </View>

       </View>

       <View style={{marginTop:50, flexDirection: 'column', width:'100%', justifyContent: 'center', alignItems: 'center'}}>
         <Text style={{ textAlign: 'center', fontSize:25, fontWeight:'bold'}}>Haven't got</Text>
         <Text style={{ textAlign: 'center', fontSize:25, fontWeight:'bold'}}>anything you like?</Text>
         <Text style={{ textAlign: 'center', fontSize:14}}>There is always something for you wherever,</Text>
         <Text style={{ textAlign: 'center', fontSize:14}}>whenever, and whatever situation you like.</Text>
       </View>



   </View>
  );
};





export default App;
