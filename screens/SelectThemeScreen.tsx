import React from 'react';
import { 
    View, 
    Text,  
    StyleSheet
} from 'react-native';

import MyButton from '../components/UI/Button';
import Instructions from '../components/UI/Instructions';
import ThemeCard from '../components/ThemeCard';

const SelectThemeScreen = () => {
    return (
        <View style={styles.screenWrapper}>
            <Instructions>Click on a theme to edit it or create a new one.</Instructions>
            <View style={styles.themesWrapper}>
                <ThemeCard color={'primary'}>Theme name</ThemeCard>
                <ThemeCard color={'accent'}>Theme name</ThemeCard>
                <ThemeCard color={'accent'}>Theme name</ThemeCard>
                <ThemeCard color={'primary'}>Theme name</ThemeCard>
            </View>
            <MyButton color={'primary'}>Create a new theme</MyButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screenWrapper: {
        padding: 20,
        
    },
    themesWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between' 
    },
});

export default SelectThemeScreen;