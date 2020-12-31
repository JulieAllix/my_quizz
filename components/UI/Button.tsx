import React from 'react';
import {  
    Text, 
    TouchableOpacity, 
    StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../../constants/Colors';


const MyButton = props => {

    let orientation = useSelector(state => state.screen.orientation);
    let screenWidth = useSelector(state => state.screen.availableDeviceWidth);

    return (
        <TouchableOpacity style={{
            ...styles.button, 
            backgroundColor: props.color === 'primary' ? Colors.primaryColor : Colors.accentColor,
            width: orientation === 'vertical' ? '100%' : screenWidth / 4.5,
            padding: orientation === 'vertical' ? 10 : 5,
            }} onPress={props.onPress}>
            <Text style={{
                ...styles.text,
                fontSize: orientation === 'vertical' ? 18 : 16,
            }}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        marginBottom: 10
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'openSans',
        fontSize: 20
    },
});

export default MyButton;