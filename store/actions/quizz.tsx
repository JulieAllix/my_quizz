export const CREATE_QUIZZ = 'CREATE_QUIZZ';
export const CREATE_THEME = 'CREATE_THEME';
export const CREATE_QUESTION = 'CREATE_QUESTION';

export const createQuizz = (themeId: string, numberOfQuestions: number|null) => {
    return { 
        type: CREATE_QUIZZ, 
        theme: themeId,
        questionsNumber: numberOfQuestions
    };
};

export const createTheme = (themeName: string, newUid: string) => {
    return { 
        type: CREATE_THEME, 
        name: themeName,
        themeId: newUid
    };
};

export const createQuestion = (themeId: string, questionName: string, answerName: string) => {
    return { 
        type: CREATE_QUESTION, 
        themeId: themeId,
        question: questionName,
        answer: answerName
    };
};