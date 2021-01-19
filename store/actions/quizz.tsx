export const CREATE_QUIZZ = 'CREATE_QUIZZ';
export const CREATE_THEME = 'CREATE_THEME';
export const UPDATE_THEME = 'UPDATE_THEME';
export const DELETE_THEME = 'DELETE_THEME';
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

export const updateTheme = (newThemeName: string, themeUid: string) => {
    return { 
        type: UPDATE_THEME, 
        name: newThemeName,
        themeId: themeUid
    };
};

export const deleteTheme = (themeUid: string) => {
    return { 
        type: DELETE_THEME, 
        themeId: themeUid
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