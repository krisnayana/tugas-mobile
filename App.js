/**
 * Resika
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungLuasSegitiga extends Component {
  constructor(props){
    super(props)
    this.state = {
      alas:0,
      tinggi:0,
      lebar:0,
      volume:0
    };
  }

  render() {
    return (  
      <View style = {{flex:1,backgroundColor:'red'}}>

        <View style={{backgroundColor:'#000'}}>
           <Text style = {{padding: 20, fontSize: 25, color: 'white', textAlign:'center'}} >
            {"\n"} Menghitung Volume Balok
          </Text>
         </View>
        
        <View style={{margin:20,padding: 10, backgroundColor:'white'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan panjang"
              onChangeText={(panjang)=>this.setState({panjang})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  lebar"
              onChangeText={(lebar)=>this.setState({lebar})}
              keyboardType = 'numeric'
            />

            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
            />
            
              <Button 
                onPress={()=>this.setState({
                  volume: (this.state.panjang*this.state.lebar*this.state.tinggi)
                })}
                title="Hitung"
                accessibilityLabel="Klik untuk menghitung"
              />
       </View>

        <View style={{margin:20, backgroundColor:'white'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              Panjang =  {this.state.panjang} {"\n"}
              Lebar =  {this.state.lebar} {"\n"}
              Tinggi =  {this.state.tinggi} {"\n"}
              Volume = {this.state.volume}
          </Text>
         </View>
      
   </View> 

    );
  }

}




