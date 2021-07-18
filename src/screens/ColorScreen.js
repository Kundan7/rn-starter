import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, FlatList} from 'react-native';



const ColorScreen = () => {

    const[colors, setColors] = useState([]);

    return <View>
        <Button title="Add a color" onPress = { ()=> {
            setColors([...colors,randomRgb()]);
        }}>

        </Button>
        
        <FlatList
            keyExtractor = {item => item }
            data = {colors}
            renderItem = { ({item}) => {
                return <View style={{ height:100, weidth:100, backgroundColor: item }}></View>
            }}
        ></FlatList>
    </View>;

}

const randomRgb = () => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    const co = `rgb(${red},${green},${blue})`;
    console.log(co);
    return co;
};

const styles = StyleSheet.create({

});

export default ColorScreen;

