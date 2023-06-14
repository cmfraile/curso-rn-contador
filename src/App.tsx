import React from 'react';
import { View , Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey'
  },
  text:{
    fontSize:30
  }
});

const App = () =>
  <View style={styles.container}>
    <Text style={styles.text} >Hola mundo</Text>
  </View>

export default App