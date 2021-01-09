import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { 
    View,   
    StyleSheet
} from 'react-native';
import {v4 as uuidv4} from 'uuid';

import CustomInput from '../components/UI/CustomInput';
import CustomButton from '../components/UI/CustomButton';

import { createTheme } from '../store/actions/quizz';

interface Props {
    navigation: any
}

const CreateThemeScreen: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState<string>('');

    const validateNewTheme = () => {
        const newUid = uuidv4();
        dispatch(createTheme(inputText, newUid));
        setTimeout(() => {
            props.navigation.navigate(
                'New question', 
                {themeId: newUid}
            );
        }, 500)
    }
    const cancel = () => {
        props.navigation.navigate(
            'Themes', 
        );
    };

    return (
        <View style={styles.screen}>
            <CustomInput 
                label={'Theme name'} 
                value={inputText}
                setValue={setInputText}
                keyboardType={'default'}
            />
            <View style={styles.buttonsWrapper}>
                <CustomButton color={'accent'} onPress={cancel}>Cancel</CustomButton>
                <CustomButton color={'primary'} onPress={validateNewTheme}>Create</CustomButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 25,
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
    },
    buttonsWrapper: {

    }
});

export default CreateThemeScreen;