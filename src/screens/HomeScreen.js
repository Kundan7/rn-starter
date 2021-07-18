import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return <View>
      <Text style={styles.text}>Hi There !</Text>
      <Button 
        onPress = { () => {
            props.navigation.navigate('Components');
        }}
        title="Go to the Components Demo">
      </Button>
      <Button
        onPress = {() => { 
            props.navigation.navigate('List');
        }}
        title = "Go to List Demo"
      >
      </Button>
      <Button 
        onPress = { () => {
            props.navigation.navigate('Image');
        }}
        title="Go to the Image Screen">
      </Button>
      <Button 
        onPress = { () => {
            props.navigation.navigate('Counter');
        }}
        title="Go to the Counter Screen">
      </Button>
      <Button 
        onPress = { () => {
            props.navigation.navigate('Color');
        }}
        title="Go to the Color Screen">
      </Button>
      <Button 
        onPress = { () => {
            props.navigation.navigate('Square');
        }}
        title="Go to the Square Screen">
      </Button>
    </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
