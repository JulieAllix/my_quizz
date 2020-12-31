import React from 'react';
import {  
    Text, 
    View, 
    StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../constants/Colors';


const ThemeCard = props => {

    let orientation = useSelector(state => state.screen.orientation);
    let screenWidth = useSelector(state => state.screen.availableDeviceWidth);

    return (
        <View style={{
            ...styles.themeCardWrapper,
            borderColor: props.color === 'primary' ? '#DCDCDC': Colors.accentColor,
            backgroundColor: props.color === 'primary' ? Colors.lightBackground : Colors.accentColor
            }}>
            <Text style={{
                ...styles.themeCardText,
                color: props.color === 'primary' ? Colors.accentColor : 'white'
                }}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    themeCardWrapper: {
        width: '47%',
        height: 125,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 22,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.45,
        shadowOffset: { width: 3, height: 5 },
        shadowRadius: 4,
    },
    themeCardText: {
        fontSize: 16,
        fontFamily: 'openSans-b'
    }
});

export default ThemeCard;