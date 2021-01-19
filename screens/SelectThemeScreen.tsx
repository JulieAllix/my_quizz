import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { 
    View, 
    FlatList,  
    StyleSheet
} from 'react-native';

import CustomButton from '../components/UI/CustomButton';
import Instructions from '../components/UI/Instructions';
import ThemeCard from '../components/ThemeCard';

interface Props {
    navigation: any,
}

const SelectThemeScreen: React.FC<Props> = (props) => {
    const themes = useSelector(state => state.quizz.themes);

    useEffect(() => {
        
    }, [themes])

    const createNewTheme = () => {
        props.navigation.navigate(
            'New theme', 
        );
    };

    const handlePress = (themeId: string) => {
        props.navigation.navigate(
            'Edit theme', 
            {themeId: themeId}
        );
    };

    const renderThemeItem = (itemData: any) => {
        return (
            <ThemeCard color={itemData.item.color} onPress={() => handlePress(itemData.item.id)}>{itemData.item.name}</ThemeCard>
        );
    };

    return (
        <View style={styles.screenWrapper}>
                <Instructions type={'regular'}>Create a new theme or click on an existing theme to edit it.</Instructions>
                <View style={styles.themesWrapper}>
                    <FlatList 
                        keyExtractor={(item, index) => item.id}
                        data={themes}
                        renderItem={renderThemeItem}
                        numColumns={2}
                    />
                </View>
                <CustomButton color={'primary'} onPress={createNewTheme}>Create a new theme</CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screenWrapper: {
        padding: 20,
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 105
    },
    themesWrapper: {
        marginBottom: 10
    },
});

export default SelectThemeScreen;