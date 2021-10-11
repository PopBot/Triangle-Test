import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Dimensions, Text, View} from 'react-native';


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");;


type Props = {};
export default class MyApp extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
     
       <View style={styles.triangle}>
        
       </View>
       <Text style={styles.whiteText}>TFT</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#2A2734',
  },
  whiteText: {
    position: "absolute",
    fontSize: "40px",
    textAlign: "center",
    color: "white"
  },
  triangle: {
    flex: 1,     
    justifyContent: "center",
    alignItems: "center",        
    height: 0,
    width: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: screen.width / 2,
    borderRightWidth: 0,
    borderBottomWidth: screen.height,
    borderLeftColor: "transparent",
    borderBottomColor: "red",
    borderRightColor: "transparent"  
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#B0B0B0',
    marginBottom: 5,
  },
});

// You must register the main component
// with the same name as the project
AppRegistry.registerComponent(
  'Triangle Test', () => MyApp
);
