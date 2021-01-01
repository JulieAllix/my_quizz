import React, {useState} from 'react';
import { 
    View,   
    StyleSheet
} from 'react-native';

import CustomInput from '../components/UI/CustomInput';
import CustomButton from '../components/UI/CustomButton';

interface Props {
    navigation: any
}

const CreateQuestionScreen: React.FC<Props> = (props) => {
    const [questionText, setQuestionText] = useState<string>('');
    const [answerText, setAnswerText] = useState<string>('');

    const addNewQuestion = () => {
        props.navigation.navigate(
            'New question', 
        );
    };
    const validateQuestion = () => {
        props.navigation.navigate(
            'Themes', 
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