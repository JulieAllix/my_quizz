import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { 
    View,  
    StyleSheet,
    FlatList
} from 'react-native';

import CustomInput from '../components/UI/CustomInput';
import Instructions from '../components/UI/Instructions';
import ThemeCard from '../components/ThemeCard';

import {THEMES} from "../data/dummy-data.js";
import {QUESTIONS} from "../data/dummy-data.js";
import { createQuizz } from '../store/actions/quizz';

interface Props {
    navigation: any
}

const ParamsScreen: React.FC<Props> = (props) => {
    const dispatch = useDispatch();

    const [inputText, setInputText] = useState<number|null>(null);
    const [instructionsText, setInstructionsText] = useState<'regular'|'error'>('regular');

    const handlePress = (themeId: string) => {
        if (inputText === null || inputText == 0) {
            setInstructionsText('error');
            setTimeout(() => {
                setInstructionsText('regular')
            }, 2000)
        } else {
            dispatch(createQuizz(themeId, inputText));
            setTimeout(() => {
                props.navigation.navigate(
                    'Quizz screen', 
                    {themeId: themeId}
                );
            }, 500)
        }
    };

    const renderThemeItem = (itemData: any) => {
        return (
            <ThemeCard color={itemData.item.color} onPress={() => handlePress(itemData.item.id)}>{itemData.item.name}</ThemeCard>
        );
    };

    return (
        <View style={styles.screen}>
            <View style={styles.addMargin}>
                <CustomInput 
                    label={'Number of questions'} 
                    value={inputText}
                    setValue={setInputText}
                    keyboardType={'number-pad'}
                />
            </View>
            <View style={styles.themesWrapper}>
                <Instructions type={instructionsText === 'regular' ? 'regular' : 'error'}>{instructionsText === 'regular' ? 'Click on a theme to select it' : 'Please select a number of questions'}</Instructions>
                <FlatList 
                    keyExtractor={(item, index) => item.id}
                    data={THEMES}
                    renderItem={renderThemeItem}
                    numColumns={2}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
    },
    addMargin: {
        padding: 5,
    },
    themesWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 130
    },
});

export default ParamsScreen;