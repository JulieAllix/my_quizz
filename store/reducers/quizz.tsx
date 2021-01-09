import { QUESTIONS } from '../../data/dummy-data.js';

import { 
    CREATE_QUIZZ
} from '../actions/quizz';

const initialState = {
    currentQuizz: []
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
        default: 
            return state;
    }
}

export default quizzReducer;