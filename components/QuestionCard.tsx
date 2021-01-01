import React from 'react';
import {  
    Text, 
    View, 
    StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../constants/Colors';

interface Props {
    color: string,
}

const QuestionCard: React.FC<Props> = (props) => {

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
        width: '100%',
        height: 300,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.45,
        shadowOffset: { width: 1, height: 5 },
        shadowRadius: 3,
    },
    themeCardText: {
        fontSize: 16,
        fontFamily: 'openSans-b'
    }
});

export default QuestionCard;