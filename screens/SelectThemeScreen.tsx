import React from 'react';
import { 
    View, 
    Text,  
    StyleSheet
} from 'react-native';

import CustomButton from '../components/UI/CustomButton';
import Instructions from '../components/UI/Instructions';
import ThemeCard from '../components/ThemeCard';

interface Props {
    navigation: any,
}

const SelectThemeScreen: React.FC<Props> = (props) => {
    const createNewTheme = () => {
        props.navigation.navigate(
            'New theme', 
        );
    }
    return (
        <View style={styles.screenWrapper}>
            <Instructions>Click on a theme to edit it or create a new one.</Instructions>
            <View style={styles.themesWrapper}>
                <ThemeCard color={'primary'}>Theme name</ThemeCard>
                <ThemeCard color={'accent'}>Theme name</ThemeCard>
                <ThemeCard color={'accent'}>Theme name</ThemeCard>
                <ThemeCard color={'primary'}>Theme name</ThemeCard>
            </View>
            <CustomButton color={'primary'} onPress={createNewTheme}>Create a new theme</CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screenWrapper: {
        padding: 25,
    },
    themesWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
});

export default SelectThemeScreen;