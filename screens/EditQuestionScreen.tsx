import React, {useState} from 'react';
import { 
    View,  
    StyleSheet,
    Text
} from 'react-native';

import CustomInput from '../components/UI/CustomInput';
import CustomButton from '../components/UI/CustomButton';

interface Props {
    navigation: any,
}

const EditQuestionScreen: React.FC<Props> = (props) => {
    const [questionText, setQuestionText] = useState<string>('');
    const [answerText, setAnswerText] = useState<string>('');

    const validate = () => {
        props.navigation.navigate(
            'Edit theme', 
        );
    };
    const deleteQuestion = () => {
        props.navigation.navigate(
            'Edit theme', 
        );
    };

    return (
        <View style={styles.screen}>
            <View style={styles.inputsWrapper}>
                <CustomInput 
                    label={'Question'} 
                    value={questionText}
                    setValue={setQuestionText}
                />
                <CustomInput 
                    label={'Answer'} 
                    value={answerText}
                    setValue={setAnswerText}
                />
            </View>
            <View style={styles.buttonsWrapper}>
                <CustomButton color={'accent'} onPress={deleteQuestion}>Delete question</CustomButton>
                <CustomButton color={'primary'} onPress={validate}>Validate</CustomButton>
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

export default EditQuestionScreen;