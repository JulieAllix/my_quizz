import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { 
    View,   
    StyleSheet
} from 'react-native';

import CustomInput from '../components/UI/CustomInput';
import CustomButton from '../components/UI/CustomButton';

import { createQuestion } from '../store/actions/quizz';

interface Props {
    navigation: any,
    route: any
}

const CreateQuestionScreen: React.FC<Props> = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const {themeId} = route.params;

    const [questionText, setQuestionText] = useState<string>('');
    const [answerText, setAnswerText] = useState<string>('');

    const addNewQuestion = () => {
        dispatch(createQuestion(themeId, questionText, answerText));
        setTimeout(() => {
            navigation.navigate(
                'New question', 
            );
        }, 500)
    };
    const validateQuestion = () => {
        dispatch(createQuestion(themeId, questionText, answerText));
        setTimeout(() => {
            navigation.navigate(
                'Themes', 
            );
        }, 500)
    };
    return (
        <View style={styles.screen}>
            <View style={styles.inputsWrapper}>
                <CustomInput 
                    label={'Question'} 
                    value={questionText}
                    setValue={setQuestionText}
                    keyboardType={'default'}
                />
                <CustomInput 
                    label={'Answer'} 
                    value={answerText}
                    setValue={setAnswerText}
                    keyboardType={'default'}
                />
            </View>
            <View style={styles.buttonsWrapper}>
                <CustomButton color={'accent'} onPress={addNewQuestion}>Add another question</CustomButton>
                <CustomButton color={'primary'} onPress={validateQuestion}>Validate</CustomButton>
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
    inputsWrapper: {},
    buttonsWrapper: {}
});

export default CreateQuestionScreen;