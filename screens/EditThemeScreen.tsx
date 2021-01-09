import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { 
    View,  
    StyleSheet,
    Text
} from 'react-native';

import CustomInput from '../components/UI/CustomInput';
import CustomButton from '../components/UI/CustomButton';
import QuestionCard from '../components/QuestionCard';

interface Props {
    route: any,
    navigation: any,
}

const EditThemeScreen: React.FC<Props> = ({ route, navigation }) => {
    const {themeId} = route.params;
    const thmId = JSON.parse(JSON.stringify(themeId));
    const [inputText, setInputText] = useState<string>('');
    const themes = useSelector(state => state.quizz.themes);
    const selectedTheme = themes.find((theme: any) => theme.id == thmId);

    // To set the header title dynamically
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Edit : ' + selectedTheme.name,
        });
    });

    const addNewQuestion = () => {
        navigation.navigate(
            'New question', 
            {themeId: thmId}
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