import React, {useState} from 'react';
import { 
    View,  
    StyleSheet,
    Text
} from 'react-native';

import CustomInput from '../components/UI/CustomInput';
import CustomButton from '../components/UI/CustomButton';
import QuestionCard from '../components/QuestionCard';

interface Props {
    navigation: any,
}

const EditThemeScreen: React.FC<Props> = (props) => {
    const [inputText, setInputText] = useState<string>('');

    const addNewQuestion = () => {
        props.navigation.navigate(
            'New question', 
        );
    };
    const deleteTheme = () => {

    };

    return (
        <View style={styles.screen}>
            <CustomInput 
                label={'Theme name'} 
                value={inputText}
                setValue={setInputText}
                keyboardType={'default'}
            />
            <View style={styles.questionsWrapper}>
                <Text style={styles.questionsTitle}>Questions</Text>
                <QuestionCard color={'primary'}>Random question</QuestionCard>
            </View>
            <View style={styles.buttonsWrapper}>
                <CustomButton color={'accent'} onPress={deleteTheme}>Delete theme</CustomButton>
                <CustomButton color={'primary'} onPress={addNewQuestion}>Add a new question</CustomButton>
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
    questionsWrapper: {
        marginBottom: 10,
    },
    questionsTitle: {
        fontFamily: 'openSans',
        fontSize: 16,
        marginBottom: 10,
    },
    inputsWrapper: {},
    buttonsWrapper: {}
});

export default EditThemeScreen;