import React from 'react';
import {  
    Text, 
    View, 
    StyleSheet,
} from 'react-native';

interface Props {
}

const Instructions: React.FC<Props> = (props) => {

    return (
        <View style={styles.textWrapper}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textWrapper: {
        marginBottom: 25,
    },
    text: {
        fontSize: 18,
        fontFamily: 'openSans',
        textAlign: 'center'
    },
});

export default Instructions;