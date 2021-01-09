import React, {useState} from 'react';
import { 
    View,  
    StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux';

import {THEMES} from '../data/dummy-data.js';

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
    const selectedTheme = THEMES.find((theme: any) => theme.id == thmId);
    const currentQuizz = useSelector(state => state.quizz.currentQuizz);

    // To set the header title dynamically
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedTheme.name,
        });
    });

    const [questionStatus, setQuestionStatus] = useState<'question'|'answer'>('question');
    const [index, setIndex] = useState<number>(0);

    const handlePress = (value: any) => {
        setQuestionStatus(value)
    }
    const cancel = () => {
        navigation.navigate(
            'Paramètres', 
        );
    };
    const next = () => {
        console.log('index', index);
        console.log('currentQuizz.length', currentQuizz.length);
        if(index < currentQuizz.length - 1) {
            setIndex(index + 1);
        } else {
            navigation.navigate(
                'Paramètres', 
            );
        }
        
    };
    //console.log('currentQuizz screen', currentQuizz);
    return (
        <View style={styles.screen}>
            <Instructions>Click on the card to see the answer</Instructions>
            {questionStatus === 'question' &&
                <QuestionCard color={'primary'} onPress={() => handlePress('answer')}>{currentQuizz[index].question}</QuestionCard>
            }
            {questionStatus === 'answer' &&
                <QuestionCard color={'accent'} onPress={() => handlePress('question')}>{currentQuizz[index].answer}</QuestionCard>
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