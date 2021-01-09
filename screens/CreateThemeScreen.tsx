import React, {useState} from 'react';
import { 
    View, 
    Text,  
    StyleSheet
} from 'react-native';

import CustomInput from '../components/UI/CustomInput';
import CustomButton from '../components/UI/CustomButton';

interface Props {
    navigation: any
}

const CreateThemeScreen: React.FC<Props> = (props) => {
    const [inputText, setInputText] = useState<string>('');
    const validateNewTheme = () => {
        props.navigation.navigate(
            'New question', 
        );
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