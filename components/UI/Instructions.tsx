import React from 'react';
import {  
    Text, 
    View, 
    StyleSheet,
} from 'react-native';
import Colors from '../../constants/Colors'
interface Props {
    type: 'regular'|'error'
}

const Instructions: React.FC<Props> = (props) => {

    return (
        <View style={styles.textWrapper}>
            <Text style={{
                ...styles.text, 
                color: props.type === 'error' ? Colors.accentColor : 'black',
                fontFamily: props.type === 'error' ? 'openSans-b' : 'openSans',
                }}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textWrapper: {
        marginBottom: 25,
    },
    text: {
        fontSize: 16,
        fontFamily: 'openSans',
        textAlign: 'center'
    },
});

export default Instructions;