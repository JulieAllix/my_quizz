import React, {useState} from 'react';
import { 
    View, 
    Text,  
    StyleSheet,
    FlatList
} from 'react-native';

import CustomInput from '../components/UI/CustomInput';
import Instructions from '../components/UI/Instructions';
import ThemeCard from '../components/ThemeCard';

import {THEME} from "../data/dummy-data.js";

interface Props {
    navigation: any
}

const ParamsScreen: React.FC<Props> = (props) => {
    const [inputText, setInputText] = useState<string>('');

    const handlePress = (themeId: string) => {
        props.navigation.navigate(
            'Quizz screen', 
            {themeId: themeId}
        );
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
                />
            </View>
            <View style={styles.themesWrapper}>
                <Instructions>Click on a theme to select it</Instructions>
                <FlatList 
                    keyExtractor={(item, index) => item.id}
                    data={THEME}
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