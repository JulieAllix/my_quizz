import React, {useState} from 'react';
import { 
    View, 
    Text,  
    StyleSheet
} from 'react-native';

import {THEME} from '../data/dummy-data.js';

import Instructions from '../components/UI/Instructions';
import CustomButton from '../components/UI/CustomButton';
import QuestionCard from '../components/QuestionCard';

interface Props {
    navigation: any,
    route: any
}

const QuizzScreen: React.FC<Props> = ({ route, navigation }) => {
    const {themeId} = route.params;
    const thmId = JSON.parse(JSON.stringify(themeId));
    const selectedTheme = THEME.find((theme: any) => theme.id == thmId);

    // To set the header title dynamically
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedTheme.name,
        });
    });

    const [questionStatus, setQuestionStatus] = useState<'question'|'answer'>('question');

    const handlePress = (value: any) => {
        setQuestionStatus(value)
    }
    const cancel = () => {
        props.navigation.navigate(
            'Paramètres', 
        );
    };
    const next = () => {

    };

    return (
        <View style={styles.screen}>
            <Instructions>Click on the card to see the answer</Instructions>
            {questionStatus === 'question' &&
                <QuestionCard color={'primary'} onPress={() => handlePress('answer')}>Random question</QuestionCard>
            }
            {questionStatus === 'answer' &&
                <QuestionCard color={'accent'} onPress={() => handlePress('question')}>Answer to the question</QuestionCard>
            }
            <View style={styles.buttonsWrapper}>
                <CustomButton color={'accent'} onPress={cancel}>Cancel</CustomButton>
                <CustomButton color={'primary'} onPress={next}>Next</CustomButton>
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
    buttonsWrapper: {},
});

export default QuizzScreen;