import { QUESTIONS } from '../../data/dummy-data.js';
import { THEMES } from '../../data/dummy-data.js';
import Theme from '../../models/theme.js';
import Question from '../../models/question.js';

import {generateRandomUid} from '../../service/random-uuid';

import { 
    CREATE_QUIZZ,
    CREATE_THEME,
    CREATE_QUESTION
} from '../actions/quizz';

const initialState = {
    currentQuizz: [],
    themes: THEMES,
    questions: QUESTIONS
};

const quizzReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_QUIZZ:
            const questionsList = state.questions.filter(question => question.themeId === action.theme);
            const newQuizz = [];

            for (let i = 0; i < action.questionsNumber; i ++) {
                const randomIndex = Math.floor((Math.random() * questionsList.length - 1) + 1);
                newQuizz.push(questionsList[randomIndex])
            }
            
            return {
                ...state,
                currentQuizz: newQuizz
            }
            
        case CREATE_THEME:
            const themeName = action.name;
            const themeUid = action.themeId;
            const newTheme = new Theme(
                themeUid,
                themeName,
                'accent'
            );

            return {
                ...state,
                themes: state.themes.concat(newTheme)
            }

        case CREATE_QUESTION:
            const questionUid = 'q-' + generateRandomUid();
            const themeId = action.themeId;
            const question = action.question;
            const answer = action.answer;

            const newQuestion = new Question(
                questionUid,
                themeId,
                question,
                answer
            );
            return {
                ...state,
                questions: state.questions.concat(newQuestion)
            }

        default: 
            return state;
    }
}

export default quizzReducer;