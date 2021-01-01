import React from 'react';
import {  
    Text, 
    View, 
    StyleSheet,
    TextInput
} from 'react-native';

import Colors from '../../constants/Colors';

interface Props {
    label: string,
    value: string,
    setValue: (value: string) => void
}

const CustomInput: React.FC<Props> = (props) => {

    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.labelText}>{props.label}</Text>
            <TextInput 
                style={styles.input}
                value={props.value}
                onChangeText={(value) => props.setValue(value)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {

    },
    labelText: {
        fontFamily: 'openSans',
        fontSize: 16,
    },
    input: {
        borderColor: Colors.lightBorder, 
        borderWidth: 1, 
        padding: 10,
        marginVertical: 20,
        marginTop: 10
    },
});

export default CustomInput;