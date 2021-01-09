import { QUESTIONS } from '../../data/dummy-data.js';
import { THEMES } from '../../data/dummy-data.js';
import Theme from '../../models/theme.js';

import { 
    CREATE_QUIZZ,
    CREATE_THEME
} from '../actions/quizz';

const initialState = {
    currentQuizz: [],
    themes: THEMES
};

const quizzReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_QUIZZ:
            const questionsList = QUESTIONS.filter(question => question.themeId === action.theme);
            /*
            console.log('action.theme', action.theme);
            console.log('questionsList', questionsList);
            */
            const newQuizz = [];
            for (let i = 0; i < action.questionsNumber; i ++) {
                const randomIndex = Math.floor((Math.random() * questionsList.length - 1) + 1);
                /*
                console.log('randomIndex', randomIndex);
                console.log('questionsList[randomIndex]', questionsList[randomIndex]);
                */
                newQuizz.push(questionsList[randomIndex])
            }
            
            return {
                ...state,
                currentQuizz: newQuizz
            }
        case CREATE_THEME:
            const themeName = action.name;
            const newTheme = new Theme(
                't90',
                themeName,
                'accent'
            );
            
            console.log('newTheme', newTheme);

            return {
                ...state,
                themes: state.themes.concat(newTheme)
            }

        default: 
            return state;
    }
}

export default quizzReducer;