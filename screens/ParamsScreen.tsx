import React, {useState} from 'react';
import { 
    View, 
    Text,  
    StyleSheet
} from 'react-native';

import CustomInput from '../components/UI/CustomInput';
import Instructions from '../components/UI/Instructions';
import ThemeCard from '../components/ThemeCard';

interface Props {
    navigation: any
}

const ParamsScreen: React.FC<Props> = (props) => {
    const [inputText, setInputText] = useState<string>('');

    const handlePress = () => {
        props.navigation.navigate(
            'Quizz screen', 
        );
    };

    return (
        <View style={styles.screen}>
            <CustomInput 
                label={'Number of questions'} 
                value={inputText}
                setValue={setInputText}
            />
            <View style={styles.themesWrapper}>
                <Instructions>Click on a theme to select it</Instructions>
                <ThemeCard color={'primary'} onPress={handlePress}>Theme name</ThemeCard>
                <ThemeCard color={'accent'} onPress={handlePress}>Theme name</ThemeCard>
                <ThemeCard color={'accent'} onPress={handlePress}>Theme name</ThemeCard>
                <ThemeCard color={'primary'} onPress={handlePress}>Theme name</ThemeCard>
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
    themesWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    }
});

export default ParamsScreen;